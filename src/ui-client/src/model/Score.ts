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

export interface BaseAnswerScore {
    riosm: number;
    riosm_categories: RIOSMCategoryScore;
    quintegra_ehmm: number;
    idc_healthcare_it: number;
    himss_emram: number;
    himss_ccmm: number;
    nehta_imm: number;
    eprmm: number;
    forrester: number;
    precision_health: number;
}

export interface AllAnswerScore extends BaseAnswerScore {
    riosm_questions: RIOSMQuestionScore;
    quintegra_ehmm_questions: Quintegra_eHMMQuestionScore;
    precision_health_questions: PrecisionHealthQuestionScore;
}

export interface AnswerStats {
    mean: number;
    min: number;
    max: number;
    median: number;
}

export interface AnswerScoresDTO {
    all: AllAnswerScore;
    n: number;
}

export interface AnswerScores extends AnswerScoresDTO {
    user: BaseAnswerScore;
}