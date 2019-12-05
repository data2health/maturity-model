import Axios from 'axios';
import { UserAnswersDTO, UserAnswers, UserUpdateDTO } from '../model/User';
import { UserState } from '../model/UserState';

let serverState: UserAnswers = {};

/*
 * Request a login with email and entryCode. If successful,
 * returns data for user from REDCap.
 */
export const login = async (email: string, entryCode: string): Promise<UserAnswers> => {
    const resp = await Axios.get('/api/user', {
        params: {
            email,
            entry_code: entryCode
        }
    });
    const dto = resp.data.user as UserAnswersDTO;
    const user = dtoToUser(dto);
    serverState = user;
    return user;
};

/*
 * Given the current user answers, update the server with
 * the latest values after diffing.
 */
export const update = async (user: UserState): Promise<UserUpdateDTO> => {

    /*
     * Include only values that have been updated since
     * the last sync with the server.
     */
    const diff: UserAnswers = {};
    let changed = false;
    for (const key of Object.keys(user.answers)) {
        if (serverState[key] !== user.answers[key]) {
            diff[key] = user.answers[key];
            changed = true;
        }
    }

    /*
     * Bail if no answers have actually been changed.
     */
    if (!changed) {
        return { count: 0 };
    }

    /*
     * Update the server.
     */
    const resp = await Axios.post('/api/user/answers', {
        email: user.email,
        entry_code: user.entryCode,
        answers: diff
    });

    /*
     * If the call succeeded, update the serverState properties.
     */
    for (const key of Object.keys(diff)) {
        serverState[key] = diff[key];
    }

    return resp.data as UserUpdateDTO;
};

/*
 * Given a REDCap-based dictionary user object, return it back
 * as a [UserAnswers] object. The DTO and Model are currently identical, but 
 * in the future if they aren't use thus function to transform them.
 */
const dtoToUser = (dto: UserAnswersDTO): UserAnswers => {
    return dto;
};