import React from 'react';
import { ModelsState, BaseModel } from '../../model/ModelsState';
import { modelSetCurrent } from '../../actions/model';
import { FiHome, FiBarChart } from 'react-icons/fi';
import './Sidebar.css';

interface Props {
    dispatch: any;
    models: ModelsState;
}

export default class Sidebar extends React.PureComponent<Props> {
    private className = 'sidebar';

    public render() {
        const c = this.className;
        const { models } = this.props;
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
                <div className={`${c}-option ${c}-option-home`} onClick={this.handleHomeClick}>
                    <FiHome />
                    Home
                </div>

                {/* Results */}
                <div className={`${c}-option ${c}-option-results`} onClick={this.handleHomeClick}>
                    <FiBarChart />
                    Results
                </div>

                {/* Selected models */}
                <div className={`${c}-subtext`}>My Selected Models</div>
                {selected.map(m => {
                    return (
                        <div key={m.completeField} className={`${c}-option`} onClick={this.handleModelClick.bind(null, m)}>
                            {m.name}
                        </div>
                    );
                })}
            </div>
        );
    }

    private handleHomeClick = () => {
        const { dispatch } = this.props;
        dispatch(modelSetCurrent());
    }

    private handleModelClick = (model: BaseModel) => {
        const { dispatch } = this.props;
        dispatch(modelSetCurrent(model));
    }
}