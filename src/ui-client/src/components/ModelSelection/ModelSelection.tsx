import React from 'react';
import { UserState } from '../../model/UserState';
import BaseForm from '../BaseForms/BaseForm/BaseForm';
import { BaseModel } from '../../model/ModelsState';
import { FiCheck } from 'react-icons/fi';
import { modelSetSelected } from '../../actions/model';
import './ModelSelection.css';

interface Props {
    dispatch: any;
    models: BaseModel[];
    user: UserState;
}

export default class ModelSelection extends React.PureComponent<Props> {
    private className = 'model-selection';

    public render() {
        const c = this.className;
        const { models, user } = this.props;
        const modelClass = `${c}-option`
        const header = `Hi ${user.answers.user_fname}! Welcome to the CD2H Maturity Model Survey`;

        return (
            <BaseForm
                header={header}
                headerLarge={true}
                content={(
                    <div className={c}>
                        <div className={`${c}-main-text`}>
                            <div>
                                Organizations struggle with understanding the strategic importance of improving informatics capabilities, embracing open science, 
                                and enhancing IT deployment. CTSAs play a central role in advancing these capabilities, but the pathway to facilitating this process 
                                isn't always clear.  
                            </div>
                            <div>
                               The CD2H Maturity Model Survey is designed to help CTSAs better understand their levels of informatics maturity and how they compare to others. All data 
                               entered is private and will not be shared with other CTSAs.
                            </div>
                            <div className={`${c}-emphasis`}>
                                Start by selecting the Maturity Models of interest to you below:
                                <span className={`${c}-selected-count`}>
                                    {models.filter(m => m.selected).length} / {models.length} selected
                                </span>
                            </div>
                        </div>
                        <div className={`${c}-option-container`}>

                            {/* Selectable models */}
                            {models.map((m,i) => {
                                return (
                                    <div key={i} className={`${modelClass} ${m.selected ? 'selected' : ''}`} onClick={this.handleModelClick.bind(null, i)}>
                                        <div className={`${modelClass}-top`}>
                                            <div className={`${modelClass}-checkbox`}>
                                                <FiCheck />
                                            </div>
                                            <div className={`${modelClass}-name`}>{m.name}</div>
                                        </div>
                                        <div className={`${modelClass}-bottom`}>
                                            <div className={`${modelClass}-desc`}>{m.description}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            />
        );
    }

    private handleModelClick = (index: number) => {
        const { dispatch } = this.props;
        dispatch(modelSetSelected(index));
    }
}