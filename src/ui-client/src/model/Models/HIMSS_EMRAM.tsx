import React from "react";
import { BaseModel } from "../ModelsState";
import { UserAnswers } from "../User";
import { HIMSS_EMRAMForm } from "../../components/Models/HIMSS_EMRAM";

export const HIMSS_EMRAM: BaseModel = 
{
    completeField: 'himss_emram_complete',
    name: 'HIMSS Maturity Model for the Electronic Medical Record (EMRAM)',
    shortName: 'HIMSS EMRAM',
    description: 'The HIMSS Maturity Model for Electronic Medical Record is a model for the identification of various stages of maturity in the area of Electronic Medical Record (EMR) of hospitals. In these times, understanding the performance of EMR in hospitals is a challenge in the health care context. The HIMSS Analytics (Healthcare Information and Management Systems Society) developed an adoption model to identify the stages of maturity of the EMR from the limited ancillary department systems to paperless EMR environment. The model proposed by HIMSS Analytics is named EMR Adoption Model (EMRAM) and consists of 8 stages. According to HIMSS Analytics, the structure of this model ensures that a stage is reached only when all their applications are operational.',
    render: (dispatch: any, answers: UserAnswers) => <HIMSS_EMRAMForm dispatch={dispatch} answers={answers} />,
    questions: [
        {
            answerField: 'himss_emram_q1',
            text: 'Select the stage of EMR adoption which best represents the state of your organization:',
            options: [
                {
                    text: 'Some clinical automation may be present, but all three of the major ancillary department systems for laboratory, pharmacy, and radiology are not implemented.',
                    value: '0'
                },
                {
                    text: 'All three of the major ancillary clinical systems are installed (i.e., pharmacy, laboratory, radiology).',
                    value: '1'
                },
                {
                    text: 'Major ancillary clinical systems feed data to a clinical data repository (CDR) that provides physician access for retrieving and reviewing results. The CDR contains a controlled medical vocabulary, and the clinical decision support/rules engine for rudimentary conflict checking. Information from document imaging systems may be linked to the CDR at this stage.',
                    value: '2'
                },
                {
                    text: 'Clinical documentation (e.g. vital signs, flow sheets) is required; nursing notes,care plan charting, and/or the electronic medication administration record (eMAR) system are scored with extra points, and are implemented and integrated with the CDR for at least one service in the hospital. The first level of clinical decision support is implemented to conduct error checking with order entry (i.e., drug/drug, drug/food, drug/lab conflict checking normally found in the pharmacy). Some level of medical image access from picture archive and communication systems (PACS) is available for access by physicians via the organizations intranet or other secure networks outside of the radiology department confines.',
                    value: '3'
                },
                {
                    text: 'Computerized Practitioner/Physician Order Entry (CPOE) for use by any clinician is added to the nursing and CDR environment along with the second level of clinical decision support capabilities related to evidence based medicine protocols. If one patient service area has implemented CPOE and completed the previous stages, then this stage has been achieved.',
                    value: '4'
                },
                {
                    text: 'The closed loop medication administration environment is fully implemented in at least one patient care service area. The eMAR and bar coding or other auto-identification technology, such as radio frequency identification (RFID), are implemented and integrated with CPOE and pharmacy to maximize point of care patient safety processes for medication administration.',
                    value: '5'
                },
                {
                    text: 'Full physician documentation/charting (structured templates) is implemented for at least one patient care service area. Level three of clinical decision support provides guidance for all clinician activities related to protocols and outcomes in the form of variance and compliance alerts. A full complement of radiology PACS systems provides medical images to physicians via an intranet and displaces all film-based images.',
                    value: '6'
                },
                {
                    text: 'The hospital has a paperless EMR environment. Clinical information can be readily shared via electronic transactions or exchange of electronic records with all entities within a regional health network (i.e., other hospitals, ambulatory clinics, subacute environments, employers, payers and patients). This stage allows the HCO to support the true electronic health record as envisioned in the ideal model.',
                    value: '7'
                }
            ]
        }
    ],
}