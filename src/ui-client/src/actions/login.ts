import { LoginServerCommunicationState } from '../model/LoginState';
import { AppState } from '../model/AppState';
import { login } from '../services/api';
import { userSetCredentials, userSetAnswers, userSetIsGuest } from './user';
import { FormState } from '../model/ModelsState';
import { modelsSetSelected } from './model';

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
        try {

            /*
             * Try to get user data from credentials.
             */
            dispatch(loginSetServerCommState(LoginServerCommunicationState.Calling));
            const answers = await login(email, entryCode);

            /*
             * Set data and log in.
             */
            dispatch(loginSetLoggedIn());
            dispatch(userSetCredentials(email, entryCode));
            dispatch(userSetAnswers(answers));

            /*
             * Set default selected models based on past user data.
             */
            const models = getState().models.all;
            const defaultSelected = models
                .map((m,i) => ({ model: m, index: i }))
                .filter(m => answers[m.model.completeField] !== FormState.NotStarted)
                .map(m => m.index);
            dispatch(modelsSetSelected(defaultSelected));

        } catch (err) {
            dispatch(loginSetServerCommState(LoginServerCommunicationState.Failed));
            setTimeout(() => dispatch(loginSetServerCommState(LoginServerCommunicationState.Idle)), 500);
        }
    };
};

export const loginAsGuest = () => {
    return async (dispatch: any, getState: () => AppState) => {
        const email = 'guest@cd2h.org';
        const entryCode = 'guest';
        const answers = Object.assign({}, getState().user.answers) as any;
        answers['user_fname'] = 'Guest';
        answers['email'] = 'Guest';

        dispatch(userSetIsGuest());
        dispatch(loginSetLoggedIn());
        dispatch(loginSetEmail(email));
        dispatch(userSetCredentials(email, entryCode));
        dispatch(userSetAnswers(answers));
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