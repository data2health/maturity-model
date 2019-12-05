import React from 'react';
import { IDC_Healthcare_IT } from '../../model/Models/IDC_Healthcare_IT';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class IDC_Healthcare_ITForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={IDC_Healthcare_IT} />;
    }
}