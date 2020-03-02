import React from 'react'
import { BaseModel } from '../../model/ModelsState';
import { UserState, AnswerScoreLoadState } from '../../model/UserState';
import { getScores } from '../../actions/user';
import LoaderIcon from '../../components/Other/LoaderIcon/LoaderIcon';
import BaseForm from '../../components/BaseForms/BaseForm/BaseForm';
import BaseFormSection from '../../components/BaseForms/BaseForm/BaseFormSection';
import Chart from '../../components/Results/Chart';
import Summary from '../../components/Results/Summary'
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
        const { user, models } = this.props;
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
                        {/* Chart results */}
                        <BaseFormSection
                            header={"Here's how your answers compare to other sites"}
                            headerLarge={true}
                            subheader={'All site data anonymously aggregated'}
                            content={<Chart models={models} user={user} />}
                        />

                        {/* Result summaries */}
                        <Summary models={models} user={user} />
                    </div>
                )} 
            />
        )
    }
}