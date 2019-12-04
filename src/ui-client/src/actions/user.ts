import { UserAnswers } from "../model/User";
import { AppState } from "../model/AppState";
import { update } from "../services/api";

export const USER_SET_ANSWERS = 'USER_SET_ANSWERS';
export const USER_SET_CREDENTIALS = 'USER_SET_CREDENTIALS';

export interface UserAction {
    email?: string;
    entryCode?: string;
    answers?: UserAnswers;
    type: string;
}

/*
 * Asynchronous
 */
export const userUpdateServerData = ()=> {
    return async (dispatch: any, getState: () => AppState) => {
        const state = getState();
        try {
            const updated = await update(state.user);
        } catch (err) {
            console.log(err);
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
  