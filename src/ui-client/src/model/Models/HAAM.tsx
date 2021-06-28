import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { HAAMForm } from "../../components/Models/HAAM";

export const HAAM: BaseModel = 
{
    completeField: 'haam_complete',
    name: 'Healthcare Analytics Adoption Model (HAAM)',
    url: 'https://www.healthcatalyst.com/healthcare-analytics-adoption-model/',
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
                    text: <span><strong>Cost per Unit of Health Reimbursement & Prescriptive Analytics</strong> - Tailoring patient care based on population outcomes and genetic data. Fee-for-quality rewards health maintenance.</span>,
                    value: '8'
                },
                {
                    text: <span><strong>Cost per Capita Reimbursement & Predictive Analytics</strong> - Organizational processes for intervention are supported with predictive risk models. Fee- for-quality includes fixed per capita payment.</span>,
                    value: '7'
                },
                {
                    text: <span><strong>Cost per Case Reimbursement & Data Driven Culture</strong> - Tailoring patient care based upon population metrics. Fee-for-quality includes bundled per case payment.</span>,
                    value: '6'
                },
                {
                    text: <span><strong>Clinical Effectiveness & Population Management</strong> - Reducing variability in care processes. Focusing on internal optimization and waste reduction.</span>,
                    value: '5'
                },
                {
                    text: <span><strong>Automated External Reporting</strong> - Efficient, consistent production of reports & adaptability to changing requirements</span>,
                    value: '4'
                },
                {
                    text: <span><strong>Automated Internal Reporting</strong> - Efficient, consistent production of reports & widespread availability in the organization.</span>,
                    value: '3'
                },
                {
                    text: <span><strong>Standardized Vocabulary & Patient Registries</strong> - Relating and organizing the core data content.</span>,
                    value: '2'
                },
                {
                    text: <span><strong>Data Integration – Enterprise Data Warehouse</strong> - Collecting and integrating the core data content.</span>,
                    value: '1'
                },
                {
                    text: <span><strong>Fragmented Point Solutions</strong> - Inefficient, inconsistent versions of the truth. Cumbersome internal and external reporting.</span>,
                    value: '0'
                }
            ]
        }
    ],
}
