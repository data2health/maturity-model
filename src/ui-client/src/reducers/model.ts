import { MODEL_SET_CURRENT, ModelAction, MODEL_SET_SELECTED } from '../actions/model';
import { ModelsState } from '../model/ModelsState';
import { RIOSM } from '../model/Models/RIOSM';
import { HIMSS_EMRAM } from '../model/Models/HIMSS_EMRAM';
import { Quintegra_eHMM } from '../model/Models/Quintegra_eHMM';
import { IDC_Healthcare_IT } from '../model/Models/IDC_Healthcare_IT';
import { NEHTA_IMM } from '../model/Models/NEHTA_IMM';
import { HIMSS_CCMM } from '../model/Models/HIMSS_CCMM';

export const defaultModelState = (): ModelsState => {
    return {
        all: [ RIOSM, HIMSS_EMRAM, Quintegra_eHMM, IDC_Healthcare_IT, NEHTA_IMM, HIMSS_CCMM ]
    };
};

export const models = (state: ModelsState = defaultModelState(), action: ModelAction): ModelsState => {
    switch (action.type) {
        case MODEL_SET_CURRENT:
            return Object.assign({}, state, { current: action.model });
        case MODEL_SET_SELECTED:
            const mdls = state.all.slice();
            mdls[action.index!] = Object.assign({}, mdls[action.index!], { selected: !mdls[action.index!].selected });
            return Object.assign({}, state, { all: mdls })
    }
    return state;
};