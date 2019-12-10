import React from 'react';
import { ModelsState } from '../../model/ModelsState';
import { FiHome, FiBarChart } from 'react-icons/fi';
import { setCurrentView } from '../../actions/general';
import { AppView } from '../../model/GeneralState';
import SidebarModelTab from '../../components/Sidebar/SidebarModelTab';
import { UserAnswers } from '../../model/User';
import './Sidebar.css';

interface Props {
    answers: UserAnswers;
    currentView: AppView;
    dispatch: any;
    models: ModelsState;
}

export default class Sidebar extends React.PureComponent<Props> {
    private className = 'sidebar';

    public render() {
        const c = this.className;
        const { currentView, dispatch, models, answers } = this.props;
        const selected = models.all.filter(m => m.selected);

        return (
            <div className={c}>

                {/* CD2H logo */}
                <a href="https://ctsa.ncats.nih.gov/cd2h/" target="_">
                    <div className={`${c}-cd2h-link`} />
                </a>
                <div className={`${c}-cd2h-logo-container`}>
                    <img alt="cd2h-logo" className={`${c}-cd2h-logo`} src={process.env.PUBLIC_URL + 'cd2h-logo.png'} />
                </div>

                {/* Home */}
                <div 
                    className={`${c}-option ${c}-option-home ${currentView === AppView.ModelSelection || currentView === AppView.Greeting ? 'selected' : ''}`} 
                    onClick={this.handleHomeTabClick}>
                    <FiHome />
                    Home
                </div>

                {/* Results */}
                <div 
                    className={`${c}-option ${c}-option-results ${currentView === AppView.Results ? 'selected' : ''}`} 
                    onClick={this.handleResultsTabClick}>
                    <FiBarChart />
                    Results
                </div>

                {/* Selected models */}
                <div className={`${c}-subtext`}>My Selected Models</div>
                {selected.map(m => (
                    <SidebarModelTab 
                        key={m.completeField} answers={answers} 
                        dispatch={dispatch} model={m} selected={models.current === m}
                    />)
                )}
            </div>
        );
    }

    private handleHomeTabClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.Greeting));
    }

    private handleResultsTabClick = () => {
        const { dispatch } = this.props;
        dispatch(setCurrentView(AppView.Results));
    }
}