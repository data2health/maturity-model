import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { hideInfoModal } from '../../../actions/general';
import { InformationModalState } from '../../../model/GeneralState';

interface Props { 
    backdrop?: boolean;
    className?: string;
    dispatch: any;
    state: InformationModalState;
}

export default class InformationModal extends React.PureComponent<Props> {
    public render() {
        const { state } = this.props;
        const backdrop = this.props.backdrop || true;
        const classes = [ 'maturity-model-modal', 'information-modal', (this.props.className ? this.props.className : '') ];

        return (
            <Modal isOpen={state.show} className={classes.join(' ')} backdrop={backdrop}>
                <ModalHeader>{state.header}</ModalHeader>
                <ModalBody>
                    {state.body}                    
                </ModalBody>
                <ModalFooter>
                    <Button className="leaf-button leaf-button-primary" onClick={this.handleClickOkay}>Okay</Button>
                </ModalFooter>
            </Modal>
        );
    }

    private handleClickOkay = () => {
        const { dispatch, state } = this.props;
        if (state.onClickOkay) {
            state.onClickOkay();
        }
        dispatch(hideInfoModal());
    }
}