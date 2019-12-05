import React from 'react';
import './BaseForm.css';

interface Props {
    header: string | JSX.Element;
    headerLarge?: boolean;
    subheader?: string | JSX.Element;
    content: string | JSX.Element | JSX.Element[];
}

interface State {
    show: boolean;
}

export default class BaseForm extends React.PureComponent<Props,State> {
    private className = 'form';

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
        const { header, headerLarge, subheader, content } = this.props;
        const { show } = this.state;

        if (!show) {
            classes.push('hiddenz');
        }

        return (
            <div className={classes.join(' ')}>
                <div className={`${c}-inner`}>
                    <div className={`${c}-header ${headerLarge ? 'lg' : ''}`}>{header}</div>
                    <div className={`${c}-subheader`}>{subheader}</div>
                    <div className={`${c}-content`}>{content}</div>
                </div>
            </div>
        );
    }
}