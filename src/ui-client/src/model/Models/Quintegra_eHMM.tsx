import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { Quintegra_eHMMForm } from "../../components/Models/Quintegra_eHMM";

export const Quintegra_eHMM: BaseModel = 
{
    completeField: 'quintegra_ehmm_complete',
    name: 'Quintegra Maturity Model for Electronic Healthcare (eHMM)',
    shortName: 'Quintegra eHMM',
    description: 'In general, maturity models focus mainly on the organizations, although eHMM incorporates all the services providers associated to the healthcare processes, adjustable to any specific provider at any maturity level and able to show different levels of maturity for different business processes. The following process maturity levels provide a roadmap for organizations embarking on the journey of continuous process improvement. The eHMM proposes a 7-level maturity model to map how health processes can reach maturity. The model shows the evolution, improvement, and transformation of a business over time and captures its capabilities at each intermediate level. The maturity model is used in contemporary methodologies for setting goals and measuring progress. The eHMM illustrates a transformation of the healthcare enterprise electronic process from an immature to a national level. This is explained through entities, departments and infrastructure at a defined point in time. Each level has distinct characteristics that differentiate it from other levels.',
    render: (dispatch: any, answers: UserAnswers) => <Quintegra_eHMMForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'quintegra_ehmm_q1',
            text: 'Choose the statement that best describes the current level of your model:',
            options: [
                {
                    text: 'Hospital Administration Level',
                    value: '1'
                },
                {
                    text: 'Hospital Enterprise Level',
                    value: '2'
                },
                {
                    text: 'EMR Basic Level',
                    value: '3'
                },
                {
                    text: 'Clinical Decision Support Level',
                    value: '4'
                },
                {
                    text: 'Clinical Research Level',
                    value: '5'
                },
                {
                    text: 'Regional Level',
                    value: '6'
                },
                {
                    text: 'National Level',
                    value: '7'
                }
            ]
        }
    ],
}