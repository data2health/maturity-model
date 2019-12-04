import { LoginServerCommunicationState } from '../model/LoginState';
import { AppState } from '../model/AppState';
import { login } from '../services/api';
import { userSetCredentials, userSetData } from './user';

export const LOGIN_SET_EMAIL = 'LOGIN_SET_EMAIL';
export const LOGIN_SET_ENTRY_CODE = 'LOGIN_SET_ENTRY_CODE';
export const LOGIN_SET_SERVER_COMM_STATE = 'LOGIN_SET_SERVER_COMM_STATE';
export const LOGIN_SET_LOGGED_IN = 'LOGIN_SET_LOGGED_IN';

export interface LoginAction {
    email?: string;
    entryCode?: string;
    commState?: LoginServerCommunicationState;
    type: string;
}

/*
 * Asynchronous
 */
export const attemptLogin = (email: string, entryCode: string) => {
    return async (dispatch: any, getState: () => AppState) => {

        const resetOnFail = () => setTimeout(() => dispatch(loginSetServerCommState(LoginServerCommunicationState.Idle)), 500);

        try {
            dispatch(loginSetServerCommState(LoginServerCommunicationState.Calling));
            const user = await login(email, entryCode);
            dispatch(loginSetLoggedIn());
            dispatch(userSetCredentials(email, entryCode));
            dispatch(userSetData(user));

        } catch (err) {
            dispatch(loginSetServerCommState(LoginServerCommunicationState.Failed));
            resetOnFail();
        }
    };
};

/*
 * Synchronous
 */
export const loginSetLoggedIn = (): LoginAction => {
    return {
        type: LOGIN_SET_LOGGED_IN
    };
};

export const loginSetEmail = (email: string): LoginAction => {
    return {
        email,
        type: LOGIN_SET_EMAIL
    };
};

export const loginSetEntryCode = (entryCode: string): LoginAction => {
    return {
        entryCode,
        type: LOGIN_SET_ENTRY_CODE
    };
};

export const loginSetServerCommState = (commState: LoginServerCommunicationState): LoginAction => {
    return {
        commState,
        type: LOGIN_SET_SERVER_COMM_STATE
    };
};