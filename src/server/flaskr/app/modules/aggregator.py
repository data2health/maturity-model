import os
import sys

from .fields import *
from statistics import median

# Models completed
models_completed = 'models_completed'

# Models
riosm             = 'riosm'
quintegra_ehmm    = 'quintegra_ehmm'
haam              = 'haam'
idc_healthcare_it = 'idc_healthcare_it'
himss_emram       = 'himss_emram'
himss_ccmm        = 'himss_ccmm'
nehta_imm         = 'nehta_imm'
nestcc            = 'nestcc'
nlp               = 'nlp'
eprmm             = 'eprmm'
forrester         = 'forrester'
sedoh             = 'sedoh'
precision_health  = 'precision_health'

riosm_questions            = 'riosm_questions'
quintegra_ehmm_questions   = 'quintegra_ehmm_questions'
haam_questions             = 'haam_questions'
sedoh_questions            = 'sedoh_questions'
precision_health_questions = 'precision_health_questions'
nestcc_questions           = 'nestcc_questions'
nlp_questions              = 'nlp_questions'

# RIOSM categories
riosm_categories     = 'riosm_categories'
overall              = 'overall'
governance           = 'governance'
data_and_software    = 'data_and_software_sharing'
research_informatics = 'research_informatics'

# RIOSM questions
riosm_q1_engagement              = 'riosm_q1_engagement'
riosm_q2_governance              = 'riosm_q2_governance'  
riosm_q3_reputation              = 'riosm_q3_reputation'
riosm_q4_support_open_science    = 'riosm_q4_support_open_science'
riosm_q5_data_sharing            = 'riosm_q5_data_sharing'
riosm_q6_data_sharing_edu        = 'riosm_q6_data_sharing_edu'
riosm_q7_data_analytics_activity = 'riosm_q7_data_analytics_activity'
riosm_q8_ctms                    = 'riosm_q8_ctms'
riosm_q9_external_data_edw       = 'riosm_q9_external_data_edw'
riosm_q10_research_computing     = 'riosm_q10_research_computing'
riosm_q11_secondary_data_use     = 'riosm_q11_secondary_data_use'

# Quintegra_eHMM questions
quintegra_ehmm_q1 = 'quintegra_ehmm_q1'

# HAAM questions
haam_q1 = 'haam_q1'

# SEDoH questions
sedoh_q1  = 'sedoh_q1'
sedoh_q2  = 'sedoh_q2'
sedoh_q3  = 'sedoh_q3'
sedoh_q4  = 'sedoh_q4'
sedoh_q5  = 'sedoh_q5'

# Precision Health questions
precision_health_q1  = 'precision_health_q1'
precision_health_q2  = 'precision_health_q2'
precision_health_q3  = 'precision_health_q3'
precision_health_q4  = 'precision_health_q4'
precision_health_q5  = 'precision_health_q5'
precision_health_q6  = 'precision_health_q6'
precision_health_q7  = 'precision_health_q7'
precision_health_q8  = 'precision_health_q8'
precision_health_q9  = 'precision_health_q9'
precision_health_q10 = 'precision_health_q10'

# NESTcc questions
nestcc_q1  = 'nestcc_q1'
nestcc_q2  = 'nestcc_q2'
nestcc_q3  = 'nestcc_q3'
nestcc_q4  = 'nestcc_q4'
nestcc_q5  = 'nestcc_q5'

# NLP questions
nlp_q1  = 'nlp_q1'
nlp_q2  = 'nlp_q2'
nlp_q3  = 'nlp_q3'
nlp_q4  = 'nlp_q4'
nlp_q5  = 'nlp_q5'
nlp_q6  = 'nlp_q6'

# Stats
q1Stats = 'q1Stats'
q2Stats = 'q2Stats'
q3Stats = 'q3Stats'
q4Stats = 'q4Stats'
q5Stats = 'q5Stats'
q6Stats = 'q6Stats'
q7Stats = 'q7Stats'
q8Stats = 'q8Stats'
q9Stats = 'q9Stats'
q10Stats = 'q10Stats'
q11Stats = 'q11Stats'

