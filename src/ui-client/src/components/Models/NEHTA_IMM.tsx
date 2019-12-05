import React from 'react';
import { NEHTA_IMM } from '../../model/Models/NEHTA_IMM';
import { UserAnswers } from '../../model/User';
import { ModelForm } from '../BaseForms/ModelForm/ModelForm';

interface Props {
    dispatch: any;
    answers: UserAnswers;
}

export class NEHTA_IMMForm extends React.PureComponent<Props> {

    public render() {
        const { dispatch, answers } = this.props;
        
        return <ModelForm dispatch={dispatch} answers={answers} model={NEHTA_IMM} />;
    }
}