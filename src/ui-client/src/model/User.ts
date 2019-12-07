import { AnswerTypes } from "./ModelsState";

export type AnswerField =

    // User name
    'user_fname'                       |
    'user_lname'                       |
    'email'                            |
    'user_complete'                    |

    // RIOSM
    'riosm_complete'                   | 
    'riosm_q1_support_open_science'    | 
    'riosm_q2_data_sharing'            | 
    'riosm_q3_data_sharing_edu'        |
    'riosm_q4_engagement'              |
    'riosm_q5_governance'              |
    'riosm_q6_reputation'              |
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
    'eprmm_q1'                         |

    // Forrester
    'forrester_model_q1'               |
    'forrester_model_q2'               |
    'forrester_model_q3'               |
    'forrester_model_q4'               

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