import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { PrecisionHealthForm } from "../../components/Models/PrecisionHealth";

export const PrecisionHealth: BaseModel = 
{
    completeField: 'precision_health_complete',
    name: 'Precision Health Deployment/Adoption Model',
    shortName: 'Precision Health',
    description: 'The Precision Health Deployment Maturity model focuses on guiding institutional strategic investment in research informatics and information technology (research IT), and providing the ability to measure readiness for clinical and research infrastructure as well as sustainability of expertise.',
    render: (dispatch: any, answers: UserAnswers) => <PrecisionHealthForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'precision_health_q1',
            text: <span>Choose the statement that best describes your institution's <strong>motivation, commitment, and overall alignment</strong> to a precision health program:</span>,
            options: [
                {
                    text: 'Established institutional goals for Precision health program with outcomes tracked, and regular improvements based on metrics.',
                    value: '5'
                },
                {
                    text: 'Precision health program activities tracked.',
                    value: '4'
                },
                {
                    text: 'Institutional precision health strategy with  budget and leadership.',
                    value: '3'
                },
                {
                    text: 'Isolated/departmental precision health projects.',
                    value: '2'
                },
                {
                    text: 'General lack of awareness of precision health approaches and value.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q2',
            text: <span>Choose the statement that best describes your institution's <strong>capability to establish and manage appropriate roles, responsibilities, and rules</strong> to govern a precision health program:</span>,
            options: [
                {
                    text: 'Governance is regularly evaluated against institutional goals with process and policy improvement program.',
                    value: '5'
                },
                {
                    text: 'Goal-oriented governance with process and policy milestones and measured progress.',
                    value: '4'
                },
                {
                    text: 'Standard approach to governance institutionally with documented roles and responsibilities.',
                    value: '3'
                },
                {
                    text: 'Project specific, and independent, relationships and rules for precision health projects.',
                    value: '2'
                },
                {
                    text: 'No process for initializing or executing precision health programs.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q3',
            text: <span>Choose the statement that best describes your institution's capability to <strong>sustain</strong> a precision health program, including <strong>financing, leadership, facilities, capabilities</strong>:</span>,
            options: [
                {
                    text: 'Institutional business model for precision health that regularly evaluates investments based on established institutional goals.',
                    value: '5'
                },
                {
                    text: 'Strategic institutional plan that includes budget, revenues, staffing, and facilities.',
                    value: '4'
                },
                {
                    text: 'Regular institutional budget commitments, grants, and/or revenues cover costs of precision health programs.',
                    value: '3'
                },
                {
                    text: 'Individual projects have ongiong budgets, but may be incomplete.  No sustainability plan.',
                    value: '2'
                },
                {
                    text: 'No awareness of investments required for successful precision health program.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q4',
            text: <span>Choose the statement that best describes your institution's <strong>focus on precision health outcomes</strong>, with clearly identified <strong>research and clinical priorities</strong>:</span>,
            options: [
                {
                    text: 'Institutional commitment to a synthetic program in precision health that has clearly defined, measurable outcomes with feedback loops.',
                    value: '5'
                },
                {
                    text: 'Institutional strategic foci and financial investments that are across particular disease states with clearly identified outcomes.',
                    value: '4'
                },
                {
                    text: 'Reproducible program in precision health that has research or care processes across more than one disease.',
                    value: '3'
                },
                {
                    text: 'Individual departmental or research project precison approaches around isolated diseases.',
                    value: '2'
                },
                {
                    text: 'No identified diseases that are candidates for precision approaches.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q5',
            text: <span>Choose the statement that best describes your institution's <strong>engagement with patients</strong> in precision health approaches and outcomes, <strong>representing the patient journey</strong>:</span>,
            options: [
                {
                    text: 'A systematic, patient-centerd approach to precision health care that uses regular engagement and assessment to improve patient engagement and health outcomes.',
                    value: '5'
                },
                {
                    text: 'An institutional approach throughout the patient engagement lifecycle that promotes research and patient centered care.',
                    value: '4'
                },
                {
                    text: 'A standardized program in patient engagement with policies, processes, and tools across multiple disease teams.',
                    value: '3'
                },
                {
                    text: 'Individual project efforts that engage patients in precision health approaches.',
                    value: '2'
                },
                {
                    text: 'No awareness of role of patients in precision health approaches.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q6',
            text: <span>Choose the statement that best describes your institution's capability to <strong>participate in the constant research and innovation ecosystem</strong> that is part of precision health:</span>,
            options: [
                {
                    text: 'Strategic innovation program, regularly reviewed against landscape with identified key investment and partnership areas.',
                    value: '5'
                },
                {
                    text: 'Institutionally coordinated innovation program focused on specific outcomes with intentional partnerships.',
                    value: '4'
                },
                {
                    text: 'Multiple programs or departments collaborate to develop innovation programs.  Possible industry involvement.',
                    value: '3'
                },
                {
                    text: 'Individual projects, likely grant funded, independently pursue precision health innovation.',
                    value: '2'
                },
                {
                    text: 'No awareness of precision health innovation landscape or participation therein.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q7',
            text: <span>Choose the statement that best describes your institution's capability to <strong>participate in the national and international community of partners</strong> that are advancing the broader precision health agenda:</span>,
            options: [
                {
                    text: 'Institutional strategy for national participation is part of business model with regular review of progress and alignment with opportunities and partners.',
                    value: '5'
                },
                {
                    text: 'Institutional strategy for national participation including identified programs and funding, internal participants, and external partners.',
                    value: '4'
                },
                {
                    text: 'Multiple programs or departments collaborate to participate in, and may lead, national consortia.',
                    value: '3'
                },
                {
                    text: 'Individual programs participate, but do not lead, multi-institutional initiatives.',
                    value: '2'
                },
                {
                    text: 'Little to no identifiable participation in national precision health landscape.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q8',
            text: <span>Choose the statement that best describes your institution's capability to <strong>provide and coordinate an effective facilities environment</strong> that supports precision health programs:</span>,
            options: [
                {
                    text: 'Long-term facility strategy with facility value regularly measured against institutional goals and local and national service landscape.',
                    value: '5'
                },
                {
                    text: 'Institutional investments in core facilities for precision health that are sustained to support multiple projects.',
                    value: '4'
                },
                {
                    text: 'Broader institutional collaboration and investments in facilities required for precision health approaches.',
                    value: '3'
                },
                {
                    text: 'Individual programs leveraging existing facilities for precision health, with some tactical funding for new equipment.',
                    value: '2'
                },
                {
                    text: 'No precision health facility investment, little awareness of capabilities of existing facilities for precision health.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q9',
            text: <span>Choose the statement that best describes your institution's capability to <strong>provide an IT environment</strong> that supports and anticipates changing precision health needs:</span>,
            options: [
                {
                    text: 'Sustained IT infrastructure that is regularly assessed and improved in terms of alignment with institutional precision health goals.',
                    value: '5'
                },
                {
                    text: 'Institutional strategy for IT solutions that provide core capabilities based on institutional priorities and programs.',
                    value: '4'
                },
                {
                    text: 'Investments in institutionally coordinated systems and storage capabilities across multiple programs.',
                    value: '3'
                },
                {
                    text: 'Individual programs invest in isolated or bespoke IT solutions for their precision health projects.',
                    value: '2'
                },
                {
                    text: 'No awareness of IT resources required for precision health, and no coordination of them.',
                    value: '1'
                }
            ]
        },
        {
            answerField: 'precision_health_q10',
            text: <span>Choose the statement that best describes your institution's capability to <strong>identify and provision data</strong> in support of a precision health program:</span>,
            options: [
                {
                    text: 'Strategic and regularly reviewed data policies and processes that identify data needs  and establish mechanisms for access proactively.',
                    value: '5'
                },
                {
                    text: 'Institutionally coordinated policies and processes for data access, with established relationships with data owners.',
                    value: '4'
                },
                {
                    text: 'Well understood processes and policies, with defined roles and responsibilities, that enable access to data required for precision health.',
                    value: '3'
                },
                {
                    text: 'Individual projects make arrangements tactically to gain access to data for their individual projects.',
                    value: '2'
                },
                {
                    text: 'Unclear access to data required for precision health, nor understanding of data sets required.',
                    value: '1'
                }
            ]
        }
    ]
}