def get_user_score(user):

    score = {}
    max_five  = 5.0
    max_six   = 6.0
    max_seven = 7.0
    max_eight = 8.0

    score[riosm]             = sum([ float(user[field]) for field in riosm_fields if user[field].isdigit() ]) / (len(riosm_fields) * max_five) if user[RIOSM_COMPLETE] == '2' else None
    score[quintegra_ehmm]    = float(user[QUINTEGRA_EHMM_Q1]) / max_seven if user[QUINTEGRA_EHMM_Q1].isdigit() else None if user[QUINTEGRA_EHMM_COMPELTE] == '2' else None
    score[haam]              = float(user[HAAM_Q1]) / max_eight if user[HAAM_Q1].isdigit() else None if user[HAAM_COMPELTE] == '2' else None
    score[idc_healthcare_it] = float(user[IDC_HEALTHCARE_IT_Q1]) / max_five if user[IDC_HEALTHCARE_IT_Q1].isdigit() else None if user[IDC_HEALTHCARE_IT_COMPLETE] == '2' else None
    score[himss_emram]       = float(user[HIMSS_EMRAM_Q1]) / max_seven if user[HIMSS_EMRAM_Q1].isdigit() else None if user[HIMSS_EMRAM_COMPLETE] == '2' else None
    score[himss_ccmm]        = sum([ float(user[field]) for field in himss_ccmm_fields if user[field].isdigit() ]) / (len(himss_ccmm_fields) * max_seven) if user[HIMSS_CCMM_COMPLETE] == '2' else None
    score[nehta_imm]         = float(user[NEHTA_IMM_Q1]) / max_five if user[NEHTA_IMM_Q1].isdigit() else None if user[NEHTA_IMM_COMPLETE] == '2' else None
    score[nestcc]            = sum([ float(user[field]) for field in nestcc_fields if user[field].isdigit() ]) / (len(nestcc_fields) * max_five) if user[NESTcc_COMPLETE] == '2' else None
    score[nlp]               = sum([ float(user[field]) for field in nlp_fields if user[field].isdigit() ]) / (len(nlp_fields) * max_five) if user[NLP_COMPLETE] == '2' else None
    score[eprmm]             = float(user[EPRMM_Q1]) / max_six if user[EPRMM_Q1].isdigit() else None if user[EPRMM_COMPLETE] == '2' else None
    score[sedoh]             = sum([ float(user[field]) for field in sedoh_fields if user[field].isdigit() ]) / (len(sedoh_fields) * max_seven) if user[SEDOH_COMPLETE] == '2' else None
    score[precision_health]  = sum([ float(user[field]) for field in precision_health_fields if user[field].isdigit() ]) / (len(precision_health_fields) * max_five) if user[PRECISION_HEALTH_COMPLETE] == '2' else None

    score[riosm_categories] = {}
    score[riosm_categories][overall]              = __get_category_score(user, riosm_fields)
    score[riosm_categories][governance]           = __get_category_score(user, riosm_governance)
    score[riosm_categories][data_and_software]    = __get_category_score(user, riosm_data_and_software)
    score[riosm_categories][research_informatics] = __get_category_score(user, riosm_research_informatics)

    score[riosm_questions] = {}
    score[riosm_questions][riosm_q1_engagement]              = float(user[RIOSM_Q1_ENGAGEMENT]) if user[RIOSM_Q1_ENGAGEMENT].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q2_governance]              = float(user[RIOSM_Q2_GOVERNANCE]) if user[RIOSM_Q2_GOVERNANCE].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q3_reputation]              = float(user[RIOSM_Q3_REPUTATION]) if user[RIOSM_Q3_REPUTATION].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q4_support_open_science]    = float(user[RIOSM_Q4_SUPPORT_OPEN_SCIENCE]) if user[RIOSM_Q4_SUPPORT_OPEN_SCIENCE].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q5_data_sharing]            = float(user[RIOSM_Q5_DATA_SHARING]) if user[RIOSM_Q5_DATA_SHARING].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q6_data_sharing_edu]        = float(user[RIOSM_Q6_DATA_SHARING_EDU]) if user[RIOSM_Q6_DATA_SHARING_EDU].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q7_data_analytics_activity] = float(user[RIOSM_Q7_DATA_ANALYTICS_ACTIVITY]) if user[RIOSM_Q7_DATA_ANALYTICS_ACTIVITY].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q8_ctms]                    = float(user[RIOSM_Q8_CTMS]) if user[RIOSM_Q8_CTMS].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q9_external_data_edw]       = float(user[RIOSM_Q9_EXTERNAL_DATA_EDW]) if user[RIOSM_Q9_EXTERNAL_DATA_EDW].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q10_research_computing]     = float(user[RIOSM_Q10_RESEARCH_COMPUTING]) if user[RIOSM_Q10_RESEARCH_COMPUTING].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None
    score[riosm_questions][riosm_q11_secondary_data_use]     = float(user[RIOSM_Q11_SECONDARY_DATA_USE]) if user[RIOSM_Q11_SECONDARY_DATA_USE].isdigit() else None if user[RIOSM_COMPLETE] == '2' else None

    score[quintegra_ehmm_questions] = {}
    score[quintegra_ehmm_questions][quintegra_ehmm_q1]       = float(user[QUINTEGRA_EHMM_Q1]) if user[QUINTEGRA_EHMM_Q1].isdigit() else None if user[QUINTEGRA_EHMM_COMPELTE] == '2' else None

    score[haam_questions] = {}
    score[haam_questions][haam_q1]                           = float(user[HAAM_Q1]) if user[HAAM_Q1].isdigit() else None if user[HAAM_COMPELTE] == '2' else None

    score[sedoh_questions] = {}
    score[sedoh_questions][sedoh_q1]   = float(user[SEDOH_Q1]) if user[SEDOH_Q1].isdigit() else None if user[SEDOH_COMPLETE] == '2' else None
    score[sedoh_questions][sedoh_q2]   = float(user[SEDOH_Q2]) if user[SEDOH_Q2].isdigit() else None if user[SEDOH_COMPLETE] == '2' else None
    score[sedoh_questions][sedoh_q3]   = float(user[SEDOH_Q3]) if user[SEDOH_Q3].isdigit() else None if user[SEDOH_COMPLETE] == '2' else None
    score[sedoh_questions][sedoh_q4]   = float(user[SEDOH_Q4]) if user[SEDOH_Q4].isdigit() else None if user[SEDOH_COMPLETE] == '2' else None
    score[sedoh_questions][sedoh_q5]   = float(user[SEDOH_Q5]) if user[SEDOH_Q5].isdigit() else None if user[SEDOH_COMPLETE] == '2' else None

    score[precision_health_questions] = {}
    score[precision_health_questions][precision_health_q1]   = float(user[PRECISION_HEALTH_Q1]) if user[PRECISION_HEALTH_Q1].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q2]   = float(user[PRECISION_HEALTH_Q2]) if user[PRECISION_HEALTH_Q2].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q3]   = float(user[PRECISION_HEALTH_Q3]) if user[PRECISION_HEALTH_Q3].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q4]   = float(user[PRECISION_HEALTH_Q4]) if user[PRECISION_HEALTH_Q4].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q5]   = float(user[PRECISION_HEALTH_Q5]) if user[PRECISION_HEALTH_Q5].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q6]   = float(user[PRECISION_HEALTH_Q6]) if user[PRECISION_HEALTH_Q6].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q7]   = float(user[PRECISION_HEALTH_Q7]) if user[PRECISION_HEALTH_Q7].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q8]   = float(user[PRECISION_HEALTH_Q8]) if user[PRECISION_HEALTH_Q8].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q9]   = float(user[PRECISION_HEALTH_Q9]) if user[PRECISION_HEALTH_Q9].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None
    score[precision_health_questions][precision_health_q10]  = float(user[PRECISION_HEALTH_Q10]) if user[PRECISION_HEALTH_Q10].isdigit() else None if user[PRECISION_HEALTH_COMPLETE] == '2' else None

    score[nestcc_questions] = {}
    score[nestcc_questions][nestcc_q1]   = float(user[NESTcc_Q1]) if user[NESTcc_Q1].isdigit() else None if user[NESTcc_COMPLETE] == '2' else None
    score[nestcc_questions][nestcc_q2]   = float(user[NESTcc_Q2]) if user[NESTcc_Q2].isdigit() else None if user[NESTcc_COMPLETE] == '2' else None
    score[nestcc_questions][nestcc_q3]   = float(user[NESTcc_Q3]) if user[NESTcc_Q3].isdigit() else None if user[NESTcc_COMPLETE] == '2' else None
    score[nestcc_questions][nestcc_q4]   = float(user[NESTcc_Q4]) if user[NESTcc_Q4].isdigit() else None if user[NESTcc_COMPLETE] == '2' else None
    score[nestcc_questions][nestcc_q5]   = float(user[NESTcc_Q5]) if user[NESTcc_Q5].isdigit() else None if user[NESTcc_COMPLETE] == '2' else None

    score[nlp_questions] = {}
    score[nlp_questions][nlp_q1]   = float(user[NLP_Q1]) if user[NLP_Q1].isdigit() else None if user[NLP_COMPLETE] == '2' else None
    score[nlp_questions][nlp_q2]   = float(user[NLP_Q2]) if user[NLP_Q2].isdigit() else None if user[NLP_COMPLETE] == '2' else None
    score[nlp_questions][nlp_q3]   = float(user[NLP_Q3]) if user[NLP_Q3].isdigit() else None if user[NLP_COMPLETE] == '2' else None
    score[nlp_questions][nlp_q4]   = float(user[NLP_Q4]) if user[NLP_Q4].isdigit() else None if user[NLP_COMPLETE] == '2' else None
    score[nlp_questions][nlp_q5]   = float(user[NLP_Q5]) if user[NLP_Q5].isdigit() else None if user[NLP_COMPLETE] == '2' else None
    score[nlp_questions][nlp_q6]   = float(user[NLP_Q6]) if user[NLP_Q6].isdigit() else None if user[NLP_COMPLETE] == '2' else None

    score[models_completed] = {}
    score[models_completed][riosm]             = 1 if user[RIOSM_COMPLETE] == '2' else None
    score[models_completed][quintegra_ehmm]    = 1 if user[QUINTEGRA_EHMM_COMPELTE] == '2' else None
    score[models_completed][haam]              = 1 if user[HAAM_COMPELTE] == '2' else None
    score[models_completed][idc_healthcare_it] = 1 if user[IDC_HEALTHCARE_IT_COMPLETE] == '2' else None
    score[models_completed][himss_emram]       = 1 if user[HIMSS_EMRAM_COMPLETE] == '2' else None
    score[models_completed][himss_ccmm]        = 1 if user[HIMSS_CCMM_COMPLETE] == '2' else None
    score[models_completed][nehta_imm]         = 1 if user[NEHTA_IMM_COMPLETE] == '2' else None
    score[models_completed][nestcc]            = 1 if user[NESTcc_COMPLETE] == '2' else None
    score[models_completed][nlp]               = 1 if user[NLP_COMPLETE] == '2' else None
    score[models_completed][eprmm]             = 1 if user[EPRMM_COMPLETE] == '2' else None
    score[models_completed][forrester]         = 1 if user[FORRESTER_COMPLETE] == '2' else None
    score[models_completed][sedoh]             = 1 if user[SEDOH_COMPLETE] == '2' else None
    score[models_completed][precision_health]  = 1 if user[PRECISION_HEALTH_COMPLETE] == '2' else None

    return score

