import React from 'react';
import BaseForm from '../BaseForm/BaseForm';
import { FiChevronLeft } from 'react-icons/fi';
import './ModelTransitionForm.css';

interface Props {
    header: string | JSX.Element;
    headerLarge?: boolean;
    subheader?: string | JSX.Element;
    content: string | JSX.Element | JSX.Element[];
    cornerInfo?: string | JSX.Element;
    onGoBackClick?: () => any;
}

enum TransitionState {
    Idle = 1,
    MoveLeft = 2,
    MoveRight = 3,
    Blank = 4
}

interface State {
    outgoing: Props;
    transition: TransitionState;
}

export default class ModelTransitionForm extends React.PureComponent<Props,State> {
    private className = 'model-transition-form';
    private moveTimeDelayMs = 300;
    private blankTimeDelayMs = 300;
    private goBackClicked = false;

    public constructor(props: Props) {
        super(props);
        this.state = {
            outgoing: {
                header: '',
                subheader: undefined,
                content: ''
            },
            transition: TransitionState.Blank
        }
    }

    public componentDidMount() {
        setTimeout(() => this.setState({ transition: TransitionState.Idle }), 50);
    }

    public getSnapshotBeforeUpdate(prevProps: Props) {
        const { transition } = this.state;

        /*
         * If a new content update, slide the old to the left.
         */
        if (this.props.content !== prevProps.content) {
            const movement = this.goBackClicked ? TransitionState.MoveRight : TransitionState.MoveLeft;
            this.setState({ outgoing: prevProps, transition: movement });

        /*
         * If already moving, set to blank on a timer.
         */
        } else if (transition === TransitionState.MoveLeft || transition === TransitionState.MoveRight) {
            setTimeout(() => { this.setState({ transition: TransitionState.Blank }); this.goBackClicked = false; }, this.moveTimeDelayMs);

        /*
         * If blank, set to fade in on a timer.
         */
        } else if (transition === TransitionState.Blank) {
            setTimeout(() => this.setState({ transition: TransitionState.Idle }), this.blankTimeDelayMs);
        }

        return null;
    }

    public componentDidUpdate() { }

    public render() {
        const c = this.className;
        const { cornerInfo, onGoBackClick } = this.props;
        const { outgoing, transition } = this.state;
        const classes = [ c ];
        let showOutgoing = false;

        /* 
         * Set animations.
         */
        if      (transition === TransitionState.MoveLeft)  { classes.push('move-left');  showOutgoing = true; }
        else if (transition === TransitionState.MoveRight) { classes.push('move-right'); showOutgoing = true; }
        else if (transition === TransitionState.Blank)     { classes.push('blank'); }

        /*
         * Show outgoing content if in mid-animation.
         */
        if (showOutgoing) {
            return (
                <div className={classes.join(' ')}>
                    <div className={`${c}-inner`}>
                        <BaseForm {...outgoing} />
                    </div>
                    {outgoing.cornerInfo && <div className={`${c}-corner-info`}>{outgoing.cornerInfo}</div>}
                    {outgoing.onGoBackClick && <button className={'maturity-model-button secondary'}><FiChevronLeft />Go Back</button> }
                </div>
            );
        }

        /*
         * Else show the current form and questions.
         */
        return (
            <div className={classes.join(' ')}>
                <div className={`${c}-inner`}>
                    <BaseForm {...this.props} />
                </div>
                {cornerInfo && <div className={`${c}-corner-info`}>{cornerInfo}</div>}
                {onGoBackClick && <button className={'maturity-model-button secondary'} onClick={this.handleGoBackClick}><FiChevronLeft />Go Back</button> }
            </div>
        );
    }

    private handleGoBackClick = () => {
        const { onGoBackClick } = this.props;
        if (!onGoBackClick) return;

        this.goBackClicked = true;
        onGoBackClick();
    }
}