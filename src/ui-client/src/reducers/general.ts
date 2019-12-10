import { 
    GeneralAction, 
    SET_CURRENT_VIEW, 
    INFO_MODAL_SHOW, 
    INFO_MODAL_HIDE, 
    CONFIRM_MODAL_SHOW, 
    CONFIRM_MODAL_HIDE, 
    NOCLICK_MODAL_SET_STATE, 
    SNACKBAR_SET_STATE 
} from '../actions/general';
import { GeneralState, AppView, NotificationStates } from '../model/GeneralState';

export const defaultGeneralState = (): GeneralState => {
    return {
        confirmationModal: {
            body: "",
            header: "",
            onClickNo: () => {},
            onClickYes: () => {},
            noButtonText: "",
            show: false,
            yesButtonText: "",
        },
        informationModal: {
            body: "",
            header: "",
            show: false
        },
        currentView: AppView.Greeting,
        noclickModal: {
            message: "",
            state: NotificationStates.Hidden
        },
        snackbar: {
            state: NotificationStates.Hidden,
            message: ""
        },
    };
};

export const general = (state: GeneralState = defaultGeneralState(), action: GeneralAction): GeneralState => {
    switch (action.type) {
        case SET_CURRENT_VIEW:
            return Object.assign({}, state, { currentView: action.view });
        case INFO_MODAL_SHOW:
            return Object.assign({}, state, { informationModal: action.infoModal! });
        case INFO_MODAL_HIDE:
            return Object.assign({}, state, { informationModal: { ...state.informationModal, show: false, onClickOkay: null } });
        case CONFIRM_MODAL_SHOW:
            return Object.assign({}, state, { confirmationModal: action.confirmModal! });
        case CONFIRM_MODAL_HIDE:
            return Object.assign({}, state, { confirmationModal: { ...state.confirmationModal, show: false } });
        case NOCLICK_MODAL_SET_STATE:
            return Object.assign({}, state, { noclickModal: action.noclickModal! });
        case SNACKBAR_SET_STATE:
            return Object.assign({}, state, { snackbar: { ...state.snackbar, ...action.snackbar! } });
    }
    return state;
};