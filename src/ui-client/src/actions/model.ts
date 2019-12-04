import { BaseModel } from "../model/ModelsState";

export const MODEL_SET_CURRENT = 'MODEL_SET_CURRENT';
export const MODEL_SET_SELECTED = 'MODEL_SET_SELECTED';

export interface ModelAction {
    index?: number;
    model?: BaseModel;
    type: string;
}

export const modelSetCurrent = (model: BaseModel | undefined = undefined): ModelAction => {
    return {
        model, 
        type: MODEL_SET_CURRENT
    };
};

export const modelSetSelected = (index: number): ModelAction => {
    return {
        index, 
        type: MODEL_SET_SELECTED
    };
};