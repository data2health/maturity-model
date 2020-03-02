import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { NEHTA_IMMForm } from "../../components/Models/NEHTA_IMM";

export const NEHTA_IMM: BaseModel = 
{
    completeField: 'nehta_imm_complete',
    name: 'NEHTA Interoperability Maturity Model (IMM)',
    shortName: 'NEHTA IMM',
    description: 'The provision of health care involves many different stakeholders, including both the technical and organizational informational area. The ability of these actors to interoperate will have a strong impact on the delivery of health care safely and confidence along the stages. The constant evolution of technology and the changes in clinical practice bring us to assess the ability to take advantage of these developments. The National E-health Transition Authority of Australia (NEHTA) produced an Interoperability Maturity Model (IMM) which is based on three components: five stages CMMI (Capability Maturity Model Integration), a set of interoperability goals, and an evaluation model focused at the national level. The five stages of this model are constrained by organizational, informational and technical dimensions at local, corporate and national level. Interoperability targets for reuse, evolution, standards, scope, scalability, configurability and explanation are shared between the three dimensions. The objectives associated with business and governance are set to the organizational dimension. Informational dimension targets are classified as: data format and semantics, meta-data, ownership and rights, common building blocks. Targets associated with the technical dimension are classified as: interface specification, functional decomposition, communication protocol. Ntier architecture and technical policy separation.',
    render: (dispatch: any, answers: UserAnswers) => <NEHTA_IMMForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'nehta_imm_q1',
            text: 'Choose the statement that best describes the current stage of your model:',
            options: [
                {
                    text: 'No awareness of e-health interoperability issue nor processes to support it. Isolated system design, development, and procurement.',
                    value: '0'
                },
                {
                    text: 'Awareness of e-health interoperability requirement. Initial e-health interoperability solutions typically within clinical/administrative.',
                    value: '1'
                },
                {
                    text: 'Begin adoption of e-health standards. Shared understanding of data/services/internal processes. Early governance.',
                    value: '2'
                },
                {
                    text: 'Defined guidelines for healthcare standards, services, policies, processes and legal compliance. Established governance.',
                    value: '3'
                },
                {
                    text: 'Processes for appraising e-health interoperability e.g. conformance/compliance or run-time monitoring.',
                    value: '4'
                },
                {
                    text: 'Driven by feedback from monitored processes, interoperability capability continuously improves overall e-health capability.',
                    value: '5'
                }
            ]
        }
    ],
}