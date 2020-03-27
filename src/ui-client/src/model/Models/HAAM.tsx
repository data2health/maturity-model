import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { HAAMForm } from "../../components/Models/HAAM";

export const HAAM: BaseModel = 
{
    completeField: 'haam_complete',
    name: 'Healthcare Analytics Adoption Model (HAAM)',
    shortName: 'HAAM',
    description: 'Healthcare Analytics Adoption Model (HAAM) is a model to measure the adoption and use of data warehouses and data analysis in health care.',
    render: (dispatch: any, answers: UserAnswers) => <HAAMForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'haam_q1',
            text: 'Choose the statement that best describes the current stage of your organization:',
            zeroIndex: true,
            options: [
                {
                    text: 'Fragmented Point Solutions',
                    value: '0'
                },
                {
                    text: 'Data Integration – Enterprise Data Warehouse',
                    value: '1'
                },
                {
                    text: 'Standardized Vocabulary & Patient Registries',
                    value: '2'
                },
                {
                    text: 'Automated Internal Reporting',
                    value: '3'
                },
                {
                    text: 'Automated External Reporting',
                    value: '4'
                },
                {
                    text: 'Clinical Effectiveness & Population Management',
                    value: '5'
                },
                {
                    text: 'Cost per Case Reimbursement & Data Driven Culture',
                    value: '6'
                },
                {
                    text: 'Cost per Capita Reimbursement & Predictive Analytics',
                    value: '7'
                },
                {
                    text: 'Cost per Unit of Health Reimbursement & Prescriptive Analytics',
                    value: '8'
                }
            ]
        }
    ],
}