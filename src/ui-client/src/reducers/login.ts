import { 
    LoginAction, 
    IS_NEW_USER,
    LOGIN_SET_EMAIL, 
    LOGIN_SET_ENTRY_CODE, 
    LOGIN_SET_SERVER_COMM_STATE,
    LOGIN_SET_LOGGED_IN
} from "../actions/login"
import { LoginState, LoginServerCommunicationState } from "../model/LoginState"

export const defaultLoginState = (): LoginState => {
    return {
        emailAddress: '',
        entryCode: '',
        loggedIn: false,
        newUser: false,
        serverCommunication: LoginServerCommunicationState.Idle
    }
}

export const login = (state: LoginState = defaultLoginState(), action: LoginAction): LoginState => {
    switch (action.type) {
        case IS_NEW_USER:
            return Object.assign({}, state, { newUser: action.newUser });
        case LOGIN_SET_LOGGED_IN:
            return Object.assign({}, state, { loggedIn: true });
        case LOGIN_SET_EMAIL: 
            return Object.assign({}, state, { emailAddress: action.email });
        case LOGIN_SET_ENTRY_CODE:
            return Object.assign({}, state, { entryCode: action.entryCode });
        case LOGIN_SET_SERVER_COMM_STATE:
            return Object.assign({}, state, { serverCommunication: action.commState });
    }
    return state;
}