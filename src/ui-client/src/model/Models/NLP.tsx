import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { NLPForm } from "../../components/Models/NLP";

export const NLP: BaseModel = 
{
    completeField: 'nlp_complete',
    name: 'NLP Maturity Grid',
    shortName: 'NLP',
    description: 'The NLP maturity model is a grid-based model developed as part of the CD2H iCore Community meetings in 2020. Its purpose is to provide an assessment of an organization’s maturity in implementing central NLP-based services (or Text analytics services) with higher maturity indicating higher service management, increased sophistication and quality in processing text, and higher effectiveness in integrating results. This model has six categories with five maturity levels in each category. Current version is a draft that needs further piloting and review.',
    render: (dispatch: any, answers: UserAnswers) => <NLPForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
        answerField: 'nlp_q1',
        text: <span>Choose the statement that best describes the current level of your model for <strong>sources of text</strong>:</span>,
        options: [
                {
            text: "Institutional wide quality assurance and cleaning of text document prior to NLP processing.",
            value: '5'
                },
                {
            text: "Institutional-wide agreement of note/text document standards.",
            value: '4'
                },
                {
            text: "Standard access based on governance to all note types.",
            value: '3'
                },
                {
            text: "Standard access to selected note type.",
            value: '2'
                },    
                {
            text: "Source text documents available only on individual request basis.",
            value: '1'
                }
            ]
        },
        {
        answerField: 'nlp_q2',
        text: <span>Choose the statement that best describes the current level of your model for <strong>rules</strong>:</span>,
        options: [
                {
            text: "Optimize quality assurance to Data Governance policies and practices.",
            value: '5'
                },
                {
            text: "Quantitatively Manage Adherence to Governance Policies.",
            value: '4'
                },
                {
            text: "Established process with supporting infrastructure for applying data governance policies.",
            value: '3'
                },
                {
            text: "Establish Institution - wide data governance policies.",
            value: '2'
                },
                {
            text: "Ad hoc - decisions are made by ad hoc engagement of various offices.",
            value: '1'
                }
            ]
        },
        {
        answerField: 'nlp_q3',
        text: <span>Choose the statement that best describes the current level of your model for <strong>expected outcomes</strong>:</span>,
        options: [
                {
            text: "Funding and cross departmental resources provided for implementation.",
            value: '5'
                },
                {
            text: "Data Model captured.",
            value: '4'
                },
                {
            text: "Aligning skills and implementation with requirements.",
            value: '3'
                },
                {
            text: "Understanding of requirements and agreement.",
            value: '2'
                },
                {
            text: "Vision of NLP use Data model.",
            value: '1'
                }
            ]
        },
        {
        answerField: 'nlp_q4',
        text: <span>Choose the statement that best describes the current level of your model for <strong>tools and skills</strong>:</span>,
        options: [
                {
            text: "Automation (Software Engineering) Processing unmanaged text documents.",
            value: '5'
                },
                {
            text: "NLP pipeline building tool implementation.",
            value: '4'
                },
                {
            text: "Developing CORPUS, Gold Standard Annotation, Creating Machine Learning Models, Entity Recognition techniques, Ontology understanding.",
            value: '3'
                },
                {
            text: "External vendor implementation of black box.",
            value: '2'
                },
                {
            text: "No skills in NLP, lacking experience and technology skills data model.",
            value: '1'
                }
            ]
        },
        {
        answerField: 'nlp_q5',
        text: <span>Choose the statement that best describes the current level of your model for <strong>integration of results</strong>:</span>,
        options: [
                {
            text: "NLP impacts learning health system outcomes and patient outcomes.",
            value: '5'
                },
                {
            text: "NLP results are incorporated in research data workflow.",
            value: '4'
                },
                {
            text: "NLP results may be integrated as new facts in EDW4R.",
            value: '3'
                },
                {
            text: "NLP results are reported for projects without incorporation into EDW4R.",
            value: '2'
                },
                {
            text: "No plan for integration. Project based NLP for proof of concept.",
            value: '1'
                }
            ]
        },
        {
        answerField: 'nlp_q6',
        text: <span>Choose the statement that best describes the current level of your model for <strong>validation</strong>:</span>,
        options: [
                {
            text: "Keeping up to date in current validation methods.",
            value: '5'
                },
                {
            text: "Enterprise or cross level validation.",
            value: '4'
                },
                {
            text: "Quantitatively Managed ex. Recall, F score.",
            value: '3'
                },
                {
            text: "Validation Planning.",
            value: '2'
                },
                {
            text: "No validation.",
            value: '1'
                }
            ]
        }
    ]
}