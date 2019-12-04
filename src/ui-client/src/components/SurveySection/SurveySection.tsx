import React from 'react';

interface Props {
    
}

export class SurveySection extends React.PureComponent<Props> {
    private className = 'survey-section'

    public render() {
        const c = this.className;
        
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}