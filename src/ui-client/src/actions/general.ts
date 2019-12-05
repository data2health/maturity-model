import { AppView, ConfirmationModalState, InformationModalState, NoClickModalState, SnackbarState } from "../model/GeneralState";

export const SET_CURRENT_VIEW = 'SET_CURRENT_VIEW'
export const INFO_MODAL_SHOW = 'INFO_MODAL_SHOW';
export const INFO_MODAL_HIDE = 'INFO_MODAL_HIDE';
export const CONFIRM_MODAL_SHOW = 'CONFIRM_MODAL_SHOW';
export const CONFIRM_MODAL_HIDE = 'CONFIRM_MODAL_HIDE';
export const NOCLICK_MODAL_SET_STATE = 'NOCLICK_MODAL_SET_STATE';
export const SNACKBAR_SET_STATE = 'SNACKBAR_SET_STATE';

export interface GeneralAction {
    confirmModal?: ConfirmationModalState;
    infoModal?: InformationModalState;
    noclickModal?: NoClickModalState;
    snackbar?: SnackbarState;
    view?: AppView;
    type: string;
}

export const setCurrentView = (view: AppView): GeneralAction => {
    return {
        view,
        type: SET_CURRENT_VIEW
    };
};

export const showInfoModal = (infoModal: InformationModalState): GeneralAction => {
    return {
        infoModal,
        type: INFO_MODAL_SHOW
    }
};

export const hideInfoModal = () => {
    return {
        type: INFO_MODAL_HIDE
    }
};

export const showConfirmationModal = (confirmModal: ConfirmationModalState): GeneralAction => {
    return {
        confirmModal,
        type: CONFIRM_MODAL_SHOW
    }
};

export const hideConfirmModal = () => {
    return {
        type: CONFIRM_MODAL_HIDE
    }
};

export const setNoClickModalState = (noclickModal: NoClickModalState): GeneralAction => {
    return {
        noclickModal,
        type: NOCLICK_MODAL_SET_STATE
    }
};

export const setSnackbarState = (snackbar: SnackbarState): GeneralAction => {
    return {
        snackbar,
        type: SNACKBAR_SET_STATE
    };
};