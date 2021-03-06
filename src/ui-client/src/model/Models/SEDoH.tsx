import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { SEDoHForm } from "../../components/Models/SEDoH";

export const SEDoH: BaseModel = 
{
    completeField: 'sedoh_complete',
    name: 'Social & Environmental Determinants of Health Maturity Model (v2, SEDoH)',
    shortName: 'SEDoH',
    description: "This maturity model is for SEDoH data use in the clinical enterprise, not data being collected exclusively for research projects. Race, ethnicity, address, and other variables collected as a standard part of patient registration and billing are not considered SEDoH data collection. Each of the questions asks about the highest level at which your institution consistently performs. Even if there may be a research project at your institution that is very advanced, the goal of this maturity model is to understand at which level your institution's clinical enterprise consistently performs.",
    render: (dispatch: any, answers: UserAnswers) => <SEDoHForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
        answerField: 'sedoh_q1',
        text: <span>What is the highest level of <strong>DATA COLLECTION POLICIES</strong> in the SC CTSI SEDoH Maturity Model at which your organization consistently and comprehensively operates on a daily basis?</span>,
        options: [
                {
            text: "Standard across entire organization",
            value: '7'
                },
                {
            text: "Standard across sections of the enterprise",
            value: '6'
                },
                {
            text: "Standard within subunits",
            value: '5'
                },
                {
            text: "Groups with consistent practices",
            value: '4'
                },
                {
            text: "Individuals with consistent practices",
            value: '3'
                },
                {
            text: "Ad hoc",
            value: '2'
                },
                {
            text: "None",
            value: '1'
                }
            ]
        },
        {
            answerField: 'sedoh_q2',
            text: <span>What is the highest level of <strong>DATA COLLECTION METHODS</strong> in the SC CTSI SEDoH Maturity Model at which your organization consistently and comprehensively operates on a daily basis?</span>,
            options: [
                {
            text: "External data integration (Dynamic)",
            value: '7'
                },
                {
            text: "External data integration (Static)",
            value: '6'
                },
                {
            text: "EHR-based, Structured",
            value: '5'
                },
                {
            text: "Electronic, not EHR-based, Structured",
            value: '4'
                },
                {
            text: "EHR, free text or note templates",
            value: '3'
                },
                {
            text: "Electronic, not EHR-based. research",
            value: '2'
                },
                {
            text: "Paper",
            value: '1'
                }
            ]
        },
        {
        answerField: 'sedoh_q3',
        text: <span>What is the highest level of <strong>TECHNOLOGY PLATFORMS</strong> in the SC CTSI SEDoH Maturity Model at which your organization consistently and comprehensively operates on a daily basis?</span>,
        options: [
                {
            text: "EHR + Pop Health Platform + external data feed integration",
            value: '7'
                },
                {
            text: "EHR-linked or based + Population Health Platform",
            value: '6'
                },
                {
            text: "EHR-linked or based, integrated analytics",
            value: '5'
                },
                {
            text: "EHR-linked, External Analytics",
            value: '4'
                },
                {
            text: "Non-EHR, Analytics platform (e.g. PowerBI)",
            value: '3'
                },
                {
            text: "Non-EHR, Non-analytics platform (e.g. excel)",
            value: '2'
                },
                {
            text: "None",
            value: '1'
                }
            ]
        },
        {
        answerField: 'sedoh_q4',
        text: <span>What is the highest level of <strong>ANALYTICS CAPACITY</strong> (specifically in terms of SEDoH) in the SC CTSI SEDoH Maturity Model at which your organization consistently and comprehensively operates on a daily basis?</span>,
        options: [
                {
            text: "Personalized Medicine & Prescriptive Analytics",
            value: '7'
                },
                {
            text: "Population Health & Risk Intervention Analytics",
            value: '6'
                },
                {
            text: "Waste & Care Variability Reduction",
            value: '5'
                },
                {
            text: "Automated external reporting",
            value: '4'
                },
                {
            text: "Automated internal reporting",
            value: '3'
                },
                {
            text: "Standardized Vocabulary",
            value: '2'
                },
                {
            text: "None",
            value: '1'
                }
            ]
        },
        {
        answerField: 'sedoh_q5',
        text: <span>What is the highest level of <strong>OPERATIONAL AND STRATEGIC IMPACT</strong> in the SC CTSI SEDoH Maturity Model at which your organization consistently and comprehensively operates on a daily basis?</span>,
        options: [
                {
            text: "Influences strategic and financial decisions at the highest level",
            value: '7'
                },
                {
            text: "Guides programmatic implementation",
            value: '6'
                },
                {
            text: "SEDoH services center",
            value: '5'
                },
                {
            text: "Informs departmental decisions",
            value: '4'
                },
                {
            text: "Informs individual clinical decisions",
            value: '3'
                },
                {
            text: "Research or Project-based only",
            value: '2'
                },
                {
            text: "None",
            value: '1'
                }
            ]
        }
    ]
}
