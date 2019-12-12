import os
import sys

from .fields import *

# Models
riosm             = 'riosm'
quintegra_ehmm    = 'quintegra_ehmm'
idc_healthcare_it = 'idc_healthcare_it'
himss_emram       = 'himss_emram'
himss_ccmm        = 'himss_ccmm'
nehta_imm         = 'nehta_imm'
eprmm             = 'eprmm'
forrester         = 'forrester'
precision_health  = 'precision_health'

# RIOSM categories
riosm_categories     = 'riosm_categories'
overall              = 'overall'
governance           = 'governance'
data_and_software    = 'data_and_software_sharing'
research_informatics = 'research_informatics'

def get_user_score(user):

    score = {}
    max_five  = 5.0
    max_six   = 6.0
    max_seven = 7.0

    score[riosm]             = sum([ float(user[field]) for field in riosm_fields if user[field].isdigit() ]) / (len(riosm_fields) * max_five) if user[RIOSM_COMPLETE] == '2' else None
    score[quintegra_ehmm]    = float(user[QUINTEGRA_EHMM_Q1]) / max_seven if user[QUINTEGRA_EHMM_Q1].isdigit() else None if user[QUINTEGRA_EHMM_COMPELTE] == '2' else None
    score[idc_healthcare_it] = float(user[IDC_HEALTHCARE_IT_Q1]) / max_five if user[IDC_HEALTHCARE_IT_Q1].isdigit() else None if user[IDC_HEALTHCARE_IT_COMPLETE] == '2' else None
    score[himss_emram]       = float(user[HIMSS_EMRAM_Q1]) / max_seven if user[HIMSS_EMRAM_Q1].isdigit() else None if user[HIMSS_EMRAM_COMPLETE] == '2' else None
    score[himss_ccmm]        = sum([ float(user[field]) for field in himss_ccmm_fields if user[field].isdigit() ]) / (len(himss_ccmm_fields) * max_seven) if user[HIMSS_CCMM_COMPLETE] == '2' else None
    score[nehta_imm]         = float(user[NEHTA_IMM_Q1]) / max_five if user[NEHTA_IMM_Q1].isdigit() else None if user[NEHTA_IMM_COMPLETE] == '2' else None
    score[eprmm]             = float(user[EPRMM_Q1]) / max_six if user[EPRMM_Q1].isdigit() else None if user[EPRMM_COMPLETE] == '2' else None
    score[precision_health]  = sum([ float(user[field]) for field in precision_health_fields if user[field].isdigit() ]) / (len(precision_health_fields) * max_five) if user[PRECISION_HEALTH_COMPLETE] == '2' else None

    score[riosm_categories] = {}
    score[riosm_categories][overall]              = __get_category_score(user, riosm_fields)
    score[riosm_categories][governance]           = __get_category_score(user, riosm_governance)
    score[riosm_categories][data_and_software]    = __get_category_score(user, riosm_data_and_software)
    score[riosm_categories][research_informatics] = __get_category_score(user, riosm_research_informatics)

    return score

def aggregate(all):

    agg_score  = {}
    all_scores = [ get_user_score(v) for k,v in all.items() if v != None ]
    riosm_scores = [ v[riosm_categories] for v in all_scores ]

    agg_score[riosm]             = __get_aggregate_score(all_scores, riosm)
    agg_score[quintegra_ehmm]    = __get_aggregate_score(all_scores, quintegra_ehmm)
    agg_score[idc_healthcare_it] = __get_aggregate_score(all_scores, idc_healthcare_it)
    agg_score[himss_emram]       = __get_aggregate_score(all_scores, himss_emram)
    agg_score[himss_ccmm]        = __get_aggregate_score(all_scores, himss_ccmm)
    agg_score[nehta_imm]         = __get_aggregate_score(all_scores, nehta_imm)
    agg_score[eprmm]             = __get_aggregate_score(all_scores, eprmm)
    agg_score[precision_health]  = __get_aggregate_score(all_scores, precision_health)

    agg_score[riosm_categories] = {}
    agg_score[riosm_categories][overall]              = __get_aggregate_score(riosm_scores, overall)
    agg_score[riosm_categories][governance]           = __get_aggregate_score(riosm_scores, governance)
    agg_score[riosm_categories][data_and_software]    = __get_aggregate_score(riosm_scores, data_and_software)
    agg_score[riosm_categories][research_informatics] = __get_aggregate_score(riosm_scores, research_informatics)

    return agg_score, len(all_scores)

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