import React from 'react'
import { UserState, AnswerScoreLoadState } from '../../model/UserState';
import { getScores } from '../../actions/user';
import { Bar, BarChart, LabelList, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import LoaderIcon from '../../components/Other/LoaderIcon/LoaderIcon';
import { Row, Col } from 'reactstrap';
import './Results.css';

interface Props {
    dispatch: any;
    user: UserState;
}

interface State {
    show: boolean;
}

export default class Results extends React.PureComponent<Props,State> {
    private className = 'results';

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
                <div className={`${c} ${c}-loading`}>
                    <LoaderIcon size={100} />
                </div>
            );
        }

        /*
         * Show error message if score loading failed
         */
        if (user.answersLoadState === AnswerScoreLoadState.Failed) {
            return (
                <div className={`${c} ${c}-error`}>
                    <p>
                        Whoops! An error occurred while trying to load your scores. We are sorry for the inconvenience.
                    </p>
                </div>
            );
        }

        return (
            <div className={classes.join(' ')}>
                <Row>
                    <Col md={6}>

                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </div>
        );
    }
}