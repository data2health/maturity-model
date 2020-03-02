import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { ForresterForm } from "../../components/Models/Forrester";

export const Forrester: BaseModel = 
{
    completeField: 'forrester_model_complete',
    name: 'Forrester',
    shortName: 'Forrester',
    description: 'Forrester Research Inc. has developed a model with three stages for the area of EMR. This model was developed in order to help healthcare providers to assess their systems, the way they collaborate and interact, the state of the workflow, and most important, determining the map to get to the next phase. According to Clair, this three stages model includes four dimensions or influencing factors: access, interoperability, content features and planning and strategy. In addition to the model itself, Forrester Research Inc. has also developed a manual to drive systems to the next stage. The three stages of this model are: Paper- or imaged-based patient records dominate, Access to standalone repositories improves and Access to the complete digital medical record is role based.',
    render: (dispatch: any, answers: UserAnswers) => <ForresterForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
        answerField: 'forrester_model_q1',
        text: "Choose the statement that best describes the current situation of your model for access:",
        options: [
                {
            text: "Primary record is physical charts on microfilm or paper.",
            value: '1'
                },
                {
            text: "Retrieval is not integrated with EMR and clinical systems.",
            value: '2'
                },
                {
            text: "Not ready for EMR.",
            value: '3'
                },
                {
            text: "DICOM images are accessed from separate repositories.",
            value: '4'
                }
            ]
        },
        {
            answerField: 'forrester_model_q2',
            text: "Choose the statement that best describes the current situation of your model for content features.:",
            options: [
                {
            text: "Basic scanning of medical records- selected areas.",
            value: '1'
                },
                {
            text: "Dependence on static forms.",
            value: '2'
                },
                {
            text: "Core admins systems are content-enabled.",
            value: '3'
                },
                {
            text: "Records management for physical content only.",
            value: '4'
                }
            ]
        },
        {
        answerField: 'forrester_model_q3',
        text: "Choose the statement that best describes the current situation of your model for interoperability.:",
        options: [
                {
            text: "Requires access to paper-based systems- not all repositories are electronic.",
            value: '1'
                },
                {
            text: "Content is maintained in separate repositories.",
            value: '2'
                },
                {
            text: "Manual payment integration- coding from paper.",
            value: '3'
                }
            ]
        },
        {
        answerField: 'forrester_model_q4',
        text: "Choose the statement that best describes the current situation of your model for planning and strategy.:", 
        options: [
                {
            text: "Point solutions with no strategy for life-cycle ECM.",
            value: '1'
                },
                {
            text: "No cross-system medical record initiative.",
            value: '2'
                }
            ]
        }
    ]
}