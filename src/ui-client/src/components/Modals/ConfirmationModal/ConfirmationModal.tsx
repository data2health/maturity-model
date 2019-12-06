import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { hideConfirmModal } from '../../../actions/general';
import { ConfirmationModalState } from '../../../model/GeneralState';

interface Props { 
    backdrop?: boolean;
    dispatch: any;
    state: ConfirmationModalState;
}

export default class ConfirmationModal extends React.PureComponent<Props> {
    public render() {
        const { state } = this.props;
        const buttonClasses = "maturity-model-button maturity-model-button";
        const noButtonText = state.noButtonText || 'No';
        const yesButtonText = state.yesButtonText || 'Yes';
        const backdrop = this.props.backdrop || true;
        const classes = [ 'maturity-model-modal', 'binary-selection-modal' ];

        return (
            <Modal isOpen={state.show} className={classes.join(' ')} backdrop={backdrop}>
                <ModalHeader>{state.header}</ModalHeader>
                <ModalBody>
                    {state.body}                    
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
        const { state, dispatch } = this.props;
        state.onClickNo();
        dispatch(hideConfirmModal());
    }

    private handleClickYes = () => {
        const { state, dispatch } = this.props;
        state.onClickYes();
        dispatch(hideConfirmModal());
    }
}