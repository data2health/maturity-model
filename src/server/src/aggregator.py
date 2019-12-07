import os
import sys

from fields import *

riosm = 'riosm'
quintegra_ehmm = 'quintegra_ehmm'
idc_healthcare_it = 'idc_healthcare_it'
himss_emram = 'himss_emram'
himss_ccmm = 'himss_ccmm'
nehta_imm = 'nehta_imm'
eprmm = 'eprmm'
forrester = 'forrester'

def get_user_score(user):

    score = {}
    max_five  = 5.0
    max_six   = 6.0
    max_seven = 7.0

    score[riosm]             = sum([ float(user[field]) for field in riosm_fields if user[field].isdigit() ]) / (len(riosm_fields) * max_five)
    score[quintegra_ehmm]    = float(user[QUINTEGRA_EHMM_Q1]) / max_seven if user[QUINTEGRA_EHMM_Q1].isdigit() else None
    score[idc_healthcare_it] = float(user[IDC_HEALTHCARE_IT_Q1]) / max_five if user[IDC_HEALTHCARE_IT_Q1].isdigit() else None
    score[himss_emram]       = float(user[HIMSS_EMRAM_Q1]) / max_seven if user[HIMSS_EMRAM_Q1].isdigit() else None
    score[himss_ccmm]        = sum([ float(user[field]) for field in himss_ccmm_fields if user[field].isdigit() ]) / (len(himss_ccmm_fields) * max_seven)
    score[nehta_imm]         = float(user[NEHTA_IMM_Q1]) / max_five if user[NEHTA_IMM_Q1].isdigit() else None
    score[eprmm]             = float(user[EPRMM_Q1]) / max_six if user[EPRMM_Q1].isdigit() else None

    return score

def aggregate(user, all):

    agg_score  = {}
    usr_score  = get_user_score(user)
    all_scores = [ get_user_score(v) for k,v in all.items() ]

    agg_score[riosm]             = __get_aggregate_score(all_scores, riosm)
    agg_score[quintegra_ehmm]    = __get_aggregate_score(all_scores, quintegra_ehmm)
    agg_score[idc_healthcare_it] = __get_aggregate_score(all_scores, idc_healthcare_it)
    agg_score[himss_emram]       = __get_aggregate_score(all_scores, himss_emram)
    agg_score[himss_ccmm]        = __get_aggregate_score(all_scores, himss_ccmm)
    agg_score[nehta_imm]         = __get_aggregate_score(all_scores, nehta_imm)
    agg_score[eprmm]             = __get_aggregate_score(all_scores, eprmm)

    return usr_score, agg_score, len(all_scores)


def __get_aggregate_score(scores, key):

    valid = [ score[key] for score in scores if score[key] != None ]
    len_valid = len(valid)
    if len_valid > 0:
        return sum(valid) / len_valid
    return 0.0
