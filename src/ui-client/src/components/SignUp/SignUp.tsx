import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { FiChevronRight } from 'react-icons/fi';
import { attemptSignUp } from '../../actions/login';
import { NewUserFormState } from '../../model/LoginState';
import './SignUp.css';

interface Props {
    dispatch: any;
}

interface State {
    newUserForm: NewUserFormState;
}

export default class SignUp extends React.PureComponent<Props, State> {
    private className = 'signup';

    constructor(props: Props) {
        super(props);
        this.state = {
            newUserForm: {
                emailAddress: '',
                entryCode: '',
                firstName: '',
                institutionName: '',
                lastName: ''
            }
        };
    };

    public render() {
        const c = this.className;
        const { newUserForm } = this.state;
        const inputClassName = 'leaf-input';

        return (
            <Form className={c}> 
                <FormGroup className={`${c}-form-group`}>

                    {/* Email */}
                    <Label for="emailAddress">Email Address <span style={{color: 'red'}}>*</span></Label>
                    <Input
                        autoFocus={true}
                        className={inputClassName}
                        name="emailAddress"
                        id={`${c}-email`}
                        onChange={this.handleChange}
                        // onKeyPress={this.handleKeypress}
                        type="email"
                        value={newUserForm.emailAddress}
                    />

                    {/* Institution Name */}
                    <Label for="institutionName">Institution Name <span style={{color: 'red'}}>*</span></Label>
                    <Input
                        className={inputClassName}
                        name="institutionName"
                        id={`${c}-institution`}
                        onChange={this.handleChange}
                        // onKeyPress={this.handleKeypress}
                        type="text"
                        value={newUserForm.institutionName}
                    />

                    {/* Entry code */}
                    <Label for="entryCode">Entry Code <span style={{color: 'red'}}>*</span></Label>
                    <Input
                        autoComplete="off"
                        className={inputClassName}
                        name="entryCode"
                        id={`${c}-entry-code`}
                        onChange={this.handleChange}
                        // onKeyPress={this.handleKeypress}
                        type="text"
                        value={newUserForm.entryCode}
                    />

                    {/* First Name */}
                    <Label for="firstName">First Name</Label>
                    <Input
                        className={inputClassName}
                        name="firstName"
                        id={`${c}-first-name`}
                        onChange={this.handleChange}
                        // onKeyPress={this.handleKeypress}
                        type="text"
                        value={newUserForm.firstName}
                    />

                    {/* Last Name */}
                    <Label for="lastName">Last Name</Label>
                    <Input
                        className={inputClassName}
                        name="lastName"
                        id={`${c}-last-name`}
                        onChange={this.handleChange}
                        // onKeyPress={this.handleKeypress}
                        type="text"
                        value={newUserForm.lastName}
                    />

                </FormGroup>

                {/* Sign Up Button */}
                <div className={`${c}-button`} onClick={this.handleSignUpClick}>
                    Sign Up
                    <FiChevronRight className="icon chevron" />
                    {/* CSS for icon in Login.css container */}
                </div>

            </Form>
        );
    };

    private handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const { newUserForm } = this.state;
        const key = e.currentTarget.name;
        const val = e.currentTarget.value;
        const updatedUserForm = Object.assign({}, newUserForm, { [ key ]: val });
        this.setState({ newUserForm: updatedUserForm });
    };

    // private handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault();
    //         this.handleSignUpClick();
    //     }
    // };

    private handleSignUpClick = () => {
        const { dispatch } = this.props;
        const { newUserForm } = this.state;

        // TODO:
        //  1. check for email validation
        //  2. add enter key press
        //  3. delay after sign up so login doesn't fail
        // const isValidEmail = 

        if (newUserForm.emailAddress && newUserForm.entryCode && newUserForm.institutionName) {
            dispatch(attemptSignUp(newUserForm));
        };
    };
};