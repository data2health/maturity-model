import React from 'react';
import { UserState } from '../../model/UserState';
import BaseForm from '../BaseForms/BaseForm/BaseForm';
import { BaseModel, FormState } from '../../model/ModelsState';
import { FiChevronRight } from 'react-icons/fi';
import { modelSetSelected, modelSetCurrent } from '../../actions/model';
import { setCurrentView } from '../../actions/general';
import { AppView } from '../../model/GeneralState';
import { ModelSelectionOption } from './ModalSelectionOption';
import './ModelSelection.css';

interface Props {
    dispatch: any;
    models: BaseModel[];
    user: UserState;
}

export default class ModelSelection extends React.PureComponent<Props> {
    private className = 'model-selection';

    public componentDidMount() {
        var mainInner = document.getElementsByClassName('main-inner');
        if (mainInner && mainInner[0]) {
            mainInner[0].scrollTop = 0;
        }
    }

    public render() {
        const c = this.className;
        const { models, user } = this.props;
        const selected = models.filter(m => m.selected);
        const selectedLen = selected.length;

        return (
            <BaseForm
                header={`Hi ${user.answers.user_fname}! Welcome back!`}
                headerLarge={true}
                content={(
                    <div className={c}>

                        {/* Main text */}
                        <div className={`${c}-main-text`}>
                            <div>
                               The CD2H Maturity Model survey is designed to help CTSAs better understand their levels of informatics maturity and how they compare to others. All data 
                               entered is private and will not be shared with other CTSAs.
                            </div>

                            {/* Get started section */}
                            <div className={`${c}-select-container`}>
                                <div className={`${c}-emphasis ${c}-select-align`}>
                                    Start by selecting the Maturity Models of interest to you below:
                                </div>

                                {/* Get started button */}
                                <button 
                                    className={`maturity-model-button primary-green shadow ${c}-select-align`} disabled={!selectedLen} 
                                    onClick={this.handleGetStartedClick.bind(null, selected)}>
                                    Get Started
                                    <FiChevronRight />
                                </button>

                                {/* Total models selected */}
                                <div>
                                    <span className={`${c}-selected-count`}>
                                        <strong>{selectedLen}</strong>
                                        <span> / </span>
                                        <strong>{models.length}</strong>
                                        <span> models selected</span>
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Selectable models */}
                        <div className={`${c}-option-container`}>
                            {models.map((m,i) => (
                                <ModelSelectionOption 
                                    key={m.completeField} model={m} onClick={this.handleModelClick} 
                                    index={i} answers={user.answers}
                                />)
                            )}
                        </div>

                        {/* Show get started button again if more than 4 models */}
                        {models.length > 4 && 
                        <button 
                            className={`maturity-model-button primary-green shadow ${c}-select-align`} disabled={!selectedLen} 
                            onClick={this.handleGetStartedClick.bind(null, selected)}>
                            Get Started
                            <FiChevronRight />
                        </button>}
                    </div>
                )}
            />
        );
    }

    private handleModelClick = (index: number) => {
        const { dispatch } = this.props;
        dispatch(modelSetSelected(index));
    }

    private handleGetStartedClick = (selected: BaseModel[]) => {
        const { dispatch, user } = this.props;
        if (!selected.length) {
            return;
        }

        const remaining = selected.filter(m => user.answers[m.completeField] !== FormState.Complete);
        const next = remaining.length ? remaining[0] : selected[0];
        dispatch(modelSetCurrent(next));
        dispatch(setCurrentView(AppView.ModelSurvey));
    }
}