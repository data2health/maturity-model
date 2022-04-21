
export enum LoginServerCommunicationState {
    Idle = 1,
    Calling = 2,
    Failed = 3
}

export interface LoginState {
    emailAddress: string;
    entryCode: string;
    loggedIn: boolean;
    newUser: boolean;
    serverCommunication: LoginServerCommunicationState;
}

export interface NewUserFormState {
    emailAddress: string;
    entryCode: string;
    firstName: string;
    institutionName: string;
    lastName: string;
}