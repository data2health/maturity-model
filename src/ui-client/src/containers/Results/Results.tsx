import React from 'react'
import { BaseModel } from '../../model/ModelsState';
import { UserState, AnswerScoreLoadState } from '../../model/UserState';
import { getScores } from '../../actions/user';
import LoaderIcon from '../../components/Other/LoaderIcon/LoaderIcon';
import BaseForm from '../../components/BaseForms/BaseForm/BaseForm';
import BaseFormSection from '../../components/BaseForms/BaseForm/BaseFormSection';
import Chart from '../../components/Results/Chart';
import Summary from '../../components/Results/Summary'
import { RIOSM } from '../../model/Models/RIOSM';
import { PrecisionHealth } from '../../model/Models/PrecisionHealth';
import { Quintegra_eHMM } from '../../model/Models/Quintegra_eHMM';
import { HAAM } from '../../model/Models/HAAM';
import { SEDoH } from '../../model/Models/SEDoH';
import { NESTcc } from '../../model/Models/NESTcc';
import { NLP } from '../../model/Models/NLP';
import './Results.css';

interface Props {
    dispatch: any;
    user: UserState;
    models: BaseModel[];
}

interface State {
    show: boolean;
}

interface ChartDataPoint {
    all: number;
    max: number;
    model: string;
    user: number;
}

interface modelData {
    ChartDataPoint: ChartDataPoint[];
    mappedCompletedModels: Map<string, number>;
    totalCompletedModels: number;
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
        const data = this.getChartData();

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
                            content={<Chart totalCompletedModels={data.totalCompletedModels} data={data.ChartDataPoint} models={models} />}
                        />

                        {/* Result summaries */}
                        <Summary completedModels={data.mappedCompletedModels} models={models} user={user} />
                    </div>
                )} 
            />
        )
    }

    private getChartData = (): modelData => {
        const { all, user } = this.props.user.results;
        const { models_completed } = this.props.user.results.all;
        const models = this.props.models.filter(m => m.selected);
        const chartDataPoint: ChartDataPoint[] = [];
        
        const mappedCompletedModels = new Map<string, number>();
        const completedModels: number[] = [];

        models.map(
            function (m) {
                switch (m.name) {
                    case RIOSM.name: {
                        const model = m.shortName + ' (' + models_completed.riosm.toString() + ')';
                        chartDataPoint.push({ model: model, all: all.riosm, user: user.riosm, max: 1.0 });
                        mappedCompletedModels.set(m.shortName, models_completed.riosm);
                        completedModels.push(models_completed.riosm);
                        break;
                    };
                    case PrecisionHealth.name: {
                        const model = m.shortName + ' (' + models_completed.precision_health.toString() + ')';
                        chartDataPoint.push({ model: model, all: all.precision_health, user: user.precision_health, max: 1.0 });
                        mappedCompletedModels.set(m.shortName, models_completed.precision_health);
                        completedModels.push(models_completed.precision_health);
                        break;
                    };
                    case Quintegra_eHMM.name: {
                        const model = m.shortName + ' (' + models_completed.quintegra_ehmm.toString() + ')';
                        chartDataPoint.push({ model: model, all: all.quintegra_ehmm, user: user.quintegra_ehmm, max: 1.0 });
                        mappedCompletedModels.set(m.shortName, models_completed.quintegra_ehmm);
                        completedModels.push(models_completed.quintegra_ehmm);
                        break;
                    };
                    case HAAM.name: {
                        const model = m.shortName + ' (' + models_completed.haam.toString() + ')';
                        chartDataPoint.push({ model: model, all: all.haam, user: user.haam, max: 1.0 });
                        mappedCompletedModels.set(m.shortName, models_completed.haam);
                        completedModels.push(models_completed.haam);
                        break;
                    };
                    case SEDoH.name: {
                        const model = m.shortName + ' (' + models_completed.sedoh.toString() + ')';
                        chartDataPoint.push({ model: model, all: all.sedoh, user: user.sedoh, max: 1.0 });
                        mappedCompletedModels.set(m.shortName, models_completed.sedoh);
                        completedModels.push(models_completed.sedoh);
                        break;
                    };
                    case NESTcc.name: {
                        const model = m.shortName + ' (' + models_completed.nestcc.toString() + ')';
                        chartDataPoint.push({ model: model, all: all.nestcc, user: user.nestcc, max: 1.0 });
                        mappedCompletedModels.set(m.shortName, models_completed.nestcc);
                        completedModels.push(models_completed.nestcc);
                        break;
                    };
                    case NLP.name: {
                        const model = m.shortName + ' (' + models_completed.nlp.toString() + ')';
                        chartDataPoint.push({ model: model, all: all.nlp, user: user.nlp, max: 1.0 });
                        mappedCompletedModels.set(m.shortName, models_completed.nlp);
                        completedModels.push(models_completed.nlp);
                        break;
                    };
                };
            }
        );

        const totalCompletedModels = completedModels.reduce((total, currentValue) => total = total + currentValue, 0);

        return Object.assign({ ChartDataPoint: chartDataPoint, mappedCompletedModels: mappedCompletedModels, totalCompletedModels: totalCompletedModels }) as modelData;
    };
}