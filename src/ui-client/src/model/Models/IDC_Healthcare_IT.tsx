import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { IDC_Healthcare_ITForm } from "../../components/Models/IDC_Healthcare_IT";

export const IDC_Healthcare_IT: BaseModel = 
{
    completeField: 'idc_healthcare_it_complete',
    name: 'IDC Healthcare IT (HIT) Maturity Model',
    shortName: 'IDC Healthcare IT',
    description: 'IDC (Health Industry Insights) developed a maturity model that describes the five developmental stages of hospitals IS. Each step is supported by the capabilities of the previous stage. This maturity model, called Healthcare IT (HIT) Maturity Model, has been used worldwide by IDC to assess the maturity of the hospitals IS (HIS). Also, it has been used to compare the average maturity between regions and countries of different continents. This model has five stages: basic HIS, advanced HIS, clinical HIS, and digital hospital and virtual hospital.',
    render: (dispatch: any, answers: UserAnswers) => <IDC_Healthcare_ITForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'idc_healthcare_it_q1',
            text: 'Choose the statement that best describes the current stage of your Healthcare IT Maturity Model:',
            options: [
                {
                    text: 'Basic HIS - Patient registration/inpatient admission, discharge, & transfer; Patient billing and accounts receivable; HRIS/Payroll; General ledger/Financial reporting; Purchasing/Accounts payable.',
                    value: '1'
                },
                {
                    text: 'Advanced HIS - Electronic claims submission (discharge summaries, coding and abstracting); Electronic payment processing; Inventory, supply requisitioning and distribution; Basic order communications; Email; Internet access; Intranet.',
                    value: '2'
                },
                {
                    text: 'Advanced HIS Core Clinicals - Laboratory information system; RIS/Radiology results reporting; PACS; Pharmacy; Operating room scheduling and management.',
                    value: '3'
                },
                {
                    text: 'Digital Hospital - Patient appointment scheduling; Computerized physician order entry; Nursing documentation; Emergency department management; Physician portal; Patient portal; Wireless infrastructure; Inpatient electronic medical record (EMR); Ambulatory EMR; Enterprise master patient index; Location-based services.',
                    value: '4'
                },
                {
                    text: 'Digital Virtual Enterprise - Secure messaging (provider-provider/provider-patient); Clinical data repository/Data warehouse; Participation in regionalized patient CDR; Home health case management; Remote patient monitoring/Telemedicine.',
                    value: '5'
                }
            ]
        }
    ],
}