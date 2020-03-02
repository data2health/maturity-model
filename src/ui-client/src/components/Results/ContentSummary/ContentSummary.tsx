import React from 'react';
import { BaseModel } from '../../../model/ModelsState';
import { UserState } from '../../../model/UserState';
import { RIOSM } from '../../../model/Models/RIOSM';
import ModelSummary from '../ModelSummary/ModelSummary';
import './ContentSummary.css';

interface Props {
    user: UserState;
    models: BaseModel[];
    model: string;
}

export default class ContentSummary extends React.PureComponent<Props> {

    public render() {
        const { user, models, model } = this.props;

        if (model === 'RIOSM') {
            return this.getRIOSMSummary()
        };
        
        return (
            models.map((m) => {
                return m.shortName === model && <ModelSummary model={m} user={user} />
            })
        );
    };

    private getRIOSMSummary = () => {
        const c = 'riosm-summary';
        const { results } = this.props.user;        

        return (
            <div className={c}>

                {/* Scale */}
                <div className={`${c}-scale`}>
                    <div className={`${c}-scale-value`}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div className={`${c}-scale-key`}>
                        <div>Initial</div>
                        <div>Repeating</div>
                        <div>Defined</div>
                        <div>Managed</div>
                        <div>Optimizing</div>
                    </div>
                </div>

                {/* Composite Scores */}
                <div className={`${c}-composite`}>

                    {/* Overall */}
                    <div className={`${c}-composite-score`}>
                        Overall RIOSM Maturity Score: 
                        <span>
                            <strong>{results.user.riosm_categories.overall.toFixed(1)}</strong>
                            {this.getValueDifference(results.user.riosm_categories.overall, results.all.riosm_categories.overall)}
                        </span>
                    </div>

                    {/* Governance */}
                    <div className={`${c}-composite-score`}>
                        Informatics Governance: 
                        <span>
                            <strong>{results.user.riosm_categories.governance.toFixed(1)}</strong>
                            {this.getValueDifference(results.user.riosm_categories.governance, results.all.riosm_categories.governance)}
                        </span>
                    </div>

                    {/* Data and Software Sharing */}
                    <div className={`${c}-composite-score`}>
                        Data and Software Sharing: 
                        <span>
                            <strong>{results.user.riosm_categories.data_and_software_sharing.toFixed(1)}</strong>
                            {this.getValueDifference(results.user.riosm_categories.data_and_software_sharing, results.all.riosm_categories.data_and_software_sharing)}
                        </span>
                    </div>

                    {/* Research Informatics */}
                    <div className={`${c}-composite-score`}>
                        Research Informatics: 
                        <span>
                            <strong>{results.user.riosm_categories.research_informatics.toFixed(1)}</strong>
                            {this.getValueDifference(results.user.riosm_categories.research_informatics, results.all.riosm_categories.research_informatics)}
                        </span>
                    </div>

                </div>

                <ModelSummary model={RIOSM} user={this.props.user} />

            </div>
        );
    };

    private getValueDifference = (user: number, all: number): JSX.Element | null => {
        const c = 'riosm-summary';

        if (user >= all) {
            return <span className={`${c}-composite-score-diff over`}>+{(user-all).toFixed(2)}</span>
        } else if (all > user) {
            return <span className={`${c}-composite-score-diff under`}>-{(all-user).toFixed(2)}</span>
        };
        return null;
    };
}