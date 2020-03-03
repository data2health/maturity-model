import React from 'react'
import { AnswerStats } from '../../../model/Score';
import { BaseModel } from '../../../model/ModelsState';
import { UserState } from '../../../model/UserState';
import QuestionSummary from '../QuestionSummary/QuestionSummary';
import './ModelSummary.css';

interface Props {
    user: UserState;
    model: BaseModel;
}

export default class ModelSummary extends React.PureComponent<Props> {
    private className = 'model-summary';

    public render() {
        const c = this.className;
        const { model } = this.props;
        const { answers } = this.props.user;

        return (
            <div className={c}>
                <div className={`${c}-breakdown`}>
                    {model.questions.map((q, i) => {
                        const a = answers[q.answerField];
                        const result = this.getResults(model.shortName, i);
                        return (
                            <QuestionSummary answer={a} question={q} index={i} results={result} />
                        )
                    })}
                </div>
            </div>
        );
    };

    private getResults = (modelName: string, index: number): AnswerStats => {
        if (modelName === this.res.RIOSM.name) {
            return this.res.RIOSM.questions[index];
        };
        if (modelName === this.res.Quintegra_eHMM.name) {
            return this.res.Quintegra_eHMM.questions[index];
        };
        if (modelName === this.res.PrecisionHealth.name) {
            return this.res.PrecisionHealth.questions[index];
        };
        return {mean: 0 , min: 0, max: 0, median: 0};
    }

    private results = this.props.user.results;
    private riosm = this.results.all.riosm_questions;
    private quintegra_eHMMR = this.results.all.quintegra_ehmm_questions;
    private precisionHealth = this.results.all.precision_health_questions;

    private res: Result = {
        RIOSM: {
            name: 'RIOSM',
            questions: [
                {
                    mean: this.riosm.q1Stats.mean,
                    min: this.riosm.q1Stats.min,
                    max: this.riosm.q1Stats.max,
                    median: this.riosm.q1Stats.median
                },
                {
                    mean: this.riosm.q2Stats.mean,
                    min: this.riosm.q2Stats.min,
                    max: this.riosm.q2Stats.max,
                    median: this.riosm.q2Stats.median
                },
                {
                    mean: this.riosm.q3Stats.mean,
                    min: this.riosm.q3Stats.min,
                    max: this.riosm.q3Stats.max,
                    median: this.riosm.q3Stats.median
                },
                {
                    mean: this.riosm.q4Stats.mean,
                    min: this.riosm.q4Stats.min,
                    max: this.riosm.q4Stats.max,
                    median: this.riosm.q4Stats.median
                },
                {
                    mean: this.riosm.q5Stats.mean,
                    min: this.riosm.q5Stats.min,
                    max: this.riosm.q5Stats.max,
                    median: this.riosm.q5Stats.median
                },
                {
                    mean: this.riosm.q6Stats.mean,
                    min: this.riosm.q6Stats.min,
                    max: this.riosm.q6Stats.max,
                    median: this.riosm.q6Stats.median
                },
                {
                    mean: this.riosm.q7Stats.mean,
                    min: this.riosm.q7Stats.min,
                    max: this.riosm.q7Stats.max,
                    median: this.riosm.q7Stats.median
                },
                {
                    mean: this.riosm.q8Stats.mean,
                    min: this.riosm.q8Stats.min,
                    max: this.riosm.q8Stats.max,
                    median: this.riosm.q8Stats.median
                },
                {
                    mean: this.riosm.q9Stats.mean,
                    min: this.riosm.q9Stats.min,
                    max: this.riosm.q9Stats.max,
                    median: this.riosm.q9Stats.median
                },
                {
                    mean: this.riosm.q10Stats.mean,
                    min: this.riosm.q10Stats.min,
                    max: this.riosm.q10Stats.max,
                    median: this.riosm.q10Stats.median
                },
                {
                    mean: this.riosm.q11Stats.mean,
                    min: this.riosm.q11Stats.min,
                    max: this.riosm.q11Stats.max,
                    median: this.riosm.q11Stats.median
                }
            ]
        },
        Quintegra_eHMM: {
            name: 'Quintegra eHMM',
            questions: [
                {
                    mean: this.quintegra_eHMMR.q1Stats.mean,
                    min: this.quintegra_eHMMR.q1Stats.min,
                    max: this.quintegra_eHMMR.q1Stats.max,
                    median: this.quintegra_eHMMR.q1Stats.median 
                }
            ]
        },
        PrecisionHealth: {
            name: 'Precision Health',
            questions: [
                {
                    mean: this.precisionHealth.q1Stats.mean,
                    min: this.precisionHealth.q1Stats.min,
                    max: this.precisionHealth.q1Stats.max,
                    median: this.precisionHealth.q1Stats.median
                },
                {
                    mean: this.precisionHealth.q2Stats.mean,
                    min: this.precisionHealth.q2Stats.min,
                    max: this.precisionHealth.q2Stats.max,
                    median: this.precisionHealth.q2Stats.median
                },
                {
                    mean: this.precisionHealth.q3Stats.mean,
                    min: this.precisionHealth.q3Stats.min,
                    max: this.precisionHealth.q3Stats.max,
                    median: this.precisionHealth.q3Stats.median
                },
                {
                    mean: this.precisionHealth.q4Stats.mean,
                    min: this.precisionHealth.q4Stats.min,
                    max: this.precisionHealth.q4Stats.max,
                    median: this.precisionHealth.q4Stats.median
                },
                {
                    mean: this.precisionHealth.q5Stats.mean,
                    min: this.precisionHealth.q5Stats.min,
                    max: this.precisionHealth.q5Stats.max,
                    median: this.precisionHealth.q5Stats.median
                },
                {
                    mean: this.precisionHealth.q6Stats.mean,
                    min: this.precisionHealth.q6Stats.min,
                    max: this.precisionHealth.q6Stats.max,
                    median: this.precisionHealth.q6Stats.median
                },
                {
                    mean: this.precisionHealth.q7Stats.mean,
                    min: this.precisionHealth.q7Stats.min,
                    max: this.precisionHealth.q7Stats.max,
                    median: this.precisionHealth.q7Stats.median
                },
                {
                    mean: this.precisionHealth.q8Stats.mean,
                    min: this.precisionHealth.q8Stats.min,
                    max: this.precisionHealth.q8Stats.max,
                    median: this.precisionHealth.q8Stats.median
                },
                {
                    mean: this.precisionHealth.q9Stats.mean,
                    min: this.precisionHealth.q9Stats.min,
                    max: this.precisionHealth.q9Stats.max,
                    median: this.precisionHealth.q9Stats.median
                },
                {
                    mean: this.precisionHealth.q10Stats.mean,
                    min: this.precisionHealth.q10Stats.min,
                    max: this.precisionHealth.q10Stats.max,
                    median: this.precisionHealth.q10Stats.median
                }
            ]
        }
    };
}

interface Result {
    RIOSM: ModelResult;
    Quintegra_eHMM: ModelResult;
    PrecisionHealth: ModelResult;
};

interface ModelResult {
    name: string;
    questions: AnswerStats[];
};