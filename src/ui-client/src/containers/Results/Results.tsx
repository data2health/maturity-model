import React from 'react'
import './Results.css';

interface Props {
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
        setTimeout(() => this.setState({ show: true }), 50);
    }

    public render() {
        const c = this.className;
        const classes = [ c ];
        const { show } = this.state;

        if (!show) {
            classes.push('hiddenz');
        }

        return (
            <div className={classes.join(' ')}>
            </div>
        );
    }
}