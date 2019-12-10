import React from 'react';
import ModelOption from '../../BaseForms/ModelOption/ModelOption';
import { userSetAnswers, userUpdateServerData } from '../../../actions/user';
import { UserAnswers } from '../../../model/User';
import ModelTransitionForm from '../../BaseForms/ModelTransitionForm/ModelTransitionForm';
import { BaseModel, FormState } from '../../../model/ModelsState';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import NextStepBox from '../NextStepBox/NextStepBox';
import { setCurrentView } from '../../../actions/general';
import { AppView } from '../../../model/GeneralState';
import './ModelForm.css';

interface Props {
    answers: UserAnswers;
    dispatch: any;
    model: BaseModel;
}

interface State {
    questionIndex: number;
}

export class ModelForm extends React.PureComponent<Props,State> {
    private className = 'model-form';
    private startingState = 0;

    public constructor(props: Props) {
        super(props);
        this.state = {
            questionIndex: this.startingState
        };
    }

    public render() {
        const c = this.className;
        const { answers, model } = this.props;
        const { questionIndex } = this.state;
        const cornerInfo = `${questionIndex} / ${model.questions.length}`;

        /*
         * If in starting state, show the model description and 'Get Started' button.
         */
        if (questionIndex === this.startingState) {
            const completionState = answers[model.completeField];
            const buttonText = 
                completionState === FormState.NotStarted ? 'Start Survey' :
                completionState === FormState.Started ? 'Continue Survey' :
                'Retake Survey';

            return (
                <ModelTransitionForm 
                    header={model.name}
                    content={
                        <div>
                            <div className={`${c}-desc`}>
                                <div className={`${c}-desc-inner`}>{model.description}</div>
                            </div>
                            <button className={`maturity-model-button primary-green shadow`} onClick={this.handleGetStartedClick}>
                                {buttonText}
                                <FiChevronRight />
                            </button>
                            <button className={`maturity-model-button secondary`} onClick={this.handleReturnHomeClick}>
                                <FiChevronLeft />
                                Go Back
                            </button>
                        </div>
                    }
                />
            );
        }

        /*
         * If in ending state, congratulate the user and allow them to move to next survey.
         */
        if (questionIndex > model.questions.length) {
            return (
                <ModelTransitionForm 
                    header={`You've completed the ${model.name} survey!`}
                    content={<NextStepBox />}
                    onGoBackClick={this.handleGoBackClick}
                />
            );
        }

        const q = model.questions[questionIndex-1];
        const currAnswer = answers[q.answerField];
        return (
            <ModelTransitionForm 
                header={q.text}
                content={q.options.map((o,i) => (
                    <ModelOption 
                        key={i} data={o} 
                        onClick={this.handleAnswerClick} 
                        selected={o.value === currAnswer} 
                    />)
                )}
                cornerInfo={cornerInfo}
                onGoBackClick={this.handleGoBackClick}
            />
        );
    }

    private handleGetStartedClick = () => {
        this.setState({ questionIndex: this.startingState + 1 })
    }

    private handleGoBackClick = () => {
        this.setState({ questionIndex: this.state.questionIndex - 1 })
    }

    private handleReturnHomeClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.Greeting))
    }

    private handleAnswerClick = (value: any) => {
        const { dispatch, answers, model } = this.props;
        const { questionIndex } = this.state;
        const total = model.questions.length;
        const isLast = questionIndex === total;
        const isFirst = questionIndex === 1;
        const alreadyCompleted = answers[model.completeField] === FormState.Complete;

        /* 
         * Update store with the answer.
         */
        const question = model.questions[questionIndex-1];
        const cpy = Object.assign({}, answers, { 
            [question.answerField]: value,
            [model.completeField]: alreadyCompleted || isLast ? FormState.Complete : FormState.Started
        }) as UserAnswers;
        dispatch(userSetAnswers(cpy));

        /*
         * If the form is complete or started and there is more than one question, 
         * update data on the server.
         */
        if (isLast || (isFirst && total > 1)) {
            dispatch(userUpdateServerData());
        }
        
        /*
         * Move to next question.
         */
        this.setState({ questionIndex: questionIndex + 1 })
    }
}