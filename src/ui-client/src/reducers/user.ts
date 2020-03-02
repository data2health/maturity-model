import { 
    UserAction, 
    USER_SET_CREDENTIALS, 
    USER_SET_ANSWERS,
    USER_SET_ANSWER_SCORE,
    USER_SET_ANSWER_SCORES,
    USER_SET_ANSWER_SCORE_LOAD_STATE,
    USER_SET_IS_GUEST
} from "../actions/user";
import { UserState, AnswerScoreLoadState } from "../model/UserState";
import { BaseAnswerScore, AllAnswerScore } from "../model/Score";
import { FormState } from "../model/ModelsState";

export const defaultUserState = (): UserState => {
    return {
        answers: {

            // User name
            'user_fname': '',                     
            'user_lname': '',
            'email': '',
            'user_complete': FormState.NotStarted,

            // RIOSM
            'riosm_complete': FormState.NotStarted,
            'riosm_q1_engagement': '',  
            'riosm_q2_governance': '',        
            'riosm_q3_reputation': '',        
            'riosm_q4_support_open_science': '',
            'riosm_q5_data_sharing': '',
            'riosm_q6_data_sharing_edu': '',      
            'riosm_q7_data_analytics_activity': '',
            'riosm_q8_ctms': '',
            'riosm_q9_external_data_edw': '',
            'riosm_q10_research_computing': '',
            'riosm_q11_secondary_data_use': '',

            // Quintegra eHMM
            'quintegra_ehmm_complete': FormState.NotStarted,
            'quintegra_ehmm_q1': '',    

            // IDC Healthcare IT
            'idc_healthcare_it_complete': FormState.NotStarted,
            'idc_healthcare_it_q1': '',

            // HIMSS EMRAM
            'himss_emram_complete': FormState.NotStarted,
            'himss_emram_q1': '',

            // NEHTA IMM
            'nehta_imm_complete': FormState.NotStarted,
            'nehta_imm_q1': '',

            // HIMSS CCMM
            'himss_ccmm_complete': FormState.NotStarted,
            'himss_ccmm_q1': '',        
            'himss_ccmm_q2': '',              
            'himss_ccmm_q3': '',          
            'himss_ccmm_q4': '',

            // EPRMM
            'eprmm_complete': FormState.NotStarted,
            'eprmm_q1': '',

            // Forrester
            'forrester_model_complete': FormState.NotStarted,
            'forrester_model_q1': '',
            'forrester_model_q2': '',
            'forrester_model_q3': '',
            'forrester_model_q4': '',

            // Precision Health
            'precision_health_complete': FormState.NotStarted,
            'precision_health_q1': '',
            'precision_health_q2': '',
            'precision_health_q3': '',
            'precision_health_q4': '',
            'precision_health_q5': '',
            'precision_health_q6': '',
            'precision_health_q7': '',
            'precision_health_q8': '',
            'precision_health_q9': '',
            'precision_health_q10': ''
        },
        answersLoadState: AnswerScoreLoadState.NotLoaded,
        email: '',
        entryCode: '',
        guest: false,
        results: {
            all: allDefaultScore(),
            user: userDefaultScore(),
            n: 0
        }
    };
};

const userDefaultScore = (): BaseAnswerScore => {
    return {
        riosm: 0,
        quintegra_ehmm: 0,
        idc_healthcare_it: 0,
        himss_emram: 0,
        himss_ccmm: 0,
        nehta_imm: 0,
        eprmm: 0,
        forrester: 0,
        precision_health: 0,
        riosm_categories: {
            overall: 0,
            governance: 0,
            data_and_software_sharing: 0,
            research_informatics: 0
        }
    };
}

const allDefaultScore = (): AllAnswerScore => {
    return {
        riosm: 0,
        quintegra_ehmm: 0,
        idc_healthcare_it: 0,
        himss_emram: 0,
        himss_ccmm: 0,
        nehta_imm: 0,
        eprmm: 0,
        forrester: 0,
        precision_health: 0,
        riosm_categories: {
            overall: 0,
            governance: 0,
            data_and_software_sharing: 0,
            research_informatics: 0
        },
        riosm_questions: {
            q1Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q2Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q3Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q4Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q5Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q6Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q7Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q8Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q9Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q10Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q11Stats: { mean: 0, min: 0, max: 0, median: 0 }
        },
        quintegra_ehmm_questions: {
            q1Stats: { mean: 0, min: 0, max: 0, median: 0 }
        },
        precision_health_questions: {
            q1Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q2Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q3Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q4Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q5Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q6Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q7Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q8Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q9Stats: { mean: 0, min: 0, max: 0, median: 0 },
            q10Stats: { mean: 0, min: 0, max: 0, median: 0 }
        }
    };
}

export const user = (state: UserState = defaultUserState(), action: UserAction): UserState => {
    switch (action.type) {
        case USER_SET_CREDENTIALS:
            return Object.assign({}, state, { email: action.email, entryCode: action.entryCode });
        case USER_SET_ANSWERS:
            return Object.assign({}, state, { 
                answers: {
                    ...state.answers,
                    ...action.answers 
                }
            });
        case USER_SET_ANSWER_SCORE:
            return Object.assign({}, state, { 
                results: { 
                        user: action.score,
                        all: state.results.all
                    } 
                } 
            );
        case USER_SET_ANSWER_SCORES:
            return Object.assign({}, state, { results: action.scores } );
        case USER_SET_ANSWER_SCORE_LOAD_STATE:
            return Object.assign({}, state, { answersLoadState: action.answerLoadState } );
        case USER_SET_IS_GUEST:
            return Object.assign({}, state, { guest: true });
    }
    return state;
};