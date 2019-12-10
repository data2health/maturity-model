import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { FiLock, FiChevronRight } from 'react-icons/fi';
import { LoginState, LoginServerCommunicationState } from '../../model/LoginState';
import { loginSetEntryCode, attemptLogin, loginSetEmail, loginAsGuest } from '../../actions/login';

interface Props {
    dispatch: any;
    loginState: LoginState;
}

interface State {
    emailValid: boolean;
    entryCodeValid: boolean;
}

export default class LoginBox extends React.PureComponent<Props,State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            emailValid: true,
            entryCodeValid: true
        }
    }

    public render() {
        const c = 'loginbox';
        const { loginState } = this.props;
        const { entryCodeValid, emailValid } = this.state;
        const classes = [ c, (loginState.serverCommunication === LoginServerCommunicationState.Failed ? 'invalid' : '') ];
        const buttonClasses = [ `${c}-button`, (loginState.serverCommunication === LoginServerCommunicationState.Calling ? 'calling' : '') ];
        const emailClasses = [ 'leaf-input' ];
        const entryCodeClasses = [ 'leaf-input' ];
        let entryCodePlaceholder = '';
        let emailPlaceholder = ''

        if (!emailValid) {
            emailClasses.push('error');
            emailPlaceholder = 'Enter Email Address';
        }

        if (!entryCodeValid) {
            entryCodeClasses.push('error');
            entryCodePlaceholder = 'Enter Survey Entry Code';
        }

        return (
            <Form className={classes.join(' ')}> 
                <FormGroup className={`${c}-form-group`}>

                    {/* Email */}
                    <Label for="email">Email Address</Label>
                    <Input
                        autoFocus={true}
                        className={emailClasses.join(' ')} 
                        name="email" 
                        id={`${c}-email`} 
                        onChange={this.handleEmailChange}
                        onKeyPress={this.handleKeypress}
                        placeholder={emailPlaceholder}
                        type="email" 
                        value={loginState.emailAddress} 
                    />

                    {/* Entry code */}
                    <Label for="entry-code">Entry Code</Label>
                    <Input 
                        autoComplete="off"
                        className={entryCodeClasses.join(' ')} 
                        name="entry-code" 
                        id={`${c}-entry-code`} 
                        onChange={this.handleEntryCodeChange}
                        onKeyPress={this.handleKeypress}
                        placeholder={entryCodePlaceholder}
                        type="text" 
                        value={loginState.entryCode} 
                    />
                    <FiLock className="lock" />
                </FormGroup>

                {/* Sign in */}
                <div className={buttonClasses.join(' ')} tabIndex={2} onClick={this.handleLoginButtonClick}>
                    {this.getSignInContent()}
                </div>

                {/* -or- */}
                <div className={`${c}-or`}>
                    <div className={`${c}-or-inner`}>or</div>
                </div>

                {/* Sign in as Guest */}
                <div className={`${c}-button ${c}-button-guest`} tabIndex={3} onClick={this.handleGuestLoginClick}>
                    Sign in as Guest
                    <FiChevronRight className="icon chevron" />
                </div>
            </Form>
        );
    }

    private handleLoginButtonClick = () => {
        const { dispatch, loginState } = this.props;
        const entryCodeValid = !!loginState.entryCode.length;
        const emailValid = !!loginState.emailAddress.length;

        if (loginState.serverCommunication === LoginServerCommunicationState.Calling) {
            return;
        }

        this.setState({ entryCodeValid, emailValid });
        if (entryCodeValid) {
            dispatch(attemptLogin(loginState.emailAddress, loginState.entryCode));
        }
    }

    private handleGuestLoginClick = () => {
        const { dispatch, loginState } = this.props;

        if (loginState.serverCommunication === LoginServerCommunicationState.Calling) {
            return;
        }

        this.setState({ entryCodeValid: true, emailValid: true });
        dispatch(loginAsGuest());
    }

    private getSignInContent = () => {
        const { loginState } = this.props;

        if (loginState.serverCommunication === LoginServerCommunicationState.Calling) { 
            return <span>Signing in...</span>; 
        }
        return ([
            <span key={1}>Sign in</span>, 
            <FiChevronRight key={2} className="icon chevron" />
        ]);
    }

    private handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            this.handleLoginButtonClick();
        }
    }

    private handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { dispatch } = this.props;

        if (!this.state.emailValid) {
            this.setState({ emailValid: true });
        }
        dispatch(loginSetEmail(e.currentTarget.value));
    }

    private handleEntryCodeChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { dispatch } = this.props;

        if (!this.state.entryCodeValid) {
            this.setState({ entryCodeValid: true });
        }
        dispatch(loginSetEntryCode(e.currentTarget.value));
    }
}