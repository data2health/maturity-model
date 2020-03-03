import React from 'react'
import { AnswerStats } from '../../../model/Score';
import { AnswerTypes, ModelQuestion } from '../../../model/ModelsState';
import { Col, Row, Collapse, Button, Container, CardBody } from 'reactstrap';
import './QuestionSummary.css';

interface Props {
    answer: AnswerTypes;
    question: ModelQuestion;
    index: number;
    results: AnswerStats;
}

interface State {
    show: boolean;
}

export default class QuestionSummary extends React.PureComponent<Props, State> {
    private className = 'question-summary';

    constructor(props: Props) {
        super(props);
        this.state = {
            show: false
        };
    };

    public render() {

        const c = this.className;
        const { answer, question, index, results } = this.props;

        return (
            <div className={`${c}-breakdown-container`} key={question.answerField}>
                <Container>
                    <Row>
                        <Col className={`${c}-breakdown-primary-top`}><div className='question'>Q{index+1}</div></Col>
                        <Col className={`${c}-breakdown-primary-top`}><div className='user-border'><strong>Your Score</strong></div><div className='user-border user-score'>{((Number(answer)/question.options.length)*100).toFixed(1).toString() + '%'}</div></Col>
                        <Col className={`${c}-breakdown-primary-top`}><div><strong>Mean</strong></div><div className='all'>{(results.mean*100).toFixed(1).toString() + '%'}</div></Col>
                        <Col className={`${c}-breakdown-primary-top`}><div><strong>Minimum</strong></div><div className='all'>{(results.min*100).toFixed(1).toString() + '%'}</div></Col>
                        <Col className={`${c}-breakdown-primary-top`}><div><strong>Maximum</strong></div><div className='all'>{(results.max*100).toFixed(1).toString() + '%'}</div></Col>
                        <Col className={`${c}-breakdown-primary-top`}><div><strong>Median</strong></div><div className='all'>{(results.median*100).toFixed(1).toString() + '%'}</div></Col>

                        <Col className={`${c}-breakdown-primary-top`}>
                            <Button outline onClick={this.handleQuestionDisplay.bind(null)}>
                                <div>Details</div>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        {!this.state.show  &&
                            <Col><div className={`${c}-breakdown-primary-top-question-text`}>{question.text.toString().replace(':', '.')}</div></Col>
                        }
                    </Row>
                </Container>
                        
                <Collapse isOpen={this.state.show}>
                    <CardBody>
                        <div className={`${c}-breakdown-secondary-top`}>
                            {/* Question */}
                            <div className={`${c}-breakdown-question`}>
                                {question.text}
                            </div>

                            {/* Score */}
                            <div className={`${c}-breakdown-score`}>
                                <div className='num'>{answer}</div> 
                                <div className='denom'>/ {question.options.length}</div>
                            </div>
                        </div>

                        {/* Options */}
                        {question.options.map((o,i) => {
                            return (
                                <div key={i} className={`${c}-breakdown-option ${o.value === answer ? 'selected' : ''}`}>
                                    {o.text}
                                </div>
                            )
                        })}
                    </CardBody>
                </Collapse>
            </div>
        );
    };
    private handleQuestionDisplay = () => {
        this.setState( prevState => ({
            show: !prevState.show
        }));
    };
}