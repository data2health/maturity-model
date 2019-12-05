export enum AppView {
    ModelSelection = 1,
    ModelSurvey = 2,
    Results = 3
}

export enum NotificationStates {
    Working = 1,
    Complete = 2,
    Hidden = 3
}

export interface InformationModalState {
    body: any;
    header: string;
    onClickOkay?: any;
    show: boolean;
}

export interface ConfirmationModalState {
    body: any;
    header: string;
    onClickNo: any;
    onClickYes: any;
    noButtonText: string;
    yesButtonText: string;
    show: boolean;
}

export interface NoClickModalState {
    message?: string;
    state: NotificationStates;
}

export interface SnackbarState {
    message?: string;
    state: NotificationStates;
}

export interface GeneralState {
    confirmationModal: ConfirmationModalState;
    currentView: AppView;
    informationModal: InformationModalState;
    noclickModal: NoClickModalState;
    snackbar: SnackbarState;
}