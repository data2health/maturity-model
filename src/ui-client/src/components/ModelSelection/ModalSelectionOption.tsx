import React from 'react';
import { BaseModel, FormState } from '../../model/ModelsState';
import { FiCheck } from 'react-icons/fi';
import { UserAnswers } from '../../model/User';

interface Props {
    answers: UserAnswers;
    index: number
    model: BaseModel;
    onClick: (index: number) => any;
}

export class ModelSelectionOption extends React.PureComponent<Props> {
    private className = 'model-selection-option';

    public render() {
        const c = this.className;
        const { answers, model } = this.props;
        const complete = answers[model.completeField] === FormState.Complete;

        return (
            <div className={`${c} ${model.selected ? 'selected' : ''} ${model.description.length > 450 ? 'preview' : ''}`} onClick={this.handleModelClick}>
                {complete && <div className={`${c}-complete`}>Complete</div>}
                <div className={`${c}-top`}>
                    <div className={`${c}-checkbox`}>
                        <FiCheck />
                    </div>
                    <div className={`${c}-name`}>{model.name}</div>
                </div>
                <div className={`${c}-bottom`}>
                    <div className={`${c}-desc`}>{model.description}</div>
                </div>
            </div>
        );
    }

    private handleModelClick = () => {
        const { index, onClick } = this.props;
        onClick(index);
    }
}