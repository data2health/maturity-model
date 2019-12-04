import React from 'react';
import { ModelQuestionOption } from '../../../model/ModelsState';
import './ModelOption.css';

interface Props {
    data: ModelQuestionOption;
    onClick: (value: any) => any;
    selected: boolean;
}

export default class ModelOption extends React.PureComponent<Props> {
    private className = 'model-option';

    public render() {
        const c = this.className;
        const classes = [ c ];
        const { data, selected } = this.props;

        if (selected) {
            classes.push('selected');
        }

        return (
            <div className={classes.join(' ')} onClick={this.handleClick}>
                <div className={`${c}-value`}>{data.value}</div>
                <div className={`${c}-text`}>{data.text}</div>
            </div>
        );
    }

    private handleClick = () => {
        const { data, onClick } = this.props;
        onClick(data.value);
    }
}