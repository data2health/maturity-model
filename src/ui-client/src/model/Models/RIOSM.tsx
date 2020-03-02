import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { RIOSMForm } from "../../components/Models/RIOSM";

export const RIOSM: BaseModel = 
{
    completeField: 'riosm_complete',
    name: 'Research Informatics and Open Science Maturity Model (RIOSM)',
    shortName: 'RIOSM',
    description: 'The RIOSM self-assessment survey uses short vignettes to describe a five-level maturity continuum, based on the maturity levels first proposed in the Capability Maturity Model (CMM).  RIOSM’s maturity level vignettes were derived from over 20 hours of interviews at 12 sites.  The result is an evidence-based model derived from data on the variability of capabilities and activities across institutions.',
    render: (dispatch: any, answers: UserAnswers) => <RIOSMForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
        answerField: 'riosm_q1_engagement',
        text: "Choose the statement that best describes how your institution's leadership is engaged in research informatics:", 
        options: [
                {
            text: "Our institution's leadership is not engaged in our informatics mission and our strategic planning has no mention of informatics or investment in health information technology.",
            value: '1'
                },
                {
            text: "Our institution's leadership acknowledges informatics and recognizes a leader, but strategic planning and support is limited.",
            value: '2'
                },
                {
            text: "Our leadership has worked to support informatics initiatives and include them in strategic planning; but they are not central to the plans or their mission.",
            value: '3'
                },
                {
            text: "Leadership views informatics as a crucial, strategic aspect of their mission and includes it in planning and support.",
            value: '4'
                },
                {
            text: "Leadership consistently focuses on the strategic value of informatics in the mission of the organization, and has helped create major informatics strategic initiatives",
            value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q2_governance',
        text: "Choose the statement that best describes your institution's research informatics governance approach:",
        options: [
                {
            text: "We have no specific research informatics leadership positions and governance is ad hoc.",
            value: '1'
                },
                {
            text: "We have a leadership position related to research informatics with a limited role in governance and influence on institutional direction.",
            value: '2'
                },
                {
            text: "We have a leadership (e.g. CRIO, VP of Research IT) position, and that position has influence over related resource governance decisions.",
            value: '3'
                },
                {
            text: "We have one or more leadership positions, and governance is established and effective for research informatics.",
            value: '4'
                },
                {
            text: "We have multiple leadership positions, and these positions lead key insitutional governance committees and are seen as central to the mission.",
            value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q3_reputation',
        text: "How does your institution feel about the reputational value of research informatics?", 
        options: [
                {
            text: "Research informatics is not considered as part of our reputation.",
            value: '1'
                },
                {
            text: "Research informatics is recognized as having some reputational value, but promotion and improvement of the reputation is limited.",
            value: '2'
                },
                {
            text: "Research informatics is valued at our institution, and leadership speaks about its value.",
            value: '3'
                },
                {
            text: "Research informatics is valued, and enhancing our reputation is a key goal of leadership.",
            value: '4'
                },
                {
            text: "Research informatics is valued, supported, and a point of pride for the institution.",
            value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q4_support_open_science',
        text: "Choose the statement that best describes your institution's overall support for open science:",
        options: [
                {
            text: "Our researchers and institutional leadership are not engaged in discussions about open science, or data and software sharing",
            value: '1'
                },
                {
            text: "Specific communities or organizations within our institution are champions for open science, but it’s not on the minds of most researchers.",
            value: '2'
                },
                {
            text: "Most of our researchers are aware and supportive of open science. There is a general orientation towards data and software sharing, but this is largely investigator driven.",
            value: '3'
                },
                {
            text: "Most of our researchers know how to share their data and software to enable reuse and leadership views open science as important to our mission and scientific success, but it is not mandated.",
            value: '4'
                },
                {
            text: "Our researchers and institutional leadership regularly engage in local, national and international discussions about open science, and are aware of community best practices, such as the FAIR Data Principles. Our institution has created policies that require data and software sharing, and support mechanisms that enable the use of best practices and community standards.",
            value: '5'
                }
            ]
        },
        {
            answerField: 'riosm_q5_data_sharing',
            text: "Choose the statement that best describes how your institution supports data and software sharing through policy:",
            options: [
                {
                text: "Our institution does not have policies that define intellectual property (IP) ownership of research and scholarly outputs, or how data and software can be shared.",
                value: '1'
                },
                {
                text: "Our institution has policies that define IP ownership of research and scholarly outputs, and how data and software can be shared, but most people are unaware of the policy details and implications.",
                value: '2'
                },
                {
                text: "Our institution has clearly defined IP, and software and data sharing policies, which most people are aware of and understand. In general, these policies hinder data and software sharing.",
                value: '3'
                },
                {
                text: "Our institution has clearly defined IP, and software and data sharing policies, which most people are aware of and understand. In general, these policies facilitate data and software sharing.",
                value: '4'
                },
                {
                text: "Our institution has clearly defined IP, and software and data sharing policies, which most people are aware of and understand. These policies explicitly support data and software sharing, and provide guidance on specific practices that impact reuse and attribution, such as licensing.",
                value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q6_data_sharing_edu',
        text: "Choose the statement that best describes how your institution supports data and software sharing through educational and technological support:",
        options: [
                {
            text: "Researchers who want to share their data or software must navigate this process on their own.",
            value: '1'
                },
                {
            text: "Our institution provides some educational or technological support, but most researchers are unaware of what is available.",
            value: '2'
                },
                {
            text: "Researchers have access to and regularly utilize organized trainings, documentation, and technology designed to support data and software sharing. These resources are managed by at least one dedicated position within our organization.",
            value: '3'
                },
                {
            text: "Researchers have access to educational and technological support that address a wide breadth of data science and data sharing activities, which are managed by at least one dedicated position within our organization. However, in-depth support for specialized informatics data and software sharing issues are not robust.",
            value: '4'
                },
                {
            text: "Researchers have access to a breadth and depth of educational and technological support, which are managed by multiple dedicated positions with our organization. In-depth support for specialized informatics data and software sharing issues are robust.",
            value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q7_data_analytics_activity',
        text: "Choose the statement that best describes your institution's data analytics activities:",
        options: [
                {
            text: "We have no significant analytics or NLP activities. There may be pockets of work, but not in the research space more generally.",
            value: '1'
                },
                {
            text: "Our institution had created an initial structure for supporting queries, but it is not sustainably staffed. We have participated in some common data model sharing initiatives, but haven't leveraged or used this data for other purposes.",
            value: '2'
                },
                {
            text: "We have areas of expertise, which are regarded as strengths, and EHR query tools deployed. Teams are in place for supporting analytics, and there are clear paths for expanding our NLP activities.",
            value: '3'
                },
                {
            text: "Our institution is seen as a leader in data analytics. Support for data analytics includes the creation of reusable data marts.",
            value: '4'
                },
                {
            text: "Our institution has deployed a de-identified or synthetic data repository to address distribution needs. Our researchers have a clear understanding of the resources they can access and use for analytics.",
            value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q8_ctms',
        text: "Choose the statement that best describes the current status of your institution's clinical trial management system (CTMS):",
        options: [
                {
            text: "We do not have a standard CTMS that is in place or regularly utilized. Most functions are pieced together with REDCap and other tools.",
            value: '1'
                },
                {
            text: "We are in the initial stages of implementing a CTMS, which is managed by research IT. An electronic consent process exists, but its effectiveness is not being monitored.",
            value: '2'
                },
                {
            text: "We have a basic CTMS in place.",
            value: '3'
                },
                {
            text: "We have a CTMS in place and it is broadly utilized. We've implemented some expanded functions, and deployed an electronic consent process.",
            value: '4'
                },
                {
            text: "We have a CTMS with broadly utilized functions in place. Our institution tracks our eConsent rate with an aim to improve our levels.",
            value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q9_external_data_edw',
        text: "Choose the statement that best describes your institution's use of external data in your enterprise data warehouse (EDW):",
        options: [
                {
            text: "No external data sources have been added to our EDW, and we have no clear plans to do so.",
            value: '1'
                },
                {
            text: "We have added external data in pieces, but there's no clear plan or pipeline for inclusion.",
            value: '2'
                },
                {
            text: "External data has been successfully added and linked to our EDW.",
            value: '3'
                },
                {
            text: "The inclusion of external data is a particular strength at our institution, and we are participating in broad national initiatives.",
            value: '4'
                },
                {
            text: "The inclusion of external data is a particular strength at our institution, and we are participating in broad national initiatives. There are clear pathways for incorporating external data into the EDW and additional resources are actively being identified.",
            value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q10_research_computing',
        text: "Choose the statement that best describes your institution's research computing capabilities:",
        options: [
                {
            text: "High performance computing (HPC) resources exist at our institution, but they are not not broadly available or centrally supported.",
            value: '1'
                },
                {
            text: "We have centrally supported HPC resources that investigators know how to access, but our capacity is limited and there are no clear expansion plans.",
            value: '2'
                },
                {
            text: "We have supercomputing capabilities that are being used in bioinformatics, genomics, or other areas related to research informatics.",
            value: '3'
                },
                {
            text: "Our institution has made strategic investments in research computing. Thus, our capabilities are robust and broadly available, but we are facing demand issues.",
            value: '4'
                },
                {
            text: " Our research computing capabilities are robust and well defined, covering broad areas of application. We have processes in place to evaluate and grow our capacity.",
            value: '5'
                }
            ]
        },
        {
        answerField: 'riosm_q11_secondary_data_use',
        text: "Choose the statement that best describes your institution's secondary use of data:",
        options: [
                {   
            text: "We have no central process for researchers to access EHR data.",
            value: '1'
                },
                {
            text: "We have an enterprise data warehouse with EHR data, but there are no organized efforts to make it available. Researchers are generally unaware of what data are available and how to access it.",
            value: '2'                    
                },
                {
            text: "We have a robust EDW, that includes registries, data marts, and an established common data model (CDM) to help researchers query data. We’ve also established a well-functioning concierge service.",
            value: '3'
                },
                {
            text: "We have a centrally managed research data warehouse, with established self-service tools and training opportunities. Research groups and departments can access workflows and expertise to facilitate data processing and analysis.",
            value: '4'
                },
                {
            text: "We are seen as national leaders in the secondary use of data. We’ve deployed various components, including CDMs and analytical tools. Our data is managed and expanded with standard vocabularies. We utilize a tiered access and cost-sharing model, with the latter affording us a functioning level of sustainability.",
            value: '5'
                }
        ]
        }
    ]
}