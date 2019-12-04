import { MODEL_SET_CURRENT, ModelAction, MODEL_SET_SELECTED } from '../actions/model';
import { ModelsState } from '../model/ModelsState';
import { RIOSM } from '../model/Models/RIOSM';
import { HIMSS_EMRAM } from '../model/Models/HIMSS_EMRAM';

export const defaultModelState = (): ModelsState => {
    return {
        all: [ RIOSM, HIMSS_EMRAM ]
    };
};

export const models = (state: ModelsState = defaultModelState(), action: ModelAction): ModelsState => {
    switch (action.type) {
        case MODEL_SET_CURRENT:
            return Object.assign({}, state, { current: action.model });
        case MODEL_SET_SELECTED:
            const mdls = state.all.slice();
            mdls[action.index!].selected = !mdls[action.index!].selected;
            return Object.assign({}, state, { all: mdls })
    }
    return state;
};