def aggregate(all):

    agg_score  = {}
    all_scores = [ get_user_score(v) for k,v in all.items() if v != None ]

    all_models_completed = [ v[models_completed] for v in all_scores ]
    riosm_scores = [ v[riosm_categories] for v in all_scores ]
    riosm_question_scores = [ v[riosm_questions] for v in all_scores ]
    quintegra_ehmm_question_scores = [ v[quintegra_ehmm_questions] for v in all_scores ]
    haam_question_scores = [ v[haam_questions] for v in all_scores ]
    nestcc_question_scores = [ v[nestcc_questions] for v in all_scores ]
    nlp_question_scores = [ v[nlp_questions] for v in all_scores ]
    sedoh_question_scores = [ v[sedoh_questions] for v in all_scores ]
    precision_health_question_scores = [ v[precision_health_questions] for v in all_scores ]

    agg_score[riosm]             = __get_aggregate_score(all_scores, riosm)
    agg_score[quintegra_ehmm]    = __get_aggregate_score(all_scores, quintegra_ehmm)
    agg_score[haam]              = __get_aggregate_score(all_scores, haam)
    agg_score[idc_healthcare_it] = __get_aggregate_score(all_scores, idc_healthcare_it)
    agg_score[himss_emram]       = __get_aggregate_score(all_scores, himss_emram)
    agg_score[himss_ccmm]        = __get_aggregate_score(all_scores, himss_ccmm)
    agg_score[nehta_imm]         = __get_aggregate_score(all_scores, nehta_imm)
    agg_score[nestcc]            = __get_aggregate_score(all_scores, nestcc)
    agg_score[nlp]               = __get_aggregate_score(all_scores, nlp)
    agg_score[eprmm]             = __get_aggregate_score(all_scores, eprmm)
    agg_score[sedoh]             = __get_aggregate_score(all_scores, sedoh)
    agg_score[precision_health]  = __get_aggregate_score(all_scores, precision_health)

    agg_score[riosm_categories] = {}
    agg_score[riosm_categories][overall]              = __get_aggregate_score(riosm_scores, overall)
    agg_score[riosm_categories][governance]           = __get_aggregate_score(riosm_scores, governance)
    agg_score[riosm_categories][data_and_software]    = __get_aggregate_score(riosm_scores, data_and_software)
    agg_score[riosm_categories][research_informatics] = __get_aggregate_score(riosm_scores, research_informatics)

    agg_score[riosm_questions] = {}
    agg_score[riosm_questions][q1Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q1_engagement)
    agg_score[riosm_questions][q2Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q2_governance)
    agg_score[riosm_questions][q3Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q3_reputation)
    agg_score[riosm_questions][q4Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q4_support_open_science)
    agg_score[riosm_questions][q5Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q5_data_sharing)
    agg_score[riosm_questions][q6Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q6_data_sharing_edu)
    agg_score[riosm_questions][q7Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q7_data_analytics_activity)
    agg_score[riosm_questions][q8Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q8_ctms)
    agg_score[riosm_questions][q9Stats]             = __get_aggregate_stats(riosm_question_scores, riosm_q9_external_data_edw)
    agg_score[riosm_questions][q10Stats]            = __get_aggregate_stats(riosm_question_scores, riosm_q10_research_computing)
    agg_score[riosm_questions][q11Stats]            = __get_aggregate_stats(riosm_question_scores, riosm_q11_secondary_data_use)

    agg_score[quintegra_ehmm_questions] = {}
    agg_score[quintegra_ehmm_questions][q1Stats]    = __get_aggregate_stats(quintegra_ehmm_question_scores, quintegra_ehmm_q1)

    agg_score[haam_questions] = {}
    agg_score[haam_questions][q1Stats]              = __get_aggregate_stats(haam_question_scores, haam_q1)

    agg_score[sedoh_questions] = {}
    agg_score[sedoh_questions][q1Stats]  = __get_aggregate_stats(sedoh_question_scores, sedoh_q1)
    agg_score[sedoh_questions][q2Stats]  = __get_aggregate_stats(sedoh_question_scores, sedoh_q2)
    agg_score[sedoh_questions][q3Stats]  = __get_aggregate_stats(sedoh_question_scores, sedoh_q3)
    agg_score[sedoh_questions][q4Stats]  = __get_aggregate_stats(sedoh_question_scores, sedoh_q4)
    agg_score[sedoh_questions][q5Stats]  = __get_aggregate_stats(sedoh_question_scores, sedoh_q5)

    agg_score[precision_health_questions] = {}
    agg_score[precision_health_questions][q1Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q1)
    agg_score[precision_health_questions][q2Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q2)
    agg_score[precision_health_questions][q3Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q3)
    agg_score[precision_health_questions][q4Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q4)
    agg_score[precision_health_questions][q5Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q5)
    agg_score[precision_health_questions][q6Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q6)
    agg_score[precision_health_questions][q7Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q7)
    agg_score[precision_health_questions][q8Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q8)
    agg_score[precision_health_questions][q9Stats]  = __get_aggregate_stats(precision_health_question_scores, precision_health_q9)
    agg_score[precision_health_questions][q10Stats] = __get_aggregate_stats(precision_health_question_scores, precision_health_q10)

    agg_score[nestcc_questions] = {}
    agg_score[nestcc_questions][q1Stats]  = __get_aggregate_stats(nestcc_question_scores, nestcc_q1)
    agg_score[nestcc_questions][q2Stats]  = __get_aggregate_stats(nestcc_question_scores, nestcc_q2)
    agg_score[nestcc_questions][q3Stats]  = __get_aggregate_stats(nestcc_question_scores, nestcc_q3)
    agg_score[nestcc_questions][q4Stats]  = __get_aggregate_stats(nestcc_question_scores, nestcc_q4)
    agg_score[nestcc_questions][q5Stats]  = __get_aggregate_stats(nestcc_question_scores, nestcc_q5)

    agg_score[nlp_questions] = {}
    agg_score[nlp_questions][q1Stats]  = __get_aggregate_stats(nlp_question_scores, nlp_q1)
    agg_score[nlp_questions][q2Stats]  = __get_aggregate_stats(nlp_question_scores, nlp_q2)
    agg_score[nlp_questions][q3Stats]  = __get_aggregate_stats(nlp_question_scores, nlp_q3)
    agg_score[nlp_questions][q4Stats]  = __get_aggregate_stats(nlp_question_scores, nlp_q4)
    agg_score[nlp_questions][q5Stats]  = __get_aggregate_stats(nlp_question_scores, nlp_q5)
    agg_score[nlp_questions][q6Stats]  = __get_aggregate_stats(nlp_question_scores, nlp_q6)

    agg_score[models_completed] = {}
    agg_score[models_completed][riosm]             = __get_aggregate_completed_models(all_models_completed, riosm)
    agg_score[models_completed][quintegra_ehmm]    = __get_aggregate_completed_models(all_models_completed, quintegra_ehmm)
    agg_score[models_completed][haam]              = __get_aggregate_completed_models(all_models_completed, haam)
    agg_score[models_completed][idc_healthcare_it] = __get_aggregate_completed_models(all_models_completed, idc_healthcare_it)
    agg_score[models_completed][himss_emram]       = __get_aggregate_completed_models(all_models_completed, himss_emram)
    agg_score[models_completed][himss_ccmm]        = __get_aggregate_completed_models(all_models_completed, himss_ccmm)
    agg_score[models_completed][nehta_imm]         = __get_aggregate_completed_models(all_models_completed, nehta_imm)
    agg_score[models_completed][nestcc]            = __get_aggregate_completed_models(all_models_completed, nestcc)
    agg_score[models_completed][nlp]               = __get_aggregate_completed_models(all_models_completed, nlp)
    agg_score[models_completed][eprmm]             = __get_aggregate_completed_models(all_models_completed, eprmm)
    agg_score[models_completed][sedoh]             = __get_aggregate_completed_models(all_models_completed, sedoh)
    agg_score[models_completed][precision_health]  = __get_aggregate_completed_models(all_models_completed, precision_health)

    return agg_score, len(all_scores)

def __get_aggregate_completed_models(models, key):
    valid = [ model[key] for model in models if model[key] != None ]
    if len(valid) > 0:
        return sum(valid)
    return 0.0

def __get_aggregate_score(scores, key):

    valid = [ score[key] for score in scores if score[key] != None ]
    len_valid = len(valid)
    if len_valid > 0:
        return sum(valid) / len_valid
    return 0.0

def __get_category_score(user, keys):

    valid = [ float(user[key]) for key in keys if user[key].isdigit() ]
    len_valid = len(valid)
    if len_valid > 0:
        return sum(valid) / len_valid
    return 0.0

def __get_aggregate_stats(scores, key):

    stats = {}
    valid = [ score[key] for score in scores if score[key] != None ]
    len_valid = len(valid)
    if len_valid > 0:
        stats['mean']   = sum(valid) / len_valid
        stats['min']    = min(valid)
        stats['max']    = max(valid)
        stats['median'] = median(valid)
        return stats
    return 0.0