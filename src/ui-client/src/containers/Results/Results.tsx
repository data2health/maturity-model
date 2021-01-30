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

import { AllModelsCompleted } from '../../model/Score';
import { RIOSM } from '../../model/Models/RIOSM';
import { PrecisionHealth } from '../../model/Models/PrecisionHealth';
import { Quintegra_eHMM } from '../../model/Models/Quintegra_eHMM';
import { HAAM } from '../../model/Models/HAAM';
import { SEDoH } from '../../model/Models/SEDoH';
import { NESTcc } from '../../model/Models/NESTcc';
import { NLP } from '../../model/Models/NLP';

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
                            content={<Chart totalMod={data.totalCompletedModels} modComplete={data.mappedCompletedModels} data={data.ChartDataPoint} models={models} user={user} />}
                        />

                        {/* Result summaries */}
                        <Summary modCompleted={data.mappedCompletedModels} models={models} user={user} />

                        {/* <div>{mods}</div> */}
                    </div>
                )} 
            />
        )
    }

    // private getMappedCompletedModels = (completedModels: AllModelsCompleted): Map<string, number> => {
    //     const { models } = this.props;
    //     const mappedCompletedModels = new Map<string, number>();
        
    //     models.map(m => {
    //         const modelName = m.shortName.toLowerCase().replace(' ', '_');
    //         mappedCompletedModels.set(modelName, completedModels.eprmm)
    //     });

    //     models.map(
    //         function (m) {
    //             switch (m.name) {
    //                 case RIOSM.name: {
    //                     data.push({ model: m.shortName, all: all.riosm, user: user.riosm, max: 1.0 });
    //                     break;
    //                 };
    //                 case PrecisionHealth.name: {
    //                     data.push({ model: m.shortName, all: all.precision_health, user: user.precision_health, max: 1.0 });
    //                     break;
    //                 };
    //                 case Quintegra_eHMM.name: {
    //                     data.push({ model: m.shortName, all: all.quintegra_ehmm, user: user.quintegra_ehmm, max: 1.0 });
    //                     break;
    //                 };
    //                 case HAAM.name: {
    //                     data.push({ model: m.shortName, all: all.haam, user: user.haam, max: 1.0 });
    //                     break;
    //                 };
    //                 case SEDoH.name: {
    //                     data.push({ model: m.shortName, all: all.sedoh, user: user.sedoh, max: 1.0 });
    //                     break;
    //                 };
    //                 case NESTcc.name: {
    //                     data.push({ model: m.shortName, all: all.nestcc, user: user.nestcc, max: 1.0 });
    //                     break;
    //                 };
    //                 case NLP.name: {
    //                     data.push({ model: m.shortName, all: all.nlp, user: user.nlp, max: 1.0 });
    //                     break;
    //                 };
    //             };
    //         }
    //     );

    //     // riosm
    //     // quintegra_ehmm
    //     // haam: number
    //     // idc_healthcare_it
    //     // himss_emram
    //     // himss_ccmm
    //     // nehta_imm
    //     // nestcc
    //     // nlp
    //     // eprmm
    //     // sedoh
    //     // precision_health

    //     return mappedCompletedModels;
    // }


    // private getChartData = (): ChartDataPoint[] => {
    private getChartData = (): modelData => {
        const { all, user } = this.props.user.results;
        const { models_completed } = this.props.user.results.all;
        const models = this.props.models.filter(m => m.selected);
        const data: ChartDataPoint[] = [];
        
        const mappedCompletedModels = new Map<string, number>();
        const completedModels: number[] = [];

        models.map(
            function (m) {
                switch (m.name) {
                    case RIOSM.name: {
                        data.push({ model: m.shortName, all: all.riosm, user: user.riosm, max: 1.0 });
                        
                        mappedCompletedModels.set(m.shortName, models_completed.riosm)
                        completedModels.push(models_completed.riosm);

                        break;
                    };
                    case PrecisionHealth.name: {
                        data.push({ model: m.shortName, all: all.precision_health, user: user.precision_health, max: 1.0 });
                        
                        mappedCompletedModels.set(m.shortName, models_completed.precision_health)
                        completedModels.push(models_completed.precision_health);

                        break;
                    };
                    case Quintegra_eHMM.name: {
                        data.push({ model: m.shortName, all: all.quintegra_ehmm, user: user.quintegra_ehmm, max: 1.0 });
                        
                        mappedCompletedModels.set(m.shortName, models_completed.quintegra_ehmm)
                        completedModels.push(models_completed.quintegra_ehmm);
                        
                        break;
                    };
                    case HAAM.name: {
                        data.push({ model: m.shortName, all: all.haam, user: user.haam, max: 1.0 });
                        
                        mappedCompletedModels.set(m.shortName, models_completed.haam);
                        completedModels.push(models_completed.haam);
                        
                        break;
                    };
                    case SEDoH.name: {
                        data.push({ model: m.shortName, all: all.sedoh, user: user.sedoh, max: 1.0 });
                        
                        mappedCompletedModels.set(m.shortName, models_completed.sedoh)
                        completedModels.push(models_completed.sedoh);
                        
                        break;
                    };
                    case NESTcc.name: {
                        data.push({ model: m.shortName, all: all.nestcc, user: user.nestcc, max: 1.0 });
                        
                        mappedCompletedModels.set(m.shortName, models_completed.nestcc)
                        completedModels.push(models_completed.nestcc);
                        
                        break;
                    };
                    case NLP.name: {
                        data.push({ model: m.shortName, all: all.nlp, user: user.nlp, max: 1.0 });
                        
                        mappedCompletedModels.set(m.shortName, models_completed.nlp)
                        completedModels.push(models_completed.nlp);
                        
                        break;
                    };
                };
            }
        );

        // console.log(data)
        // return data;
        const totalCompletedModels = completedModels.reduce((total, currentValue) => total = total + currentValue, 0);

        return Object.assign({ ChartDataPoint: data, mappedCompletedModels: mappedCompletedModels, totalCompletedModels: totalCompletedModels }) as modelData;
    };
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