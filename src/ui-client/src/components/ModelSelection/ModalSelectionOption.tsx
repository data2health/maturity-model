import React from 'react';
import { BaseModel } from '../../model/ModelsState';
import { FiCheck } from 'react-icons/fi';

interface Props {
    index: number
    model: BaseModel;
    onClick: (index: number) => any;
}

export class ModelSelectionOption extends React.PureComponent<Props> {
    private className = 'model-selection-option';

    public render() {
        const c = this.className;
        const { model } = this.props;

        return (
            <div className={`${c} ${model.selected ? 'selected' : ''}`} onClick={this.handleModelClick}>
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