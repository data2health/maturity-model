import React from 'react'

interface Props {}

export default class LeftFooter extends React.PureComponent<Props> {
    private className = 'login-footer';

    public render() {
        const c = this.className;

        return (
            <div className={c}>
                <p className={`${c}-shoutout`}>
                    <span>Developed with 
                        <span role="img" aria-label={'heart'}>❤️</span> 
                        in Seattle by UW Medicine Research IT and the CD2H
                    </span>
                </p>
            </div>
        );
    }
}