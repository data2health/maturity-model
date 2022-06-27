export interface RIOSMCategoryScore {
    overall: number;
    governance: number;
    data_and_software_sharing: number;
    research_informatics: number;
}

export interface RIOSMQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
    q6Stats: AnswerStats;
    q7Stats: AnswerStats;
    q8Stats: AnswerStats;
    q9Stats: AnswerStats;
    q10Stats: AnswerStats;
    q11Stats: AnswerStats;
}

export interface PrecisionHealthQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
    q6Stats: AnswerStats;
    q7Stats: AnswerStats;
    q8Stats: AnswerStats;
    q9Stats: AnswerStats;
    q10Stats: AnswerStats;
}

export interface Quintegra_eHMMQuestionScore {
    q1Stats: AnswerStats;
}

export interface HAAMQuestionScore {
    q1Stats: AnswerStats;
}

export interface SEDoHQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
}

export interface NESTccQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
}

export interface NLPQuestionScore {
    q1Stats: AnswerStats;
    q2Stats: AnswerStats;
    q3Stats: AnswerStats;
    q4Stats: AnswerStats;
    q5Stats: AnswerStats;
    q6Stats: AnswerStats;
}

export interface AllModelsCompleted {
    riosm: number;
    quintegra_ehmm: number;
    haam: number;
    idc_healthcare_it: number;
    himss_emram: number;
    himss_ccmm: number;
    nehta_imm: number;
    nestcc: number;
    nlp: number;
    eprmm: number;
    sedoh: number;
    precision_health: number;
}

export interface BaseAnswerScore {
    riosm: number;
    riosm_categories: RIOSMCategoryScore;
    quintegra_ehmm: number;
    haam: number;
    idc_healthcare_it: number;
    himss_emram: number;
    himss_ccmm: number;
    nehta_imm: number;
    nestcc: number;
    nlp: number;
    eprmm: number;
    forrester: number;
    sedoh: number;
    precision_health: number;
}

export interface AllAnswerScore extends BaseAnswerScore {
    models_completed: AllModelsCompleted;
    haam_questions: HAAMQuestionScore;
    nestcc_questions: NESTccQuestionScore;
    nlp_questions: NLPQuestionScore;
    precision_health_questions: PrecisionHealthQuestionScore;
    quintegra_ehmm_questions: Quintegra_eHMMQuestionScore;
    riosm_questions: RIOSMQuestionScore;
    sedoh_questions: SEDoHQuestionScore;
}

export interface AnswerStats {
    mean: number;
    min: number;
    max: number;
    median: number;
}

export type institution = string;

export interface AnswerScoresDTO {
    all: AllAnswerScore;
    n: number;
    institution_scores: Map<institution, InstitutionScores>;
}

export interface AnswerScores extends AnswerScoresDTO {
    user: BaseAnswerScore;
}


// 

export interface InstitutionScores extends BaseAnswerScore {
    models_completed: AllModelsCompleted;
    haam_questions: HAAMInstitutionScores;
    nestcc_questions: NESTccInstitutionScores;
    nlp_questions: NLPInstitutionScores;
    precision_health_questions: PrecisionHealthInstitutionScores;
    quintegra_ehmm_questions: Quintegra_eHMMInstitutionScores;
    riosm_questions: RIOSMInstitutionScores;
    sedoh_questions: SEDoHInstitutionScores;
}

export interface RIOSMInstitutionScores {
    q1: number[];
    q2: number[];
    q3: number[];
    q4: number[];
    q5: number[];
    q6: number[];
    q7: number[];
    q8: number[];
    q9: number[];
    q10: number[];
    q11: number[];
}

export interface PrecisionHealthInstitutionScores {
    q1: number[];
    q2: number[];
    q3: number[];
    q4: number[];
    q5: number[];
    q6: number[];
    q7: number[];
    q8: number[];
    q9: number[];
    q10: number[];
}

export interface Quintegra_eHMMInstitutionScores {
    q1: number[];
}

export interface HAAMInstitutionScores {
    q1: number[];
}

export interface SEDoHInstitutionScores {
    q1: number[];
    q2: number[];
    q3: number[];
    q4: number[];
    q5: number[];
}

export interface NESTccInstitutionScores {
    q1: number[];
    q2: number[];
    q3: number[];
    q4: number[];
    q5: number[];
}

export interface NLPInstitutionScores {
    q1: number[];
    q2: number[];
    q3: number[];
    q4: number[];
    q5: number[];
    q6: number[];
}
