import React from 'react';
import ModelOption from '../../BaseForms/ModelOption/ModelOption';
import { userSetData, userUpdateServerData } from '../../../actions/user';
import { UserAnswers } from '../../../model/User';
import ModelTransitionForm from '../../BaseForms/ModelTransitionForm/ModelTransitionForm';
import { BaseModel, FormComplete } from '../../../model/ModelsState';
import { FiChevronRight } from 'react-icons/fi';
import './ModelForm.css';
import NextStepBox from '../NextStepBox/NextStepBox';

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
            return (
                <ModelTransitionForm 
                    header={model.name}
                    content={
                        <div>
                            <div className={`${c}-desc`}>
                                <div className={`${c}-desc-inner`}>{model.description}</div>
                            </div>
                            <button className={`${c}-button`} onClick={this.handleGetStartedClick}>
                                Get Started
                                <FiChevronRight />
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

    private handleAnswerClick = (value: any) => {
        const { dispatch, answers, model } = this.props;
        const { questionIndex } = this.state;
        const completed = questionIndex === model.questions.length;

        /* 
         * Update store with the answer.
         */
        const question = model.questions[questionIndex-1];
        const cpy = Object.assign({}, answers, { 
            [question.answerField]: value,
            [model.completeField]: completed ? FormComplete.Complete : FormComplete.Started
        }) as UserAnswers;
        dispatch(userSetData(cpy));

        /*
         * If the form is complete, update data on the server.
         */
        if (completed) {
            dispatch(userUpdateServerData());
        }
        
        /*
         * Move to next question.
         */
        this.setState({ questionIndex: questionIndex + 1 })
    }
}