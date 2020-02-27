import React from 'react'
import { BaseModel } from '../../model/ModelsState';
import { UserState, AnswerScoreLoadState } from '../../model/UserState';
import { getScores } from '../../actions/user';
import LoaderIcon from '../../components/Other/LoaderIcon/LoaderIcon';
import BaseForm from '../../components/BaseForms/BaseForm/BaseForm';
import PolarChart from '../../components/Results/PolarChart';
import RIOSMSummary from '../../components/Results/RIOSMSummary/RIOSMSummary';
import PrecisionHealthSummary from '../../components/Results/PrecisionHealthSummary/PrecisionHealthSummary';
import Quintegra_eHMMSummary from '../../components/Results/Quintegra_eHMMSummary/Quintegra_eHMMSummary';
import BaseFormSection from '../../components/BaseForms/BaseForm/BaseFormSection';
import StackedBarChart from '../../components/Results/StackedBarChart';
import './Results.css';
import Menu from '../../components/Results/Menu/Menu'
import { DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from 'reactstrap';

interface Props {
    dispatch: any;
    user: UserState;
    models: BaseModel[];
}

interface State {
    show: boolean;
    showModel: string;
}

export default class Results extends React.PureComponent<Props,State> {
    private className = 'results';

    public constructor(props: Props) {
        super(props);
        this.state = {
            show: false,
            showModel: ''
        }
    }

    public componentDidMount() {
        const { dispatch, user } = this.props;
        setTimeout(() => this.setState({ show: true }), 50);

        if (user.answersLoadState === AnswerScoreLoadState.NotLoaded) {
            dispatch(getScores());
        }
    }

    public render() {
        const c = this.className;
        const classes = [ c ];
        const { user, models } = this.props;
        const { show } = this.state;
        const selected = models.filter(m => m.selected);

        if (!show) {
            classes.push('hidden');
        }

        /*
         * Show a loading spinner if waiting for scores.
         */
        if (user.answersLoadState === AnswerScoreLoadState.Loading) {
            return (
                <BaseForm 
                    header=''
                    content={(
                        <div className={`${c} ${c}-loading`}>
                            <LoaderIcon size={100} />
                        </div>
                    )}
                />
            );
        }

        /*
         * Show error message if score loading failed
         */
        if (user.answersLoadState === AnswerScoreLoadState.Failed) {
            return (
                <BaseForm 
                    header=''
                    content={(
                        <div className={c}>
                            <div className={`${c}-error`}>
                                <p>
                                    Whoops! An error occurred while trying to load your scores. We are sorry for the inconvenience.
                                </p>
                            </div>
                        </div>
                    )}
                />
            );
        }

        return (
            <BaseForm 
                content={(
                    <div className={c}>
                        {/* Chart results */}
                        <BaseFormSection
                            header={"Here's how your answers compare to other sites"}
                            headerLarge={true}
                            subheader={'All site data anonymously aggregated'}
                            content={this.getResultContent()}
                        />
                        
                        {/* Result summaries */}
                        {this.getSummaryContent()}
                        
                        {this.showResults(this.state.showModel)}
                        
                    </div>
                )} 
            />
        )
    }

    private getResultContent = () => {
        let content: string | JSX.Element | JSX.Element[]  = '';
        const c = 'results-none'
        const modelsSelectedLen = this.props.models.filter(m => m.selected).length;

        if (modelsSelectedLen === 0) {
            content = <div className={c}>No models selected.</div>
        } else if (modelsSelectedLen === 1 || modelsSelectedLen === 2 ) {
            content = <StackedBarChart models={this.props.models} user={this.props.user} />
        } else {
            content = <PolarChart models={this.props.models} user={this.props.user} />
        }

        return content;        
    }

    private handleModelSummary = (model: string) => {
        this.setState({showModel: model})

        return ;
    }

    private showResults = (model: string) => {
        if (model === 'Quintegra eHMM') {
            return (
                <BaseFormSection
                    header={`Let's see how your ${model} answers compare to others`}
                    headerLarge={true}
                    content={<Quintegra_eHMMSummary user={this.props.user} />}
                />
            )
        } else if (model === 'Precision Health') {
            return (
                <BaseFormSection
                    header={`Let's see how your ${model} answers compare to others`}
                    headerLarge={true}
                    content={<PrecisionHealthSummary user={this.props.user} />}
                />
            )
        } else {
            return (
                <BaseFormSection
                    header={`Let's see how your RIOSM answers compare to others`}
                    headerLarge={true}
                    subheader=
                        {<span>
                            The Research Informatics Maturity Model uses a 5-point scoring system to benchmark an 
                            organization's overall and category-level maturity. The score corresponds to the five-level 
                            maturity continuum first proposed in the <a href='https://en.wikipedia.org/wiki/Capability_Maturity_Model' target='_'>Capability Maturity Model</a>.
                        </span>}
                    content={<RIOSMSummary user={this.props.user} />}
                />
            )
        }
    }

    private getSummaryContent = () => {
        const selected = this.props.models.filter(m => m.selected);
        return (
            <div className='test-class'>
                            <UncontrolledDropdown size="lg">
                                <DropdownToggle caret> Select a Model </DropdownToggle>
                                <DropdownMenu>
                                    {selected.map(m => <DropdownItem onClick={this.handleModelSummary.bind(null, m.shortName)}> {m.shortName} </DropdownItem> )}
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </div>
            // <BaseFormSection
            //     header={`Let's see how your ${'MODEL'} answers compare to others`}
            //     headerLarge={true}
            //     // subheader=
            //         // {<span>
            //         //     The Research Informatics Maturity Model uses a 5-point scoring system to benchmark an 
            //         //     organization's overall and category-level maturity. The score corresponds to the five-level 
            //         //     maturity continuum first proposed in the <a href='https://en.wikipedia.org/wiki/Capability_Maturity_Model' target='_'>Capability Maturity Model</a>.
            //         // </span>}
            //     // content={<RIOSMSummary user={this.props.user} />}
            //     // content={<PrecisionHealthSummary user={this.props.user} />}
            //     content={<Quintegra_eHMMSummary user={this.props.user} />}
            // />
        )
    }

}