import { GeneralAction, SET_CURRENT_VIEW } from '../actions/general';
import { GeneralState, AppView } from '../model/GeneralState';

const defaultGeneralState = (): GeneralState => {
    return {
        currentView: AppView.ModelSelection
    };
};

export const general = (state: GeneralState = defaultGeneralState(), action: GeneralAction): GeneralState => {
    switch (action.type) {
        case SET_CURRENT_VIEW:
            return Object.assign({}, state, { currentView: action.view });
    }
    return state;
};