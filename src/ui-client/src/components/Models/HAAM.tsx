import React from 'react';
import { HAAM } from '../../model/Models/HAAM';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class HAAMForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={HAAM} />;
    }
}