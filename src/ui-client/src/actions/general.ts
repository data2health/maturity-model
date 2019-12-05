import { AppView } from "../model/GeneralState";

export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'

export interface GeneralAction {
    view?: AppView;
    type: string;
}

export const setCurrentView = (view: AppView): GeneralAction => {
    return {
        view,
        type: SET_CURRENT_VIEW
    };
};