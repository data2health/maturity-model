import Axios from 'axios';
import { UserAnswersDTO, UserUpdateDTO, UserAnswers, RIOSM_Q1_ENGAGEMENT, RIOSM_Q2_GOVERNANCE, RIOSM_Q4_SUPPORT_OPEN_SCIENCE, RIOSM_Q3_REPUTATION, RIOSM_Q5_DATA_SHARING, RIOSM_Q6_DATA_SHARING_EDU, RIOSM_Q7_DATA_ANALYTICS_ACTIVITY, RIOSM_Q8_CTMS, RIOSM_Q9_EXTERNAL_DATA_EDW, RIOSM_Q10_RESEARCH_COMPUTING, RIOSM_Q11_SECONDARY_DATA_USE, PRECISION_HEALTH_Q1, PRECISION_HEALTH_Q2, PRECISION_HEALTH_Q3, PRECISION_HEALTH_Q4, PRECISION_HEALTH_Q5, PRECISION_HEALTH_Q6, PRECISION_HEALTH_Q7, PRECISION_HEALTH_Q8, PRECISION_HEALTH_Q9, PRECISION_HEALTH_Q10 } from '../model/User';
import { UserState } from '../model/UserState';
import { AnswerScore, AnswerScores } from "../model/Score";
import { 
    riosmFields, 
    QUINTEGRA_EHMM_Q1, 
    IDC_HEALTHCARE_IT_Q1, 
    HIMSS_EMRAM_Q1, 
    himssCCmmFields, 
    EPRMM_Q1, 
    NEHTA_IMM_Q1,
    precisionHealthFields,
    riosmGovernance, 
    riosmDataAndSoftware, 
    riosmResearchInformatics,
} from "../model/User";

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
 * Request current scores for the user.
 */
export const getUserAndAggregateScores = async (user: UserState): Promise<AnswerScores> => {
    const resp = await Axios.get('/api/scores', {
        params: {
            email: user.email,
            entry_code: user.entryCode
        }
    });

    return {
        user: calculateUserScores(user.answers),
        ...resp.data
    };
};

/*
 * Given the current UI state, check whether there are 
 * any changes compared to what is believed to be on the server.
 */
