import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ModelSelection from '../../components/ModelSelection/ModelSelection';
import { ModelsState } from '../../model/ModelsState';
import { LoginState } from '../../model/LoginState';
import { UserState } from '../../model/UserState';
import { GeneralState, AppView } from '../../model/GeneralState';
import Results from '../Results/Results';
import ConfirmationModal from '../../components/Modals/ConfirmationModal/ConfirmationModal';
import InformationModal from '../../components/Modals/InformationModal/InformationModal';
import NoClickModal from '../../components/Modals/NoClickModal/NoClickModal';
import Snackbar from '../../components/Modals/Snackbar/Snackbar';
import Greeting from '../../components/Greeting/Greeting';
import './Main.css';

interface Props {
    dispatch: any;
    general: GeneralState;
    login: LoginState;
    models: ModelsState;
    user: UserState;
}

interface State {
    show: boolean;
}

export default class Main extends React.PureComponent<Props,State> {
    private className = 'main';

    public constructor(props: Props) {
        super(props);
        this.state = {
            show: false
        }
    }

    public componentDidMount() {
        setTimeout(() => this.setState({ show: true }), 50);
    }

    public render() {
        const c = this.className;
        const classes = [ c ];
        const { dispatch, models, login, general, user } = this.props;
        const { show } = this.state;

        if (!show) {
            classes.push('hidden');
        }

        return (
            <div className={classes.join(' ')}>
                <Sidebar dispatch={dispatch} answers={user.answers} models={models} currentView={general.currentView} />
                <Header username={login.emailAddress} />
                <ConfirmationModal dispatch={dispatch} state={general.confirmationModal} />
                <InformationModal dispatch={dispatch} state={general.informationModal} />
                <NoClickModal dispatch={dispatch} state={general.noclickModal} />
                <Snackbar dispatch={dispatch} state={general.snackbar} />
                <div className={`${c}-inner`}>
                    {this.getCurrentContent()}
                </div>
            </div>
        );
    }

    public getCurrentContent = () => {
        const { dispatch, models, user, general } = this.props;

        switch (general.currentView) {
            case AppView.Greeting:
                return <Greeting dispatch={dispatch} models={models.all} user={user} />;
            case AppView.ModelSelection:
                return <ModelSelection dispatch={dispatch} models={models.all} user={user} />;
            case AppView.ModelSurvey:
                if (!models.current) { break; }
                return models.current.render(dispatch, user.answers);
            case AppView.Results:
                return <Results dispatch={dispatch} models={models.all} user={user} />;
        }
        return null;
    }
}