import React from 'react'
import { UserState, AnswerScoreLoadState } from '../../model/UserState';
import { getScores } from '../../actions/user';
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import LoaderIcon from '../../components/Other/LoaderIcon/LoaderIcon';
import { Row, Col } from 'reactstrap';
import './Results.css';
import BaseForm from '../../components/BaseForms/BaseForm/BaseForm';

interface Props {
    dispatch: any;
    user: UserState;
}

interface State {
    show: boolean;
}

interface PolarDataPoint {
    all: number;
    max: number;
    model: string;
    user: number;
}

export default class Results extends React.PureComponent<Props,State> {
    private className = 'results';
    private blue = "rgb(28,168,221)";
    private orange = "rgb(255,132,8)";

    public constructor(props: Props) {
        super(props);
        this.state = {
            show: false
        }
    }

    public componentDidMount() {
        const { dispatch, user } = this.props;
        setTimeout(() => this.setState({ show: true }), 50);

        if (user.answersLoadState === AnswerScoreLoadState.NotLoaded) {
            dispatch(getScores());
        }
    }

    public render() {
        const c = this.className;
        const classes = [ c ];
        const { user } = this.props;
        const { show } = this.state;

        if (!show) {
            classes.push('hidden');
        }

        /*
         * Show a loading spinner if waiting for scores.
         */
        if (user.answersLoadState === AnswerScoreLoadState.Loading) {
            return (
                <BaseForm 
                    header=''
                    content={(
                        <div className={`${c} ${c}-loading`}>
                            <LoaderIcon size={100} />
                        </div>
                    )}
                />
            );
        }

        /*
         * Show error message if score loading failed
         */
        if (user.answersLoadState === AnswerScoreLoadState.Failed) {
            return (
                <BaseForm 
                    header=''
                    content={(
                        <div className={c}>
                            <div className={`${c}-error`}>
                                <p>
                                    Whoops! An error occurred while trying to load your scores. We are sorry for the inconvenience.
                                </p>
                            </div>
                        </div>
                    )}
                />
            );
        }

        return (
            <BaseForm 
                header={"Here's how your answers compare to other sites"}
                subheader={'All site data are anonymously aggregated'}
                content={(
                    <div className={c}>
                        <div className={`${c}-polar`}>
                            <RadarChart outerRadius={250} width={1000} height={600} data={this.getPolarData()}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="model" />
                                <PolarRadiusAxis angle={30} domain={[0, 1]} />
                                <Radar name={user.email} dataKey="user" stroke={this.orange} fill={this.orange} fillOpacity={0.6} />
                                <Radar name={`Average (n=${user.scores.n})`} dataKey="all" stroke={this.blue} fill={this.blue} fillOpacity={0.4} />
                                <Legend align={'left'} />
                            </RadarChart>
                        </div>
                    </div>
                )} 
            />
        )
    }

    private getPolarData = (): PolarDataPoint[] => {
        const { all, user } = this.props.user.scores;
        const data: PolarDataPoint[] = [];

        data.push({ model: 'RIOSM', all: all['riosm'], user: user['riosm'], max: 1.0 });
        data.push({ model: 'Quintegra eHmm', all: all['quintegra_ehmm'], user: user['quintegra_ehmm'], max: 1.0 });
        data.push({ model: 'IDC Healthcare IT', all: all['idc_healthcare_it'], user: user['idc_healthcare_it'], max: 1.0 });
        data.push({ model: 'HIMSS Electronic Medical Record', all: all['himss_emram'], user: user['himss_emram'], max: 1.0 });
        data.push({ model: 'HIMSS Continuity of Care', all: all['himss_ccmm'], user: user['himss_ccmm'], max: 1.0 });
        data.push({ model: 'NEHTA Interoperability', all: all['nehta_imm'], user: user['nehta_imm'], max: 1.0 });

        return data;
    }
}