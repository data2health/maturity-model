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
                    text: 'Fragmented Point Solutions- Inefficient, inconsistent versions of the truth. Cumbersome internal and external reporting.',
                    value: '0'
                },
                {
                    text: 'Data Integration – Enterprise Data Warehouse- Collecting and integrating the core data content.',
                    value: '1'
                },
                {
                    text: 'Standardized Vocabulary & Patient Registries- Relating and organizing the core data content.',
                    value: '2'
                },
                {
                    text: 'Automated Internal Reporting- Efficient, consistent production of reports & widespread availability in the organization.',
                    value: '3'
                },
                {
                    text: 'Automated External Reporting- Efficient, consistent production of reports & adaptability to changing requirements',
                    value: '4'
                },
                {
                    text: 'Clinical Effectiveness & Population Management- Reducing variability in care processes. Focusing on internal optimization and waste reduction.',
                    value: '5'
                },
                {
                    text: 'Cost per Case Reimbursement & Data Driven Culture- Tailoring patient care based upon population metrics. Fee-for-quality includes bundled per case payment.',
                    value: '6'
                },
                {
                    text: 'Cost per Capita Reimbursement & Predictive Analytics- Organizational processes for intervention are supported with predictive risk models. Fee- for-quality includes fixed per capita payment.',
                    value: '7'
                },
                {
                    text: 'Cost per Unit of Health Reimbursement & Prescriptive Analytics- Tailoring patient care based on population outcomes and genetic data. Fee-for-quality rewards health maintenance.',
                    value: '8'
                }
            ]
        }
    ],
}
