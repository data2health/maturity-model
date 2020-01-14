# User
RECORD_ID = 'record_id'
EMAIL_ADDRESS = 'email'
ENTRY_CODE = 'entry_code'
APPROVED = 'approved'
FNAME = 'user_fname'
LNAME = 'user_lname'

# RIOSM
RIOSM_COMPLETE = 'riosm_complete'
RIOSM_Q1_ENGAGEMENT = 'riosm_q1_engagement'
RIOSM_Q2_GOVERNANCE = 'riosm_q2_governance'
RIOSM_Q3_REPUTATION = 'riosm_q3_reputation'
RIOSM_Q4_SUPPORT_OPEN_SCIENCE = 'riosm_q4_support_open_science'
RIOSM_Q5_DATA_SHARING = 'riosm_q5_data_sharing'
RIOSM_Q6_DATA_SHARING_EDU = 'riosm_q6_data_sharing_edu'
RIOSM_Q7_DATA_ANALYTICS_ACTIVITY = 'riosm_q7_data_analytics_activity'
RIOSM_Q8_CTMS = 'riosm_q8_ctms'
RIOSM_Q9_EXTERNAL_DATA_EDW = 'riosm_q9_external_data_edw'
RIOSM_Q10_RESEARCH_COMPUTING = 'riosm_q10_research_computing'
RIOSM_Q11_SECONDARY_DATA_USE = 'riosm_q11_secondary_data_use'

riosm_fields = [ 
    RIOSM_Q1_ENGAGEMENT, RIOSM_Q2_GOVERNANCE, RIOSM_Q3_REPUTATION, RIOSM_Q4_SUPPORT_OPEN_SCIENCE,
    RIOSM_Q5_DATA_SHARING, RIOSM_Q6_DATA_SHARING_EDU, RIOSM_Q7_DATA_ANALYTICS_ACTIVITY, RIOSM_Q8_CTMS,
    RIOSM_Q9_EXTERNAL_DATA_EDW, RIOSM_Q10_RESEARCH_COMPUTING, RIOSM_Q11_SECONDARY_DATA_USE
]

riosm_governance = [
    RIOSM_Q1_ENGAGEMENT, RIOSM_Q2_GOVERNANCE, RIOSM_Q3_REPUTATION
]

riosm_data_and_software = [
    RIOSM_Q4_SUPPORT_OPEN_SCIENCE, RIOSM_Q5_DATA_SHARING, RIOSM_Q6_DATA_SHARING_EDU
]

riosm_research_informatics = [
    RIOSM_Q7_DATA_ANALYTICS_ACTIVITY, RIOSM_Q8_CTMS, RIOSM_Q9_EXTERNAL_DATA_EDW, RIOSM_Q10_RESEARCH_COMPUTING, RIOSM_Q11_SECONDARY_DATA_USE
]

# Quintegra eHMM
QUINTEGRA_EHMM_COMPELTE = 'quintegra_ehmm_complete'
QUINTEGRA_EHMM_Q1 = 'quintegra_ehmm_q1'

# IDC Healthcare IT
IDC_HEALTHCARE_IT_COMPLETE = 'idc_healthcare_it_complete'
IDC_HEALTHCARE_IT_Q1 = 'idc_healthcare_it_q1'

# HIMSS EMRAM
HIMSS_EMRAM_COMPLETE = 'himss_emram_complete'
HIMSS_EMRAM_Q1 = 'himss_emram_q1'

# HIMSS CCMM
HIMSS_CCMM_COMPLETE = 'himss_ccmm_complete'
HIMSS_CCMM_Q1 = 'himss_ccmm_q1'
HIMSS_CCMM_Q2 = 'himss_ccmm_q2'
HIMSS_CCMM_Q3 = 'himss_ccmm_q3'
HIMSS_CCMM_Q4 = 'himss_ccmm_q4'

himss_ccmm_fields = [
    HIMSS_CCMM_Q1, HIMSS_CCMM_Q2, HIMSS_CCMM_Q3, HIMSS_CCMM_Q4
]

# NEHTA IMM
NEHTA_IMM_COMPLETE = 'nehta_imm_complete'
NEHTA_IMM_Q1 = 'nehta_imm_q1'

# EPRMM
EPRMM_COMPLETE = 'eprmm_complete'
EPRMM_Q1 = 'eprmm_q1'

# Forrester
FORRESTER_COMPLETE = 'forrester_model_complete'
FORRESTER_MODEL_Q1 = 'forrester_model_q1'
FORRESTER_MODEL_Q2 = 'forrester_model_q2'
FORRESTER_MODEL_Q3 = 'forrester_model_q3'
FORRESTER_MODEL_Q4 = 'forrester_model_q4'

forrester_fields = [
    FORRESTER_MODEL_Q1, FORRESTER_MODEL_Q2, FORRESTER_MODEL_Q3, FORRESTER_MODEL_Q4
]

# Precision Health
PRECISION_HEALTH_COMPLETE = 'precision_health_complete'
PRECISION_HEALTH_Q1 = 'precision_health_q1'
PRECISION_HEALTH_Q2 = 'precision_health_q2'
PRECISION_HEALTH_Q3 = 'precision_health_q3'
PRECISION_HEALTH_Q4 = 'precision_health_q4'
PRECISION_HEALTH_Q5 = 'precision_health_q5'
PRECISION_HEALTH_Q6 = 'precision_health_q6'
PRECISION_HEALTH_Q7 = 'precision_health_q7'
PRECISION_HEALTH_Q8 = 'precision_health_q8'
PRECISION_HEALTH_Q9 = 'precision_health_q9'
PRECISION_HEALTH_Q10 = 'precision_health_q10'

precision_health_fields = [
    PRECISION_HEALTH_Q1, PRECISION_HEALTH_Q2, PRECISION_HEALTH_Q3, PRECISION_HEALTH_Q4, PRECISION_HEALTH_Q5,
    PRECISION_HEALTH_Q6, PRECISION_HEALTH_Q7, PRECISION_HEALTH_Q8, PRECISION_HEALTH_Q9, PRECISION_HEALTH_Q10
]