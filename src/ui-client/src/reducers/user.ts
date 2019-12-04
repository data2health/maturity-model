import { UserAction, USER_SET_CREDENTIALS, USER_SET_ANSWERS } from "../actions/user";
import { UserState } from "../model/UserState";

export const defaultUserState = (): UserState => {
    return {
        email: '',
        entryCode: '',
        answers: {}
    };
};

export const user = (state: UserState = defaultUserState(), action: UserAction): UserState => {
    switch (action.type) {
        case USER_SET_CREDENTIALS:
            return Object.assign({}, state, { email: action.email, entryCode: action.entryCode });
        case USER_SET_ANSWERS:
            return Object.assign({}, state, { answers: action.answers } );
    }
    return state;
};