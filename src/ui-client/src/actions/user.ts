import { UserAnswers } from "../model/User";
import { AppState } from "../model/AppState";
import { update } from "../services/api";
import { setSnackbarState, showInfoModal } from "./general";
import { NotificationStates, InformationModalState } from "../model/GeneralState";

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
            dispatch(setSnackbarState({ message: 'Saving data...', state: NotificationStates.Working }));
            const updated = await update(state.user);
            dispatch(setSnackbarState({ message: 'Data saved', state: NotificationStates.Complete }));
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
  