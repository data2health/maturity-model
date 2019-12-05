export enum AppView {
    ModelSelection = 1,
    ModelSurvey = 2,
    Results = 3
}

export interface GeneralState {
    currentView: AppView;
}