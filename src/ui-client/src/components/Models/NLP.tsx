import React from 'react';
import { NLP } from '../../model/Models/NLP';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class NLPForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={NLP} />;
    }
}