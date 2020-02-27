import React from 'react'
import { UserState } from '../../../model/UserState';
import { Quintegra_eHMM } from '../../../model/Models/Quintegra_eHMM';
import { Button, CardBody, Container, Row, Col, UncontrolledCollapse} from 'reactstrap';
import './Quintegra_eHMMSummary.css';

interface Props {
    user: UserState;
}

export default class Quintegra_eHMMSummary extends React.PureComponent<Props> {
    private className = 'quintegra-ehmm-summary';

    public render() {
        const c = this.className;
        const { answers, results } = this.props.user;

        return (
            <div className={c}>
                {/* Breakdown */}
                <div className={`${c}-breakdown`}>
                    {Quintegra_eHMM.questions.map((q, i) => {
                        const a = answers[q.answerField];
                        return (
                            <div className={`${c}-breakdown-container`} key={q.answerField}>
                                <Container>
                                    <Row>
                                        <Col><div className={`${c}-breakdown-primary-top-q`}>Q{i+1}</div></Col>
                                        <Col><div className={`${c}-breakdown-primary-top`}><strong>Score</strong> {((Number(a)/q.options.length)*100).toFixed(1).toString() + '%'}</div></Col>
                                        <Col><div className={`${c}-breakdown-primary-top`}><strong>Average</strong> {results.all.quintegra_ehmm}</div></Col>
                                        <Col><div className={`${c}-breakdown-primary-top`}><strong>Minimum</strong> {1}</div></Col>
                                        <Col><div className={`${c}-breakdown-primary-top`}><strong>Maximum</strong> {5}</div></Col>
                                        <Col><div className={`${c}-breakdown-primary-top`}><strong>Median</strong> {3}</div></Col>
                                        
                                        <Col>
                                            <Button outline color="info" id={q.answerField}>
                                                <div>Info</div>
                                            </Button>
                                        </Col>
                                    </Row>
                                </Container>

                                <UncontrolledCollapse toggler={q.answerField}>
                                    <CardBody>
                                        <div className={`${c}-breakdown-secondary-top`}>
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
                                </UncontrolledCollapse>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}