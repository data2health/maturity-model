import React from 'react';
import { Quintegra_eHMM } from '../../model/Models/Quintegra_eHMM';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class Quintegra_eHMMForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={Quintegra_eHMM} />;
    }
}