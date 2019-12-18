import { MODEL_SET_CURRENT, ModelAction, MODEL_SET_SELECTED } from '../actions/model';
import { SET_CURRENT_VIEW, GeneralAction } from '../actions/general';
import { ModelsState } from '../model/ModelsState';
import { RIOSM } from '../model/Models/RIOSM';
import { HIMSS_EMRAM } from '../model/Models/HIMSS_EMRAM';
import { Quintegra_eHMM } from '../model/Models/Quintegra_eHMM';
import { IDC_Healthcare_IT } from '../model/Models/IDC_Healthcare_IT';
import { NEHTA_IMM } from '../model/Models/NEHTA_IMM';
import { HIMSS_CCMM } from '../model/Models/HIMSS_CCMM';
import { AppView } from '../model/GeneralState';
import { PrecisionHealth } from '../model/Models/PrecisionHealth';
import { Forrester } from '../model/Models/Forrester';
import { EPRMM } from '../model/Models/EPRMM';


export const defaultModelState = (): ModelsState => {
    return {
        all: [ RIOSM, PrecisionHealth, Quintegra_eHMM ]
        
        // removed models
        // all: [ HIMSS_EMRAM, IDC_Healthcare_IT, NEHTA_IMM, HIMSS_CCMM, Forrester, EPRMM ]
    };
};

export const models = (state: ModelsState = defaultModelState(), action: ModelAction): ModelsState => {
    switch (action.type) {
        case MODEL_SET_CURRENT:
            return Object.assign({}, state, { current: action.model });
        case MODEL_SET_SELECTED:
            const mdls = state.all.slice();
            for (const index of action.indicies!) {
                mdls[index] = Object.assign({}, mdls[index], { selected: !mdls[index].selected });
            }
            return Object.assign({}, state, { all: mdls });
        case SET_CURRENT_VIEW:
            if ((action as GeneralAction).view! !== AppView.ModelSurvey) {
                return Object.assign({}, state, { current: undefined });
            }
    }
    return state;
};