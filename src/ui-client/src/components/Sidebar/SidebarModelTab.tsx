import React from 'react';
import { BaseModel, FormState } from '../../model/ModelsState';
import { UserAnswers } from '../../model/User';
import { setCurrentView } from '../../actions/general';
import { AppView } from '../../model/GeneralState';
import { modelSetCurrent } from '../../actions/model';
import { FiCheck } from 'react-icons/fi';
import './SidebarModelTab.css';

interface Props {
    answers: UserAnswers;
    dispatch: any;
    model: BaseModel;
    selected: boolean;
}

export default class SidebarModelTab extends React.PureComponent<Props> {
    private className = 'sidebar-model-tab';

    public render() {
        const c = this.className;
        const { model, selected } = this.props;

        return (
            <div 
                className={`${c} ${selected ? 'selected' : ''}`} 
                onClick={this.handleClick}>
                {model.name}
                {this.getProgressIcon()}
            </div>
        );
    }

    private getProgressIcon = () => {
        const c = this.className;
        const { answers, model } = this.props;
        const completed = answers[model.completeField] === FormState.Complete;

        if (completed) {
            return (
                <div className={`${c}-progress-container complete`}>
                    <div className={`${c}-progress`}>
                        <FiCheck />
                    </div>
                </div>
            );
        }

        const modelQuestions = model.questions.map(q => answers[q.answerField]);
        const doneQuestions = modelQuestions.filter(q => q !== '');

        return (
            <div className={`${c}-progress-container`}>
                <div className={`${c}-progress`}>
                    {Math.round(doneQuestions.length / modelQuestions.length * 100)}%
                </div>
            </div>
        );
    }

    private handleClick = () => {
        const { dispatch, model } = this.props;
        dispatch(setCurrentView(AppView.ModelSurvey));
        dispatch(modelSetCurrent(model));
    }
}