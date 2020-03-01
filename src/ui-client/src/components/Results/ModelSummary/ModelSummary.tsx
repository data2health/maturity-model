import React from 'react'
import { BaseModel } from '../../../model/ModelsState';
import { UserState } from '../../../model/UserState';
import QuestionSummary from '../QuestionSummary/QuestionSummary';
import './ModelSummary.css' ;

interface Props {
    user: UserState;
    model: BaseModel;
}

export default class ModelSummary extends React.PureComponent<Props> {
    private className = 'model-summary';

    public render() {
        const c = this.className;
        const { model } = this.props;
        const { answers, results } = this.props.user;

        return (
            <div className={c}>
                <div className={`${c}-breakdown`}>
                    {model.questions.map((q, i) => {
                        const a = answers[q.answerField];
                        return (
                            <QuestionSummary answer={a} question={q} index={i} results={results} />
                        )
                    })}
                </div>
            </div>
        );
    }
}