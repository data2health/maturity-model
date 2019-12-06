import { 
    UserAction, 
    USER_SET_CREDENTIALS, 
    USER_SET_ANSWERS,
    USER_SET_ANSWER_SCORE,
    USER_SET_ANSWER_SCORES,
    USER_SET_ANSWER_SCORE_LOAD_STATE
} from "../actions/user";
import { UserState, AnswerScoreLoadState } from "../model/UserState";
import { AnswerScore } from "../model/Score";

export const defaultUserState = (): UserState => {
    return {
        answers: {},
        answersLoadState: AnswerScoreLoadState.NotLoaded,
        email: '',
        entryCode: '',
        scores: {
            all: defaultScore(),
            user: defaultScore()
        }
    };
};

const defaultScore = (): AnswerScore => {
    return {
        riosm: 0,
        quintegra_ehmm: 0,
        idc_healthcare_it: 0,
        himss_emram: 0,
        himss_ccmm: 0,
        nehta_imm: 0,
        eprmm: 0,
        forrester: 0
    };
}

export const user = (state: UserState = defaultUserState(), action: UserAction): UserState => {
    switch (action.type) {
        case USER_SET_CREDENTIALS:
            return Object.assign({}, state, { email: action.email, entryCode: action.entryCode });
        case USER_SET_ANSWERS:
            return Object.assign({}, state, { answers: action.answers } );
        case USER_SET_ANSWER_SCORE:
            return Object.assign({}, state, { 
                scores: { 
                        user: action.score,
                        all: state.scores.all
                    } 
                } 
            );
        case USER_SET_ANSWER_SCORES:
            return Object.assign({}, state, { scores: action.scores } );
        case USER_SET_ANSWER_SCORE_LOAD_STATE:
            return Object.assign({}, state, { answersLoadState: action.answerLoadState } );
    }
    return state;
};