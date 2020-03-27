import { UserAnswers, AnswerField } from "./User"

export interface BaseModel {
    completeField: AnswerField;
    description: string;
    name: string;
    shortName: string;
    questions: ModelQuestion[];
    render: (dispatch: any, answers: UserAnswers) => JSX.Element;
    selected?: boolean;
    url?: string;
}

export interface ModelQuestion {
    answerField: AnswerField;
    options: ModelQuestionOption[];
    text: string | JSX.Element;
    zeroIndex?: boolean;
}

export interface ModelQuestionOption {
    text: string | JSX.Element | JSX.Element[];
    value: LikertStringOneToFive | LikertStringOneToSeven | HIMSS_EMRAMZeroToSeven | HAAMZeroToEight;
}

export interface ModelsState {
    all: BaseModel[];
    current?: BaseModel;
}

export type LikertStringOneToFive  = '' | '1' | '2' | '3' | '4' | '5'
export type LikertStringOneToSeven = LikertStringOneToFive | '6' | '7'
export type HIMSS_EMRAMZeroToSeven = '0' | LikertStringOneToSeven
export type HAAMZeroToEight        = '0' | LikertStringOneToSeven | '8'
export enum FormState { NotStarted = '0', Started = '1', Complete = '2' }
export type AnswerTypes = LikertStringOneToFive | LikertStringOneToSeven | FormState | HIMSS_EMRAMZeroToSeven | HAAMZeroToEight