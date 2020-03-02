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

export interface AnswerScore {
    riosm: number;
    riosm_categories: RIOSMCategoryScore;
    riosm_questions: RIOSMQuestionScore;
    quintegra_ehmm: number;
    quintegra_ehmm_questions: Quintegra_eHMMQuestionScore;
    idc_healthcare_it: number;
    himss_emram: number;
    himss_ccmm: number;
    nehta_imm: number;
    eprmm: number;
    forrester: number;
    precision_health: number;
    precision_health_questions: PrecisionHealthQuestionScore;
}

export interface AnswerStats {
    mean: number;
    min: number;
    max: number;
    median: number;
}

export interface AnswerScoresDTO {
    all: AnswerScore;
    n: number;
}

export interface AnswerScores extends AnswerScoresDTO {
    user: AnswerScore;
}