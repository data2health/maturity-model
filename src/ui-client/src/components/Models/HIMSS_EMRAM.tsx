import React from 'react';
import { HIMSS_EMRAM } from '../../model/Models/HIMSS_EMRAM';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class HIMSS_EMRAMForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={HIMSS_EMRAM} />;
    }
}