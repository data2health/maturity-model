import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { hideInfoModal } from '../../../actions/general';
import { InformationModalState } from '../../../model/GeneralState';

interface Props { 
    backdrop?: boolean;
    className?: string;
    dispatch: any;
    informationModal: InformationModalState;
}

export default class InformationModal extends React.PureComponent<Props> {
    public render() {
        const { informationModal } = this.props;
        const backdrop = this.props.backdrop || true;
        const classes = [ 'maturity-model-modal', 'information-modal', (this.props.className ? this.props.className : '') ];

        return (
            <Modal isOpen={informationModal.show} className={classes.join(' ')} backdrop={backdrop}>
                <ModalHeader>{informationModal.header}</ModalHeader>
                <ModalBody>
                    {informationModal.body}                    
                </ModalBody>
                <ModalFooter>
                    <Button className="leaf-button leaf-button-primary" onClick={this.handleClickOkay}>Okay</Button>
                </ModalFooter>
            </Modal>
        );
    }

    private handleClickOkay = () => {
        const { dispatch, informationModal } = this.props;
        if (informationModal.onClickOkay) {
            informationModal.onClickOkay();
        }
        dispatch(hideInfoModal());
    }
}