import React from 'react';
import { NESTcc } from '../../model/Models/NESTcc';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class NESTccForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={NESTcc} />;
    }
}