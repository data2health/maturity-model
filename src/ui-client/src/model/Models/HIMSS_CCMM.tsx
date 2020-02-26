import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { HIMSS_CCMMForm } from "../../components/Models/HIMSS_CCMM";

export const HIMSS_CCMM: BaseModel = 
{
    completeField: 'himss_ccmm_complete',
    name: 'HIMSS Continuity of Care Maturity Model (CCMM)',
    shortName: 'HIMSS CCMM',
    description: 'Created to help the optimization of results in health systems and patient satisfaction. The HIMSS Continuity of Care Maturity Model (CCMM) goes beyond Stage 7 of EMRAM. It consists of 7 stages and it is based on the EMRAM structure. This global maturity model addresses the convergence of interoperability, exchange of information, coordination of care, patient involvement. Its goal is the efficient management of health for the whole of the population and also at the individual level. This model also has the ability to assess the implementation and use of IT by the health service providers in order to optimize clinical and financial outcomes. With regard to the benefits of using this model, we can highlight the guidelines for the design of a solid strategy, at national and regional levels. Appropriate measures are taken in a timely manner and include all stakeholders. As an example of these guidelines, we highlight the standardization of: IT systems, privacy, patient involvement, etc.',
    render: (dispatch: any, answers: UserAnswers) => <HIMSS_CCMMForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
        answerField: 'himss_ccmm_q1',
        text: "Choose the statement that best describes the current stage of your model:",
        options: [
                {
            text: "Limited to no e-communication.",
            value: '0'
                },
                {
            text: "Basic peer-to-peer data exchange.",
            value: '1'
                },
                {
            text: "Patient centered clinical data using basic system-to-system exchange.",
            value: '2'
                },
                {
            text: "Normalized patient record using structural interoperability.",
            value: '3'
                },
                {
            text: "Care coordination based on actionable data using a semantic interoperable patient record.",
            value: '4'
                },
                {
            text: "Community wide patient record using applied information with patient engagement focus.",
            value: '5'
                },
                {
            text: "Closed loop care coordination across care team members.",
            value: '6'
                },
                {
            text: "Knowledge driven engagement for a dynamic, multi-vendor, multi-organizational interconnected healthcare delivery model.",
            value: '7'
                }
            ]
        },
        {
            answerField: 'himss_ccmm_q2',
            text: "Choose the statement that best describes the current stage of your model:",
            options: [
                {
            text: "Engaged in EMRAM maturation.",
            value: '0'
                },
                {
            text: "Limited shared care plans outside the organization. Leverage 3rd party reference resources. Basic alerts.",
            value: '1'
                },
                {
            text: "Patient record available to multi-disciplinary internal and tethered care teams. EMR exchange. Immunization and disease registries.",
            value: '2'
                },
                {
            text: "Multiple entity clinical data integration. Regional/nations PACS. Electronic referrals, consent. Telemedicine capable.",
            value: '3'
                },
                {
            text: "Shared care plans track, update, task coordination with alerts and reminders. ePrescribing. Pandemic tracking and analytics.",
            value: '4'
                },
                {
            text: "Community-wide patient record with integrated care plans bio-surveillance. Patient data entry, personal targets, alerts.",
            value: '5'
                },
                {
            text: "Dynamic intelligent patient record tracks closed loop care delivery. Multiple care pathways/protocols. Patient compliance tracking.",
            value: '6'
                },
                {
            text: "Comprehensive pop-health. Completely coordinated care across all care settings. Integrated personalized medicine.",
            value: '7'
                }
            ]
        },
        {
        answerField: 'himss_ccmm_q3',
        text: "Choose the statement that best describes the current stage of your model:",
        options: [
                {
            text: "Governance is informal, inconsistent and undocumented.",
            value: '0'
                },
                {
            text: "Policies for CofC strategy, business continuity, disaster recovery, and security & privacy. Data governance is active.",
            value: '1'
                },
                {
            text: "Policies drive clinical coordination, semantic interoperability. Change management is documented and standardized.",
            value: '2'
                },
                {
            text: "Data governance across organizations.",
            value: '3'
                },
                {
            text: "Policies in place for collaboration, data security, mobile device use, and interconnectivity between healthcare providers and patients.",
            value: '4'
                },
                {
            text: "Best clinical practices are derived from care community healthcare data and operationalized across the community.",
            value: '5'
                },
                {
            text: "Policies address non-compliance.",
            value: '6'
                },
                {
            text: "National and local policies are aligned.",
            value: '7'
                }
            ]
        },
        {
        answerField: 'himss_ccmm_q4',
        text: "Choose the statement that best describes the current stage of your model:", 
        options: [
                {
            text: "Data is isolated.",
            value: '0'
                },
                {
            text: "Some external data incorporated into patient record.",
            value: '1'
                },
                {
            text: "Patient-centered clinical data presentation. Pervasive electronic automated ID management for patients, providers, and facilities.",
            value: '2'
                },
                {
            text: "Aggregated clinical and financial data. Medical classification and vocabulary tools are pervasive. Mobile tech supports point of care.",
            value: '3'
                },
                {
            text: "All care team members have access to all data. Semantic data drives actionable CDS and analytics. Comprehensive audit trail.",
            value: '4'
                },
                {
            text: "Patient data aggregated into a single cohesive record. Mobile tech engages patients. Community wide identity management.",
            value: '5'
                },
                {
            text: "Organizational, pan-organizational, and community-wide CDS and population health tracking.",
            value: '6'
                },
                {
            text: "Near real-time care community based health record and patient profile.",
            value: '7'
                }
            ]
        }
    ]
}