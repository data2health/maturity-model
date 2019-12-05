import React from 'react';
import { connect } from 'react-redux';
import { AppState } from '../model/AppState';
import { Login } from './Login/Login';
import Main from './Main/Main';
import { UserState } from '../model/UserState';
import { ModelsState } from '../model/ModelsState';
import { LoginState } from '../model/LoginState';
import { GeneralState } from '../model/GeneralState';

interface OwnProps {
    
}
interface DispatchProps {
    dispatch: any;
}
interface StateProps {
    general: GeneralState;
    login: LoginState;
    models: ModelsState;
    user: UserState;
}

type Props = StateProps & DispatchProps & OwnProps;

class App extends React.PureComponent<Props> {

    public render() {
        const { dispatch, general, login, models, user } = this.props;

        /*
         * Show login if not logged in yet.
         */
        if (!login.loggedIn) {
            return <Login dispatch={dispatch} loginState={login} />;
        }
        /*
         * Else show the main screen.
         */
        return <Main dispatch={dispatch} general={general} login={login} models={models} user={user} />
    }
}

const mapStateToProps = (state: AppState) => {
    return {
        general: state.general,
        login: state.login,
        models: state.models,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch
    };
};

export default connect<StateProps, DispatchProps, OwnProps, AppState>
    (mapStateToProps, mapDispatchToProps)(App);
