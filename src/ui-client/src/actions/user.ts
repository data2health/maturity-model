import { UserAnswers } from "../model/User";
import { AppState } from "../model/AppState";
import { update, getUserAndAggregateScores } from "../services/api";
import { setSnackbarState, showInfoModal } from "./general";
import { NotificationStates, InformationModalState } from "../model/GeneralState";
import { AnswerScores, AnswerScore } from "../model/Score";
import { AnswerScoreLoadState } from "../model/UserState";

export const USER_SET_ANSWERS = 'USER_SET_ANSWERS';
export const USER_SET_CREDENTIALS = 'USER_SET_CREDENTIALS';
export const USER_SET_ANSWER_SCORE = 'USER_SET_ANSWER_SCORE';
export const USER_SET_ANSWER_SCORES = 'USER_SET_ANSWER_SCORES';
export const USER_SET_ANSWER_SCORE_LOAD_STATE = 'USER_SET_ANSWER_SCORE_LOAD_STATE';

export interface UserAction {
    answers?: UserAnswers;
    answerLoadState?: AnswerScoreLoadState;
    email?: string;
    entryCode?: string;
    score?: AnswerScore;
    scores?: AnswerScores;
    type: string;
}

/*
 * Asynchronous
 */

export const userUpdateServerData = ()=> {
    return async (dispatch: any, getState: () => AppState) => {
        const state = getState();
        try {
            dispatch(setSnackbarState({ message: 'Saving data...', state: NotificationStates.Working }));
            const updated = await update(state.user);
            dispatch(setSnackbarState({ message: 'Data saved', state: NotificationStates.Complete }));
            dispatch(userSetAnswerScoreLoadState(AnswerScoreLoadState.NotLoaded));
        } catch (err) {
            console.log(err);
            const info: InformationModalState = {
                header: 'Data Sync Failed',
                body: 
                    'An expected error occurred while attempting to save your data, and your answers may not have saved correctly. ' +
                    'We apologize for the inconvenience.',
                show: true
            };
            dispatch(showInfoModal(info));
        }
    };
};

export const getScores = ()=> {
    return async (dispatch: any, getState: () => AppState) => {
        const { email, entryCode } = getState().user;
        try {
            dispatch(userSetAnswerScoreLoadState(AnswerScoreLoadState.Loading));
            const scores = await getUserAndAggregateScores(email, entryCode);
            dispatch(userSetScores(scores));
            dispatch(userSetAnswerScoreLoadState(AnswerScoreLoadState.Loaded));
            console.log(scores);
        } catch (err) {
            console.log(err);
            dispatch(userSetAnswerScoreLoadState(AnswerScoreLoadState.Failed));
        }
    };
};


/*
 * Synchronous
 */
export const userSetData = (answers: UserAnswers): UserAction => {
    return {
        answers,
        type: USER_SET_ANSWERS
    };
};

export const userSetCredentials = (email: string, entryCode: string): UserAction => {
    return {
        email,
        entryCode,
        type: USER_SET_CREDENTIALS
    };
};

export const userSetScore = (score: AnswerScore): UserAction => {
    return {
        score,
        type: USER_SET_ANSWER_SCORE
    };
};

export const userSetScores = (scores: AnswerScores): UserAction => {
    return {
        scores,
        type: USER_SET_ANSWER_SCORES
    };
};

export const userSetAnswerScoreLoadState = (answerLoadState: AnswerScoreLoadState): UserAction => {
    return {
        answerLoadState,
        type: USER_SET_ANSWER_SCORE_LOAD_STATE
    };
};
  