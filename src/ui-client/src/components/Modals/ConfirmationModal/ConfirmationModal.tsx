import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { hideConfirmModal } from '../../../actions/general';
import { ConfirmationModalState } from '../../../model/GeneralState';

interface Props { 
    backdrop?: boolean;
    className?: string;
    dispatch: any;
    confirmationModal: ConfirmationModalState;
}

export default class ConfirmationModal extends React.PureComponent<Props> {
    public render() {
        const { confirmationModal } = this.props;
        const buttonClasses = "maturity-model-button maturity-model-button";
        const noButtonText = confirmationModal.noButtonText || 'No';
        const yesButtonText = confirmationModal.yesButtonText || 'Yes';
        const backdrop = this.props.backdrop || true;
        const classes = [ 'maturity-model-modal', 'binary-selection-modal' ];

        return (
            <Modal isOpen={confirmationModal.show} className={classes.join(' ')} backdrop={backdrop}>
                <ModalHeader>{confirmationModal.header}</ModalHeader>
                <ModalBody>
                    {confirmationModal.body}                    
                </ModalBody>
                <ModalFooter>
                    <Button className={`${buttonClasses}-secondary mr-auto`} onClick={this.handleClickCancel}>Cancel</Button>
                    <Button className={`${buttonClasses}-secondary`} onClick={this.handleClickNo}>{noButtonText}</Button>
                    <Button className={`${buttonClasses}-primary`} onClick={this.handleClickYes}>{yesButtonText}</Button>
                </ModalFooter>
            </Modal>
        );
    }

    private handleClickCancel = () => {
        const { dispatch } = this.props;
        dispatch(hideConfirmModal());
    }

    private handleClickNo = () => {
        const { confirmationModal, dispatch } = this.props;
        confirmationModal.onClickNo();
        dispatch(hideConfirmModal());
    }

    private handleClickYes = () => {
        const { confirmationModal, dispatch } = this.props;
        confirmationModal.onClickYes();
        dispatch(hideConfirmModal());
    }
}