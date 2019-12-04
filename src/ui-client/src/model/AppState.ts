import { LoginState } from './LoginState'
import { ModelsState } from './ModelsState';
import { UserState } from './UserState';

export interface AppState {
    login: LoginState;
    models: ModelsState;
    user: UserState;
}