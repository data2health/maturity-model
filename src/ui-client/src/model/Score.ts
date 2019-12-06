export interface AnswerScore {
    riosm: number;
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
    user: AnswerScore;
}

export interface AnswerScores extends AnswerScoresDTO {}