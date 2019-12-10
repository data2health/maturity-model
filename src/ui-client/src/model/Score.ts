export interface RIOSMCategoryScore {
    overall: number;
    governance: number;
    data_and_software_sharing: number;
    research_informatics: number;
}

export interface AnswerScore {
    riosm: number;
    riosm_categories: RIOSMCategoryScore;
    quintegra_ehmm: number;
    idc_healthcare_it: number;
    himss_emram: number;
    himss_ccmm: number;
    nehta_imm: number;
    eprmm: number;
    forrester: number;
}

export interface AnswerScoresDTO {
    all: AnswerScore;
    n: number;
}

export interface AnswerScores extends AnswerScoresDTO {
    user: AnswerScore;
}