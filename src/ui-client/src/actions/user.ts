import { UserAnswers } from "../model/User";
import { AppState } from "../model/AppState";
import { update, getUserAndAggregateScores, changed } from "../services/api";
import { setSnackbarState, showInfoModal } from "./general";
import { NotificationStates, InformationModalState } from "../model/GeneralState";
import { AnswerScores, BaseAnswerScore } from "../model/Score";
import { AnswerScoreLoadState } from "../model/UserState";

export const USER_SET_IS_GUEST = 'USER_SET_IS_GUEST';
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
    score?: BaseAnswerScore;
    scores?: AnswerScores;
    type: string;
}

/*
 * Asynchronous
 */
export const userUpdateServerData = ()=> {
    return async (dispatch: any, getState: () => AppState) => {
        const state = getState();

        /*
         * Don't update server if a guest or there are no changes.
         */
        if (state.user.guest || !changed(state.user)) {
            dispatch(userSetAnswerScoreLoadState(AnswerScoreLoadState.NotLoaded));
            return;
        }

        try {
            /* 
             * Update server with new data.
             */
            dispatch(setSnackbarState({ message: 'Saving data...', state: NotificationStates.Working }));
            await update(state.user);

            /* 
             * Subtley notify user via snackbar and allow Results data to refresh.
             */
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
        const { user } = getState();
        try {
            /* 
             * Request scores from server.
             */
            dispatch(userSetAnswerScoreLoadState(AnswerScoreLoadState.Loading));
            const scores = await getUserAndAggregateScores(user);

            /* 
             * Update store.
             */
            dispatch(userSetScores(scores));
            dispatch(userSetAnswerScoreLoadState(AnswerScoreLoadState.Loaded));
        } catch (err) {
            console.log(err);
            dispatch(userSetAnswerScoreLoadState(AnswerScoreLoadState.Failed));
        }
    };
};


/*
 * Synchronous
 */
export const userSetAnswers = (answers: UserAnswers): UserAction => {
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

export const userSetScore = (score: BaseAnswerScore): UserAction => {
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

export const userSetIsGuest = (): UserAction => {
    return {
        type: USER_SET_IS_GUEST
    };
};