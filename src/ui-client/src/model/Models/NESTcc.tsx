import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { NESTccForm } from "../../components/Models/NESTcc";

export const NESTcc: BaseModel = 
{
    completeField: 'nestcc_complete',
    name: 'NESTcc Data Quality Maturity Model',
    shortName: 'NESTcc',
    description: 'To describe expected capabilities at different levels of organizational maturity with respect to RWD quality, we have developed the NESTcc Data Quality Maturity Model. The model targets the governance, processes, and technologies of health care organizations used in RWD capture and management, principally via EHR and other clinical documentation systems.',
    render: (dispatch: any, answers: UserAnswers) => <NESTccForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
        answerField: 'nestcc_q1',
        text: "Choose the statement that best describes the current stage of your model for data consistency:",
        options: [
                {
            text: "Conceptual",
            value: '1'
                },
                {
            text: "Reactive",
            value: '2'
                },
                {
            text: "Structured",
            value: '3'
                },
                {
            text: "Complete",
            value: '4'
                },
                {
            text: "Advanced",
            value: '5'
                }
            ]
        },
        {
        answerField: 'nestcc_q2',
        text: "Choose the statement that best describes the current stage of your model for data completeness:",
        options: [
                {
            text: "Conceptual",
            value: '1'
                },
                {
            text: "Reactive",
            value: '2'
                },
                {
            text: "Structured",
            value: '3'
                },
                {
            text: "Complete",
            value: '4'
                },
                {
            text: "Advanced",
            value: '5'
                }
            ]
        },
        {
        answerField: 'nestcc_q3',
        text: "Choose the statement that best describes the current stage of your model for data models (CDMs):",
        options: [
                {
            text: "Conceptual",
            value: '1'
                },
                {
            text: "Reactive",
            value: '2'
                },
                {
            text: "Structured",
            value: '3'
                },
                {
            text: "Complete",
            value: '4'
                },
                {
            text: "Advanced",
            value: '5'
                }
            ]
        },
        {
        answerField: 'nestcc_q4',
        text: "Choose the statement that best describes the current stage of your model for data accuracy:",
        options: [
                {
            text: "Conceptual",
            value: '1'
                },
                {
            text: "Reactive",
            value: '2'
                },
                {
            text: "Structured",
            value: '3'
                },
                {
            text: "Complete",
            value: '4'
                },
                {
            text: "Advanced",
            value: '5'
                }
            ]
        },
        {
        answerField: 'nestcc_q5',
        text: "Choose the statement that best describes the current stage of your model for data automation:",
        options: [
                {
            text: "Conceptual",
            value: '1'
                },
                {
            text: "Reactive",
            value: '2'
                },
                {
            text: "Structured",
            value: '3'
                },
                {
            text: "Complete",
            value: '4'
                },
                {
            text: "Advanced",
            value: '5'
                }
            ]
        }
    ]
}