export const changed = (user: UserState): boolean => {
    for (const key of Object.keys(user.answers)) {
        if (serverState[key] !== user.answers[key]) {
            return true;
        }
    }
    return false;
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
    for (const key of Object.keys(user.answers)) {
        if (serverState[key] !== user.answers[key]) {
            diff[key] = user.answers[key];
        }
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

export const calculateUserScores = (user: UserAnswers): AnswerScore => {
    const maxFive  = 5.0;
    const maxSix   = 6.0;
    const maxSeven = 7.0;
    const valElseZero = (val:string) => val !== '' ? parseFloat(val) : 0;
    const riosmSum = sum(validate((riosmFields.map(f => user[f]))));
    
    return {
        riosm            : riosmSum / (riosmFields.length * maxFive),
        quintegra_ehmm   : valElseZero(user[QUINTEGRA_EHMM_Q1]) / maxSeven,
        idc_healthcare_it: valElseZero(user[IDC_HEALTHCARE_IT_Q1]) / maxFive,
        himss_emram      : valElseZero(user[HIMSS_EMRAM_Q1]) / maxSeven,
        himss_ccmm       : sum(validate(himssCCmmFields.map(f => user[f]))) / (himssCCmmFields.length * maxFive),
        nehta_imm        : valElseZero(user[NEHTA_IMM_Q1]) / maxFive,
        eprmm            : valElseZero(user[EPRMM_Q1]) / maxSix,
        forrester        : 0.0,
        precision_health : sum(validate(precisionHealthFields.map(f => user[f]))) / (precisionHealthFields.length * maxFive),
        riosm_categories : {
            overall             : riosmSum / riosmFields.length,
            governance          : sum(validate(riosmGovernance.map(f => user[f]))) / riosmGovernance.length,
            data_and_software_sharing   : sum(validate(riosmDataAndSoftware.map(f => user[f]))) / riosmDataAndSoftware.length,
            research_informatics: sum(validate(riosmResearchInformatics.map(f => user[f]))) / riosmResearchInformatics.length
        },
        riosm_questions : {
            q1Stats: {
                mean: parseFloat(user[RIOSM_Q1_ENGAGEMENT]),
                min: parseFloat(user[RIOSM_Q1_ENGAGEMENT]),
                max: parseFloat(user[RIOSM_Q1_ENGAGEMENT]),
                median: parseFloat(user[RIOSM_Q1_ENGAGEMENT])
            },
            q2Stats: {
                mean: parseFloat(user[RIOSM_Q2_GOVERNANCE]),
                min: parseFloat(user[RIOSM_Q2_GOVERNANCE]),
                max: parseFloat(user[RIOSM_Q2_GOVERNANCE]),
                median: parseFloat(user[RIOSM_Q2_GOVERNANCE])
            },
            q3Stats: {
                mean: parseFloat(user[RIOSM_Q3_REPUTATION]),
                min: parseFloat(user[RIOSM_Q3_REPUTATION]),
                max: parseFloat(user[RIOSM_Q3_REPUTATION]),
                median: parseFloat(user[RIOSM_Q3_REPUTATION])
            },
            q4Stats: {
                mean: parseFloat(user[RIOSM_Q4_SUPPORT_OPEN_SCIENCE]),
                min: parseFloat(user[RIOSM_Q4_SUPPORT_OPEN_SCIENCE]),
                max: parseFloat(user[RIOSM_Q4_SUPPORT_OPEN_SCIENCE]),
                median: parseFloat(user[RIOSM_Q4_SUPPORT_OPEN_SCIENCE])
            },
            q5Stats: {
                mean: parseFloat(user[RIOSM_Q5_DATA_SHARING]),
                min: parseFloat(user[RIOSM_Q5_DATA_SHARING]),
                max: parseFloat(user[RIOSM_Q5_DATA_SHARING]),
                median: parseFloat(user[RIOSM_Q5_DATA_SHARING])
            },
            q6Stats: {
                mean: parseFloat(user[RIOSM_Q6_DATA_SHARING_EDU]),
                min: parseFloat(user[RIOSM_Q6_DATA_SHARING_EDU]),
                max: parseFloat(user[RIOSM_Q6_DATA_SHARING_EDU]),
                median: parseFloat(user[RIOSM_Q6_DATA_SHARING_EDU])
            },
            q7Stats: {
                mean: parseFloat(user[RIOSM_Q7_DATA_ANALYTICS_ACTIVITY]),
                min: parseFloat(user[RIOSM_Q7_DATA_ANALYTICS_ACTIVITY]),
                max: parseFloat(user[RIOSM_Q7_DATA_ANALYTICS_ACTIVITY]),
                median: parseFloat(user[RIOSM_Q7_DATA_ANALYTICS_ACTIVITY])
            },
            q8Stats: {
                mean: parseFloat(user[RIOSM_Q8_CTMS]),
                min: parseFloat(user[RIOSM_Q8_CTMS]),
                max: parseFloat(user[RIOSM_Q8_CTMS]),
                median: parseFloat(user[RIOSM_Q8_CTMS])
            },
            q9Stats: {
                mean: parseFloat(user[RIOSM_Q9_EXTERNAL_DATA_EDW]),
                min: parseFloat(user[RIOSM_Q9_EXTERNAL_DATA_EDW]),
                max: parseFloat(user[RIOSM_Q9_EXTERNAL_DATA_EDW]),
                median: parseFloat(user[RIOSM_Q9_EXTERNAL_DATA_EDW])
            },
            q10Stats: {
                mean: parseFloat(user[RIOSM_Q10_RESEARCH_COMPUTING]),
                min: parseFloat(user[RIOSM_Q10_RESEARCH_COMPUTING]),
                max: parseFloat(user[RIOSM_Q10_RESEARCH_COMPUTING]),
                median: parseFloat(user[RIOSM_Q10_RESEARCH_COMPUTING])
            },
            q11Stats: {
                mean: parseFloat(user[RIOSM_Q11_SECONDARY_DATA_USE]),
                min: parseFloat(user[RIOSM_Q11_SECONDARY_DATA_USE]),
                max: parseFloat(user[RIOSM_Q11_SECONDARY_DATA_USE]),
                median: parseFloat(user[RIOSM_Q11_SECONDARY_DATA_USE])
            }
        },
        quintegra_ehmm_questions : {
            q1Stats: {
                // mean: sum(validate(quintegra_eHMMQ1.map(f => user[f]))) / (quintegra_eHMMQ1.length * maxSeven),
                // min: Math.min.apply(validate(quintegra_eHMMQ1.map(f => user[f]))),
                // max: Math.max.apply(validate(quintegra_eHMMQ1.map(f => user[f]))),
                // median: median(validate(quintegra_eHMMQ1.map(f => user[f])))
                mean: parseFloat(user[QUINTEGRA_EHMM_Q1]),
                min: parseFloat(user[QUINTEGRA_EHMM_Q1]),
                max: parseFloat(user[QUINTEGRA_EHMM_Q1]),
                median: parseFloat(user[QUINTEGRA_EHMM_Q1])
            }
        },
        precision_health_questions : {
            q1Stats: {
                // mean: sum(validate(precisionHealthQ1.map(f => user[f]))),
                // min: Math.min.apply(validate(precisionHealthQ1.map(f => user[f]))),
                // max: Math.max.apply(validate(precisionHealthQ1.map(f => user[f]))),
                // median: median(validate(precisionHealthQ1.map(f => user[f])))
                mean: parseFloat(user[PRECISION_HEALTH_Q1]),
                min: parseFloat(user[PRECISION_HEALTH_Q1]),
                max: parseFloat(user[PRECISION_HEALTH_Q1]),
                median: parseFloat(user[PRECISION_HEALTH_Q1])
            },
            q2Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q2]),
                min: parseFloat(user[PRECISION_HEALTH_Q2]),
                max: parseFloat(user[PRECISION_HEALTH_Q2]),
                median: parseFloat(user[PRECISION_HEALTH_Q2])
            },
            q3Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q3]),
                min: parseFloat(user[PRECISION_HEALTH_Q3]),
                max: parseFloat(user[PRECISION_HEALTH_Q3]),
                median: parseFloat(user[PRECISION_HEALTH_Q3])
            },
            q4Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q4]),
                min: parseFloat(user[PRECISION_HEALTH_Q4]),
                max: parseFloat(user[PRECISION_HEALTH_Q4]),
                median: parseFloat(user[PRECISION_HEALTH_Q4])
            },
            q5Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q5]),
                min: parseFloat(user[PRECISION_HEALTH_Q5]),
                max: parseFloat(user[PRECISION_HEALTH_Q5]),
                median: parseFloat(user[PRECISION_HEALTH_Q5])
            },
            q6Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q6]),
                min: parseFloat(user[PRECISION_HEALTH_Q6]),
                max: parseFloat(user[PRECISION_HEALTH_Q6]),
                median: parseFloat(user[PRECISION_HEALTH_Q6])
            },
            q7Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q7]),
                min: parseFloat(user[PRECISION_HEALTH_Q7]),
                max: parseFloat(user[PRECISION_HEALTH_Q7]),
                median: parseFloat(user[PRECISION_HEALTH_Q7])
            },
            q8Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q8]),
                min: parseFloat(user[PRECISION_HEALTH_Q8]),
                max: parseFloat(user[PRECISION_HEALTH_Q8]),
                median: parseFloat(user[PRECISION_HEALTH_Q8])
            },
            q9Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q9]),
                min: parseFloat(user[PRECISION_HEALTH_Q9]),
                max: parseFloat(user[PRECISION_HEALTH_Q9]),
                median: parseFloat(user[PRECISION_HEALTH_Q9])
            },
            q10Stats: {
                mean: parseFloat(user[PRECISION_HEALTH_Q10]),
                min: parseFloat(user[PRECISION_HEALTH_Q10]),
                max: parseFloat(user[PRECISION_HEALTH_Q10]),
                median: parseFloat(user[PRECISION_HEALTH_Q10])
            }
        }

    };
};

const sum = (vals: number[]): number => vals.reduce((a,b) => a + b, 0);
const validate = (vals: string[]): number[] => vals.filter(v => v !== '').map(v => parseFloat(v));
const median = function(vals: number[]): number {
    const sorted = vals.sort((a,b) => a-b);
    const mid = sorted.length / 2;
    return mid % 1 ? sorted[mid - 0.5] : (sorted[mid - 1] + sorted[mid]) / 2;
}