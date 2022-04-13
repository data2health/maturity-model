import { showInfoModal } from './general';
import { modelsSetSelected } from './model';
import { AppState } from '../model/AppState';
import { InformationModalState } from '../model/GeneralState';
import { LoginServerCommunicationState, NewUserFormState } from '../model/LoginState';
import { FormState } from '../model/ModelsState';
import { login, signUp } from '../services/api';
import { userSetCredentials, userSetAnswers, userSetIsGuest } from './user';

export const IS_NEW_USER = 'IS_NEW_USER';
export const LOGIN_SET_EMAIL = 'LOGIN_SET_EMAIL';
export const LOGIN_SET_ENTRY_CODE = 'LOGIN_SET_ENTRY_CODE';
export const LOGIN_SET_SERVER_COMM_STATE = 'LOGIN_SET_SERVER_COMM_STATE';
export const LOGIN_SET_LOGGED_IN = 'LOGIN_SET_LOGGED_IN';

export interface LoginAction {
    email?: string;
    entryCode?: string;
    commState?: LoginServerCommunicationState;
    newUser?: boolean;
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
        };
    };
};

export const attemptSignUp = (newUserForm: NewUserFormState) => {
    return async (dispatch: any) => {
        try {
            /*
             * Try to upload new user form to REDCap.
             */
            dispatch(loginSetServerCommState(LoginServerCommunicationState.Calling));
            await signUp(newUserForm);

            /*
             * Set new user to false after successful sign up.
             */
            dispatch(isNewUser(false));
            dispatch(loginSetEmail(newUserForm.emailAddress));
            dispatch(loginSetEntryCode(newUserForm.entryCode));
            dispatch(loginSetServerCommState(LoginServerCommunicationState.Idle));
        } catch (err) {
            const info: InformationModalState = {
                header: 'An Error Occurred',
                body: 
                    'There was an error encountered while signing up. Please ensure that the form is properly filled out. ' +
                    'Additionally, please ensure that your email is not in use. If so, select forgot password on the login page.',
                show: true
            };
            dispatch(showInfoModal(info));
            dispatch(loginSetServerCommState(LoginServerCommunicationState.Failed));
            setTimeout(() => dispatch(loginSetServerCommState(LoginServerCommunicationState.Idle)), 500);
        };
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
export const isNewUser = (newUser: boolean): LoginAction => {
    return {
        newUser,
        type: IS_NEW_USER
    }
};

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