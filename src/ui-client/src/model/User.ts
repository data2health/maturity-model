import { AnswerTypes } from "./ModelsState";

export type AnswerField =

    // User name
    'user_fname'                       |
    'user_lname'                       |
    'email'                            |
    'user_complete'                    |

    // RIOSM
    'riosm_complete'                   | 
    'riosm_q1_engagement'              |
    'riosm_q2_governance'              |
    'riosm_q3_reputation'              |
    'riosm_q4_support_open_science'    | 
    'riosm_q5_data_sharing'            | 
    'riosm_q6_data_sharing_edu'        |
    'riosm_q7_data_analytics_activity' |
    'riosm_q8_ctms'                    |
    'riosm_q9_external_data_edw'       |
    'riosm_q10_research_computing'     |
    'riosm_q11_secondary_data_use'     |

    // Quintegra eHMM
    'quintegra_ehmm_complete'          |
    'quintegra_ehmm_q1'                |

    // IDC Healthcare IT
    'idc_healthcare_it_complete'       |
    'idc_healthcare_it_q1'             |

    // HIMSS EMRAM
    'himss_emram_complete'             |
    'himss_emram_q1'                   |

    // NEHTA IMM
    'nehta_imm_complete'               |
    'nehta_imm_q1'                     |

    // HIMSS CCMM
    'himss_ccmm_complete'              |
    'himss_ccmm_q1'                    |
    'himss_ccmm_q2'                    |
    'himss_ccmm_q3'                    |
    'himss_ccmm_q4'                    |

    // EPRMM
    'eprmm_complete'                   |
    'eprmm_q1'                         |

    // Forrester
    'forrester_model_complete'         |
    'forrester_model_q1'               |
    'forrester_model_q2'               |
    'forrester_model_q3'               |
    'forrester_model_q4'               |

    // Precision Health                
    'precision_health_complete'        |
    'precision_health_q1'              |
    'precision_health_q2'              |
    'precision_health_q3'              |
    'precision_health_q4'              |
    'precision_health_q5'              |
    'precision_health_q6'              |
    'precision_health_q7'              |
    'precision_health_q8'              |
    'precision_health_q9'              |
    'precision_health_q10'             


export interface BaseUserAnswers {
    [key: string]: AnswerTypes
}

export interface UserAnswersDTO extends BaseUserAnswers {}
export interface UserAnswers extends BaseUserAnswers {}

export interface UserDTOContainer {
    user: UserAnswersDTO;
}

export interface UserUpdateDTO {
    count: number;
}

// RIOSM
export const RIOSM_Q1_ENGAGEMENT             : AnswerField = 'riosm_q1_engagement'
export const RIOSM_Q2_GOVERNANCE             : AnswerField = 'riosm_q2_governance'
export const RIOSM_Q3_REPUTATION             : AnswerField = 'riosm_q3_reputation'
export const RIOSM_Q4_SUPPORT_OPEN_SCIENCE   : AnswerField = 'riosm_q4_support_open_science'
export const RIOSM_Q5_DATA_SHARING           : AnswerField = 'riosm_q5_data_sharing'
export const RIOSM_Q6_DATA_SHARING_EDU       : AnswerField = 'riosm_q6_data_sharing_edu'
export const RIOSM_Q7_DATA_ANALYTICS_ACTIVITY: AnswerField = 'riosm_q7_data_analytics_activity'
export const RIOSM_Q8_CTMS                   : AnswerField = 'riosm_q8_ctms'
export const RIOSM_Q9_EXTERNAL_DATA_EDW      : AnswerField = 'riosm_q9_external_data_edw'
export const RIOSM_Q10_RESEARCH_COMPUTING    : AnswerField = 'riosm_q10_research_computing'
export const RIOSM_Q11_SECONDARY_DATA_USE    : AnswerField = 'riosm_q11_secondary_data_use'

export const riosmFields: AnswerField[] = [ 
    RIOSM_Q1_ENGAGEMENT, RIOSM_Q2_GOVERNANCE, RIOSM_Q3_REPUTATION, RIOSM_Q4_SUPPORT_OPEN_SCIENCE,
    RIOSM_Q5_DATA_SHARING, RIOSM_Q6_DATA_SHARING_EDU, RIOSM_Q7_DATA_ANALYTICS_ACTIVITY, RIOSM_Q8_CTMS,
    RIOSM_Q9_EXTERNAL_DATA_EDW, RIOSM_Q10_RESEARCH_COMPUTING, RIOSM_Q11_SECONDARY_DATA_USE
]

