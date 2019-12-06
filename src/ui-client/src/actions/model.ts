import { BaseModel } from "../model/ModelsState";

export const MODEL_SET_CURRENT = 'MODEL_SET_CURRENT';
export const MODEL_SET_SELECTED = 'MODEL_SET_SELECTED';

export interface ModelAction {
    indicies?: number[];
    model?: BaseModel;
    type: string;
}

export const modelSetCurrent = (model: BaseModel): ModelAction => {
    return {
        model, 
        type: MODEL_SET_CURRENT
    };
};

export const modelSetSelected = (index: number): ModelAction => {
    return {
        indicies: [ index ], 
        type: MODEL_SET_SELECTED
    };
};

export const modelsSetSelected = (indicies: number[]): ModelAction => {
    return {
        indicies, 
        type: MODEL_SET_SELECTED
    };
};