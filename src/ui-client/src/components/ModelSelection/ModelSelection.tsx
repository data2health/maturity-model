import React from 'react';
import { UserState } from '../../model/UserState';
import BaseForm from '../BaseForms/BaseForm/BaseForm';
import { BaseModel, FormState } from '../../model/ModelsState';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
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
                header="Choose the models of interest to you"
                headerLarge={true}
                subheader={[
                    <span key={1}>Select all that apply</span>,

                    <span key={2} className={`${c}-selected-count`}>
                        <strong>{selectedLen}</strong>
                        <span> / </span>
                        <strong>{models.length}</strong>
                        <span> models selected</span>
                    </span>
                ]}
                content={(
                    <div className={c}>
                        <div className={`${c}-button-container`}>

                            {/* Go back button */}
                            <button className={`maturity-model-button secondary`} onClick={this.handleReturnHomeClick}>
                                <FiChevronLeft />
                                Go Back
                            </button>

                            {/* Get started button */}
                            <button 
                                className={`maturity-model-button primary-green shadow ${c}-select-align`} disabled={!selectedLen} 
                                onClick={this.handleGetStartedClick.bind(null, selected)}>
                                Start Model Surveys
                                <FiChevronRight />
                            </button>
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
                        <div className={`${c}-button-container`}>
                            <button 
                                className={`maturity-model-button primary-green shadow bottom ${c}-select-align`} disabled={!selectedLen} 
                                onClick={this.handleGetStartedClick.bind(null, selected)}>
                                Start Model Surveys
                                <FiChevronRight />
                            </button>
                        </div>}
                    </div>
                )}
            />
        );
    }

    private handleModelClick = (index: number) => {
        const { dispatch } = this.props;
        dispatch(modelSetSelected(index));
    }

    private handleReturnHomeClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.Greeting));
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