export const riosmGovernance: AnswerField[] = [
    RIOSM_Q1_ENGAGEMENT, RIOSM_Q2_GOVERNANCE, RIOSM_Q3_REPUTATION
]

export const riosmDataAndSoftware: AnswerField[] = [
    RIOSM_Q4_SUPPORT_OPEN_SCIENCE, RIOSM_Q5_DATA_SHARING, RIOSM_Q6_DATA_SHARING_EDU
]

export const riosmResearchInformatics: AnswerField[] = [
    RIOSM_Q7_DATA_ANALYTICS_ACTIVITY, RIOSM_Q8_CTMS, RIOSM_Q9_EXTERNAL_DATA_EDW, RIOSM_Q10_RESEARCH_COMPUTING, RIOSM_Q11_SECONDARY_DATA_USE
]

// Quintegra eHMM
export const QUINTEGRA_EHMM_Q1: AnswerField = 'quintegra_ehmm_q1';

// IDC Healthcare IT
export const IDC_HEALTHCARE_IT_Q1: AnswerField = 'idc_healthcare_it_q1';

// HIMSS EMRAM
export const HIMSS_EMRAM_Q1: AnswerField = 'himss_emram_q1';

//  HIMSS CCMM
export const HIMSS_CCMM_Q1: AnswerField = 'himss_ccmm_q1';
export const HIMSS_CCMM_Q2: AnswerField = 'himss_ccmm_q2';
export const HIMSS_CCMM_Q3: AnswerField = 'himss_ccmm_q3';
export const HIMSS_CCMM_Q4: AnswerField = 'himss_ccmm_q4';

export const himssCCmmFields: AnswerField[] = [
    HIMSS_CCMM_Q1, HIMSS_CCMM_Q2, HIMSS_CCMM_Q3, HIMSS_CCMM_Q4
];

// NEHTA IMM
export const NEHTA_IMM_Q1: AnswerField = 'nehta_imm_q1';

// EPRMM
export const EPRMM_Q1: AnswerField = 'eprmm_q1';

// Forrester
export const FORRESTER_MODEL_Q1: AnswerField = 'forrester_model_q1';
export const FORRESTER_MODEL_Q2: AnswerField = 'forrester_model_q2';
export const FORRESTER_MODEL_Q3: AnswerField = 'forrester_model_q3';
export const FORRESTER_MODEL_Q4: AnswerField = 'forrester_model_q4';

export const forresterFields: AnswerField[] = [
    FORRESTER_MODEL_Q1, FORRESTER_MODEL_Q2, FORRESTER_MODEL_Q3, FORRESTER_MODEL_Q4
];

// Precision Health
export const PRECISION_HEALTH_Q1: AnswerField = 'precision_health_q1';
export const PRECISION_HEALTH_Q2: AnswerField = 'precision_health_q2';
export const PRECISION_HEALTH_Q3: AnswerField = 'precision_health_q3';
export const PRECISION_HEALTH_Q4: AnswerField = 'precision_health_q4';
export const PRECISION_HEALTH_Q5: AnswerField = 'precision_health_q5';
export const PRECISION_HEALTH_Q6: AnswerField = 'precision_health_q6';
export const PRECISION_HEALTH_Q7: AnswerField = 'precision_health_q7';
export const PRECISION_HEALTH_Q8: AnswerField = 'precision_health_q8';
export const PRECISION_HEALTH_Q9: AnswerField = 'precision_health_q9';
export const PRECISION_HEALTH_Q10: AnswerField = 'precision_health_q10';

export const precisionHealthFields: AnswerField[] = [
    PRECISION_HEALTH_Q1, PRECISION_HEALTH_Q2, PRECISION_HEALTH_Q3, PRECISION_HEALTH_Q4, PRECISION_HEALTH_Q5,
    PRECISION_HEALTH_Q6, PRECISION_HEALTH_Q7, PRECISION_HEALTH_Q8, PRECISION_HEALTH_Q9, PRECISION_HEALTH_Q10
];