import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { SnackbarState, NotificationStates } from '../../../model/GeneralState';
import { setSnackbarState } from '../../../actions/general';
import LoaderIcon from '../../Other/LoaderIcon/LoaderIcon';
import './Snackbar.css';

interface Props {
    dispatch: any;
    state: SnackbarState;
}

export default class Snackbar extends React.PureComponent<Props> {
    private className = 'snackbar';
    private hideTimeoutOnCompleteMs = 2500;
    
    public componentDidUpdate(prevProps: Props) {
        const currState = this.props.state;
        const { dispatch } = this.props;

        if (currState.state === NotificationStates.Complete) {
            const newState: SnackbarState = {
                ...currState,
                state: NotificationStates.Hidden
            }

            // Auto-hide after timeout
            setTimeout(() => dispatch(setSnackbarState(newState)), this.hideTimeoutOnCompleteMs);
        }
    }

    public render() {
        const { state } = this.props;
        const c = this.className;
        const classes = [ c ];

        if (state.state !== NotificationStates.Hidden) { 
            classes.push('show');
        }

        return (
            <div className={classes.join(' ')}>
                <div className={`${c}-container`}>
                    <div className={`${c}-icon-container`}>
                        {state.state === NotificationStates.Working && 
                        <LoaderIcon size={25} />
                        }
                        {state.state === NotificationStates.Complete && 
                        <FiCheckCircle />
                        }
                    </div>
                    <div className={`${c}-text-container`}>
                        <div className={`${c}-text ${c}-text-${NotificationStates[state.state].toLowerCase()}`}>
                            {state.message}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}