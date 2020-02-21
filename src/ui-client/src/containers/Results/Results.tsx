import React from 'react'
import { BaseModel } from '../../model/ModelsState';
import { UserState, AnswerScoreLoadState } from '../../model/UserState';
import { getScores } from '../../actions/user';
import LoaderIcon from '../../components/Other/LoaderIcon/LoaderIcon';
import BaseForm from '../../components/BaseForms/BaseForm/BaseForm';
import PolarChart from '../../components/Results/PolarChart';
import RIOSMSummary from '../../components/Results/RIOSMSummary/RIOSMSummary';
import BaseFormSection from '../../components/BaseForms/BaseForm/BaseFormSection';
import StackedBarChart from '../../components/Results/StackedBarChart';
import './Results.css';

interface Props {
    dispatch: any;
    user: UserState;
    models: BaseModel[];
}

interface State {
    show: boolean;
}

export default class Results extends React.PureComponent<Props,State> {
    private className = 'results';

    public constructor(props: Props) {
        super(props);
        this.state = {
            show: false
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
        const { user } = this.props;
        const { show } = this.state;

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
                        <BaseFormSection
                            header={"Here's how your answers compare to other sites"}
                            headerLarge={true}
                            subheader={'All site data anonymously aggregated'}
                            content={this.getContent()}
                        />
                        <BaseFormSection
                            header={"Let's see how your RIOSM answers compare to others"}
                            headerLarge={true}
                            subheader=
                                {<span>
                                    The Research Informatics Maturity Model uses a 5-point scoring system to benchmark an 
                                    organization's overall and category-level maturity. The score corresponds to the five-level 
                                    maturity continuum first proposed in the <a href='https://en.wikipedia.org/wiki/Capability_Maturity_Model' target='_'>Capability Maturity Model</a>.
                                </span>}
                            content={<RIOSMSummary user={user} />}
                        />
                    </div>
                )} 
            />
        )
    }

    private getContent = () => {
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
}