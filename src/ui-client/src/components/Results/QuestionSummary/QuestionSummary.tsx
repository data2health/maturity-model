import React from 'react'
import { AnswerStats, AnswerScores } from '../../../model/Score';
import { AnswerTypes, ModelQuestion } from '../../../model/ModelsState';
import { Col, Row, Collapse, Button, Container, CardBody } from 'reactstrap';
import './QuestionSummary.css';

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';    

interface Props {
    answer: AnswerTypes;
    question: ModelQuestion;
    index: number;
    results: AnswerStats;

    chartData: ChartDataPoint[];
}

interface State {
    show: boolean;
}

interface ChartDataPoint {
    institution: string;
    score: number;
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
        const { answer, question, index, results, chartData } = this.props;
        const questionLength = question.zeroIndex ? question.options.length-1 : question.options.length;

        return (
            <div className={`${c}-breakdown-container`} key={question.answerField}>
                <Container>
                    <Row>
                        <Col xs={10} className={`${c}-breakdown-primary-top`}><div className='question'>Q{index+1}</div></Col>
                        {/* <Col className={`${c}-breakdown-primary-top`}><div className='user-border'><strong>Your Score</strong></div><div className='user-border user-score'>{Number(answer).toFixed(1)}</div></Col> */}
                        
                        {/* <Col className={`${c}-breakdown-primary-top`}><div><strong>Mean</strong></div><div className='all'>{results.mean.toFixed(1)}</div></Col>
                        <Col className={`${c}-breakdown-primary-top`}><div><strong>Minimum</strong></div><div className='all'>{results.min.toFixed(1)}</div></Col>
                        <Col className={`${c}-breakdown-primary-top`}><div><strong>Maximum</strong></div><div className='all'>{results.max.toFixed(1)}</div></Col>
                        <Col className={`${c}-breakdown-primary-top`}><div><strong>Median</strong></div><div className='all'>{results.median.toFixed(1)}</div></Col> */}

                        <Col xs={2} className={`${c}-breakdown-primary-top`}>
                            <Button outline onClick={this.handleQuestionDisplay.bind(null)}>
                                <div>Details</div>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        {!this.state.show  &&
                            <Col><div className={`${c}-breakdown-primary-top-question-text`}>{question.text}</div></Col>
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
                                <div className='denom'>/ {questionLength}</div>
                            </div>
                        </div>

                        {/* Options */}
                        {/* {question.options.map((o,i) => {
                            return (
                                <div key={i} className={`${c}-breakdown-option ${o.value === answer ? 'selected' : ''}`}>
                                    {o.text}
                                </div>
                            )
                        })} */}

                        <div className={`${c}-breakdown-option`}>
                            <BarChart width={600} height={300} data={chartData} margin={{top: 20, right: 30, left: 20, bottom: 5}}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="institution" />
                                <YAxis type="number" domain={[0, questionLength+1]} />
                                <Tooltip />
                                <Legend />
                                <Bar name="Institution Score" dataKey="score" fill="#8884d8" legendType="none">
                                    {/* {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={(entry.score==Number(answer)) ? "#82ca9d" : "#8884d8"} />
                                    ))} */}
                                </Bar>
                            </BarChart>
                        </div>

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