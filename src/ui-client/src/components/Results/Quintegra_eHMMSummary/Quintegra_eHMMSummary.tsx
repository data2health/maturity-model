import React from 'react'
import { UserState } from '../../../model/UserState';
import { Quintegra_eHMM } from '../../../model/Models/Quintegra_eHMM';
import './Quintegra_eHMMSummary.css';
import { Collapse, Button, CardBody, Card, Dropdown, DropdownToggle, ButtonToggle, ButtonDropdown} from 'reactstrap'; 

interface Props {
    user: UserState;
}

interface State {
    show: boolean;
}

export default class Quintegra_eHMMSummary extends React.PureComponent<Props,State> {
    private className = 'riosm-summary';
    state = { show: false }

    public render() {
        const c = this.className;
        const { answers, results } = this.props.user;
        const { show } = this.state;

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

                {/* MY STUFF */}
                {/* Breakdown */}
                <div className={`${c}-breakdown`}>
                    {Quintegra_eHMM.questions.map(q => {
                        const a = answers[q.answerField];
                        return (
                            <div className={`${c}-breakdown-container`} key={q.answerField}>
                                <Button color="info" onClick={this.toggle}>
                                    <div>Info</div>
                                </Button>
                                
                                {/* check this out https://reactstrap.github.io/components/layout/ */}

                                <Collapse isOpen={show}>
                                    <CardBody>
                                        <div className={`${c}-breakdown-top`}>
                                            {/* Question */}
                                            <div className={`${c}-breakdown-question`}>
                                                {q.text}
                                            </div>

                                            {/* Score */}
                                            <div className={`${c}-breakdown-score`}>
                                                <div className='num'>{a}</div> 
                                                <div className='denom'>/ {q.options.length}</div>
                                            </div>
                                        </div>

                                        {/* Options */}
                                        {q.options.map((o,i) => {
                                            return (
                                                <div key={i} className={`${c}-breakdown-option ${o.value === a ? 'selected' : ''}`}>
                                                    {o.text}
                                                </div>
                                            );
                                        })}
                                    </CardBody>
                                </Collapse>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }

    private getValueDifference = (user: number, all: number): JSX.Element | null => {
        const c = this.className;

        if (user >= all) {
            return <span className={`${c}-composite-score-diff over`}>+{(user-all).toFixed(2)}</span>
        } else if (all > user) {
            return <span className={`${c}-composite-score-diff under`}>-{(all-user).toFixed(2)}</span>
        }
        return null;
    }

    private toggle = () => {
        this.setState( prevState => ({
            show: !prevState.show
        }))
    }

}