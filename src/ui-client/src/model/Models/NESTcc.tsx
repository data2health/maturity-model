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
        text: "Choose the statement that best describes the current stage of your model for data consistency. Data consistency is defined as relevant uniformity of the meaning of data across contexts (hospitals, clinicians, outpatient environment) in population/cohort identification, clinical documentation practices/policies, workflow descriptions, and analytics",
        options: [
                {
            text: "Conceptual- Clinical processes capture information primarily in verbose, unstructured documents, not as discrete data; lack of organizational awareness of data utility, no effort to systematically manage health care data; lack of consistent or centralized governance, policies, and/or resources; data not organized centrally; data not available for organizational use and analysis; individual data units are project-oriented or focused on immediate profits",
            value: '1'
                },
                {
            text: "Reactive- Able to react to requests for analysis and respond to research requests- but mostly accomplished by manual chart review and abstraction; data management inefficient and expensive, with only sporadic recognition of data utility beyond immediate use; tacit support from leadership regarding need for centralized data governance and management, but only limited allocation of resources; data not available for organizational use and analysis beyond individual requests; individual data units are project- oriented or focused on immediate profits",
            value: '2'
                },
                {
            text: "Structured- Clinical systems manage transactional data types as discrete data; clinical information largely analog text requiring abstraction into data for clinically focused analytics such as quality, performance measurements, or outcomes assessment. Support from leadership for centralized data governance and management of transactional data types and limited clinical data types at the enterprise level; commitment to centralized enterprise data governance, management and curation via managed processes, people and technologies; non-administrative queries conducted mostly as one-off via individual queries, still moderate to high cost to extract data for analysis; able to support a CDM but not done routinely and automatically; data transmission to registries still largely accomplished by manual chart review and abstraction.",
            value: '3'
                },
                {
            text: "Complete- Granular clinical data based on standardized, semantically interoperable clinical CDEs captured in the processes of care, integrated into those care processes; less than on quarter of clinical data submitted to registries requires chart abstraction or manual processing; UDI captured in the processes of care and available in supply chain, clinical documentation, EHR and EDW systems; EDW routinely and systematically represents data externally via various CDMS, including efficient queries, support for large number of research projects; leadership provides centralized data governance, management, and curation at the enterprise level, ensuring performance and data quality of local units and achieving financial sustainability",
            value: '4'
                },
                {
            text: "Advanced- Data linkage and aggregation across systems enabled and open to external queries; semantic interoperability of the vast majority of clinical data accomplished; multiple sources of sustainable funding for research; engagement of regulatory and industry enterprises with enterprise data; leadership responsible for centralized data governance, management and curations at the enterprise level; business benefit well understood, with financial sustainability and recognition and participation in initiatives external to the organization",
            value: '5'
                }
            ]
        },
        {
        answerField: 'nestcc_q2',
        text: "Choose the statement that best describes the current stage of your model for data completeness:",
        options: [
                {
            text: "Conceptual- Clinical processes capture information primarily in verbose, unstructured documents, not as discrete data; lack of organizational awareness of data utility, no effort to systematically manage health care data; lack of consistent or centralized governance, policies, and/or resources; data not organized centrally; data not available for organizational use and analysis; individual data units are project-oriented or focused on immediate profits",
            value: '1'
                },
                {
            text: "Reactive- Able to react to requests for analysis and respond to research requests- but mostly accomplished by manual chart review and abstraction; data management inefficient and expensive, with only sporadic recognition of data utility beyond immediate use; tacit support from leadership regarding need for centralized data governance and management, but only limited allocation of resources; data not available for organizational use and analysis beyond individual requests; individual data units are project- oriented or focused on immediate profits",
            value: '2'
                },
                {
            text: "Structured- Clinical systems manage transactional data types as discrete data; clinical information largely analog text requiring abstraction into data for clinically focused analytics such as quality, performance measurements, or outcomes assessment. Support from leadership for centralized data governance and management of transactional data types and limited clinical data types at the enterprise level; commitment to centralized enterprise data governance, management and curation via managed processes, people and technologies; non-administrative queries conducted mostly as one-off via individual queries, still moderate to high cost to extract data for analysis; able to support a CDM but not done routinely and automatically; data transmission to registries still largely accomplished by manual chart review and abstraction.",
            value: '3'
                },
                {
            text: "Complete- Granular clinical data based on standardized, semantically interoperable clinical CDEs captured in the processes of care, integrated into those care processes; less than on quarter of clinical data submitted to registries requires chart abstraction or manual processing; UDI captured in the processes of care and available in supply chain, clinical documentation, EHR and EDW systems; EDW routinely and systematically represents data externally via various CDMS, including efficient queries, support for large number of research projects; leadership provides centralized data governance, management, and curation at the enterprise level, ensuring performance and data quality of local units and achieving financial sustainability",
            value: '4'
                },
                {
            text: "Advanced- Data linkage and aggregation across systems enabled and open to external queries; semantic interoperability of the vast majority of clinical data accomplished; multiple sources of sustainable funding for research; engagement of regulatory and industry enterprises with enterprise data; leadership responsible for centralized data governance, management and curations at the enterprise level; business benefit well understood, with financial sustainability and recognition and participation in initiatives external to the organization",
            value: '5'
                }
            ]
        },
        {

        answerField: 'nestcc_q3',
        text: "Choose the statement that best describes the current stage of your model for data models (CDMs):",
        options: [
                {
            text: "Conceptual- Clinical processes capture information primarily in verbose, unstructured documents, not as discrete data; lack of organizational awareness of data utility, no effort to systematically manage health care data; lack of consistent or centralized governance, policies, and/or resources; data not organized centrally; data not available for organizational use and analysis; individual data units are project-oriented or focused on immediate profits",
            value: '1'
                },
                {
            text: "Reactive- Able to react to requests for analysis and respond to research requests- but mostly accomplished by manual chart review and abstraction; data management inefficient and expensive, with only sporadic recognition of data utility beyond immediate use; tacit support from leadership regarding need for centralized data governance and management, but only limited allocation of resources; data not available for organizational use and analysis beyond individual requests; individual data units are project- oriented or focused on immediate profits",
            value: '2'
                },
                {
            text: "Structured- Clinical systems manage transactional data types as discrete data; clinical information largely analog text requiring abstraction into data for clinically focused analytics such as quality, performance measurements, or outcomes assessment. Support from leadership for centralized data governance and management of transactional data types and limited clinical data types at the enterprise level; commitment to centralized enterprise data governance, management and curation via managed processes, people and technologies; non-administrative queries conducted mostly as one-off via individual queries, still moderate to high cost to extract data for analysis; able to support a CDM but not done routinely and automatically; data transmission to registries still largely accomplished by manual chart review and abstraction.",
            value: '3'
                },
                {
            text: "Complete- Granular clinical data based on standardized, semantically interoperable clinical CDEs captured in the processes of care, integrated into those care processes; less than on quarter of clinical data submitted to registries requires chart abstraction or manual processing; UDI captured in the processes of care and available in supply chain, clinical documentation, EHR and EDW systems; EDW routinely and systematically represents data externally via various CDMS, including efficient queries, support for large number of research projects; leadership provides centralized data governance, management, and curation at the enterprise level, ensuring performance and data quality of local units and achieving financial sustainability",
            value: '4'
                },
                {
            text: "Advanced- Data linkage and aggregation across systems enabled and open to external queries; semantic interoperability of the vast majority of clinical data accomplished; multiple sources of sustainable funding for research; engagement of regulatory and industry enterprises with enterprise data; leadership responsible for centralized data governance, management and curations at the enterprise level; business benefit well understood, with financial sustainability and recognition and participation in initiatives external to the organization",
            value: '5'
                }
            ]
        },
        {

        answerField: 'nestcc_q4',
        text: "Choose the statement that best describes the current stage of your model for data accuracy:",
        options: [
                {
            text: "Conceptual- Clinical processes capture information primarily in verbose, unstructured documents, not as discrete data; lack of organizational awareness of data utility, no effort to systematically manage health care data; lack of consistent or centralized governance, policies, and/or resources; data not organized centrally; data not available for organizational use and analysis; individual data units are project-oriented or focused on immediate profits",
            value: '1'
                },
                {
            text: "Reactive- Able to react to requests for analysis and respond to research requests- but mostly accomplished by manual chart review and abstraction; data management inefficient and expensive, with only sporadic recognition of data utility beyond immediate use; tacit support from leadership regarding need for centralized data governance and management, but only limited allocation of resources; data not available for organizational use and analysis beyond individual requests; individual data units are project- oriented or focused on immediate profits",
            value: '2'
                },
                {
            text: "Structured- Clinical systems manage transactional data types as discrete data; clinical information largely analog text requiring abstraction into data for clinically focused analytics such as quality, performance measurements, or outcomes assessment. Support from leadership for centralized data governance and management of transactional data types and limited clinical data types at the enterprise level; commitment to centralized enterprise data governance, management and curation via managed processes, people and technologies; non-administrative queries conducted mostly as one-off via individual queries, still moderate to high cost to extract data for analysis; able to support a CDM but not done routinely and automatically; data transmission to registries still largely accomplished by manual chart review and abstraction.",
            value: '3'
                },
                {
            text: "Complete- Granular clinical data based on standardized, semantically interoperable clinical CDEs captured in the processes of care, integrated into those care processes; less than on quarter of clinical data submitted to registries requires chart abstraction or manual processing; UDI captured in the processes of care and available in supply chain, clinical documentation, EHR and EDW systems; EDW routinely and systematically represents data externally via various CDMS, including efficient queries, support for large number of research projects; leadership provides centralized data governance, management, and curation at the enterprise level, ensuring performance and data quality of local units and achieving financial sustainability",
            value: '4'
                },
                {
            text: "Advanced- Data linkage and aggregation across systems enabled and open to external queries; semantic interoperability of the vast majority of clinical data accomplished; multiple sources of sustainable funding for research; engagement of regulatory and industry enterprises with enterprise data; leadership responsible for centralized data governance, management and curations at the enterprise level; business benefit well understood, with financial sustainability and recognition and participation in initiatives external to the organization",
            value: '5'
                }
            ]
        },
        {

        answerField: 'nestcc_q5',
        text: "Choose the statement that best describes the current stage of your model for data automation:",
        options: [
               {
            text: "Conceptual- Clinical processes capture information primarily in verbose, unstructured documents, not as discrete data; lack of organizational awareness of data utility, no effort to systematically manage health care data; lack of consistent or centralized governance, policies, and/or resources; data not organized centrally; data not available for organizational use and analysis; individual data units are project-oriented or focused on immediate profits",
            value: '1'
                },
                {
            text: "Reactive- Able to react to requests for analysis and respond to research requests- but mostly accomplished by manual chart review and abstraction; data management inefficient and expensive, with only sporadic recognition of data utility beyond immediate use; tacit support from leadership regarding need for centralized data governance and management, but only limited allocation of resources; data not available for organizational use and analysis beyond individual requests; individual data units are project- oriented or focused on immediate profits",
            value: '2'
                },
                {
            text: "Structured- Clinical systems manage transactional data types as discrete data; clinical information largely analog text requiring abstraction into data for clinically focused analytics such as quality, performance measurements, or outcomes assessment. Support from leadership for centralized data governance and management of transactional data types and limited clinical data types at the enterprise level; commitment to centralized enterprise data governance, management and curation via managed processes, people and technologies; non-administrative queries conducted mostly as one-off via individual queries, still moderate to high cost to extract data for analysis; able to support a CDM but not done routinely and automatically; data transmission to registries still largely accomplished by manual chart review and abstraction.",
            value: '3'
                },
                {
            text: "Complete- Granular clinical data based on standardized, semantically interoperable clinical CDEs captured in the processes of care, integrated into those care processes; less than on quarter of clinical data submitted to registries requires chart abstraction or manual processing; UDI captured in the processes of care and available in supply chain, clinical documentation, EHR and EDW systems; EDW routinely and systematically represents data externally via various CDMS, including efficient queries, support for large number of research projects; leadership provides centralized data governance, management, and curation at the enterprise level, ensuring performance and data quality of local units and achieving financial sustainability",
            value: '4'
                },
                {
            text: "Advanced- Data linkage and aggregation across systems enabled and open to external queries; semantic interoperability of the vast majority of clinical data accomplished; multiple sources of sustainable funding for research; engagement of regulatory and industry enterprises with enterprise data; leadership responsible for centralized data governance, management and curations at the enterprise level; business benefit well understood, with financial sustainability and recognition and participation in initiatives external to the organization",
            value: '5'
                }
            ]
        }
    ]
}
