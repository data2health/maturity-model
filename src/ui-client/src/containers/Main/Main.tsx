import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import ModelSelection from '../../components/ModelSelection/ModelSelection';
import { ModelsState } from '../../model/ModelsState';
import { LoginState } from '../../model/LoginState';
import { UserState } from '../../model/UserState';
import { GeneralState, AppView } from '../../model/GeneralState';
import Results from '../Results/Results';
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
        const { dispatch, models, login } = this.props;
        const { show } = this.state;

        if (!show) {
            classes.push('hidden');
        }

        return (
            <div className={classes.join(' ')}>
                <Sidebar dispatch={dispatch} models={models} />
                <Header username={login.emailAddress} />
                <div className={`${c}-inner`}>
                    {this.getCurrentContent()}
                </div>
            </div>
        );
    }

    public getCurrentContent = () => {
        const { dispatch, models, user, general } = this.props;

        if (general.currentView === AppView.ModelSelection) {
            return <ModelSelection dispatch={dispatch} models={models.all} user={user} />;
        }
        if (general.currentView === AppView.ModelSurvey && models.current) {
            return models.current.render(dispatch, user.answers);
        }
        if (general.currentView === AppView.Results) {
            return <Results />
        }
        return null;
    }
}