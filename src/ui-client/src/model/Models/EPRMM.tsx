import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { EPRMMForm } from "../../components/Models/EPRMM";

export const EPRMM: BaseModel = 
{
    completeField: 'eprmm_complete',
    name: 'Electronic Patient Record Maturity Model (EPRMM)',
    shortName: 'EPRMM',
    description: 'According to the NHS (United Kingdom National Health Service), there are six different stages of functionality implemented cumulatively until a complete and exhaustive Electronic Patient Record (EPR) is achieved. The adoption of an ERP system has been seen as a goal of health care organizations. In fact, it is intended to improve the efficiency of the organizations in the treatment of patient information, timely provision and needs at the point of care. As it progresses, more information will be available in the information system, whether using traditional computers, mobile phones or portable devices. The EPR system functions as the main source of all patient information. It keeps the complete medical record and will be available online at the point of contact with the patient.',
    render: (dispatch: any, answers: UserAnswers) => <EPRMMForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'eprmm_q1',
            text: 'Choose the statement that best describes the current stage of your Electronic Patient Record Maturity Model.:',
            options: [
                {
                    text: 'Clinical administrative data - Patient administration and independent departmental systems.',
                    value: '1'
                },
                {
                    text: ' Integrated clinical diagnosis and treatment support - Stage 1+; Integrated master patient index, departmental systems',
                    value: '2'
                },
                {
                    text: 'Clinical activity support - Stage 2+; Electronic clinical orders, results reporting, prescribing, multi-professional care pathways',
                    value: '3'
                },
                {
                    text: 'Clinical knowledge and decision support - Stage 3+; Electronic access to knowledge basis, embedded guidelines, rules, electronic alerts, expert system support.',
                    value: '4'
                },
                {
                    text: 'Specialty specific support - Stage 4+; Special clinical modules, document imaging.',
                    value: '5'
                },
                {
                    text: 'Advanced multi-media and telematics - Stage 5+; Telemedicine, other multi-media applications (e.g., picture archiving and communication systems).',
                    value: '6' 
                }
            ]
        }
    ],
}