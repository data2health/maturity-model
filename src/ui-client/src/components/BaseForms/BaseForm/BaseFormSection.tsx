import React from 'react';

interface Props {
    header?: string | JSX.Element;
    headerLarge?: boolean;
    subheader?: string | JSX.Element | JSX.Element[];
    content: string | JSX.Element | JSX.Element[];
}

export default class BaseFormSection extends React.PureComponent<Props> {
    private className = 'form';

    public render() {
        const c = this.className;
        const { header, headerLarge, subheader, content } = this.props;

        return (
            <div className={`${c}-section`}>
                {header && <div className={`${c}-header ${headerLarge ? 'lg' : ''}`}>{header}</div>}
                {subheader && <div className={`${c}-subheader`}>{subheader}</div>}
                <div className={`${c}-content`}>{content}</div>
            </div>
        );
    }
}