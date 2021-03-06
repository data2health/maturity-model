import React from 'react';
import { PrecisionHealth } from '../../model/Models/PrecisionHealth';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class PrecisionHealthForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={PrecisionHealth}/>;
    }
}