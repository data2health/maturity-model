import React from 'react';

interface Props {}

export default class RightFooter extends React.PureComponent<Props> {
    private className = 'login-footer';

    public render() {
        const c = this.className;

        return (
            <div className={c}>
                <div className={`${c}-logo-outer-container`}>
                    <div className={`${c}-logo-container logo-uw`} style={{ width: 200 }}>
                        <img className={`${c}-logo`} src={process.env.PUBLIC_URL + '/uw.png'} style={{ objectFit: 'contain' }} />   
                    </div>
                    <div className={`${c}-logo-container logo-iths`} style={{ width: 300 }}>
                        <img className={`${c}-logo`} src={process.env.PUBLIC_URL + '/iths.png'} style={{ objectFit: 'contain' }} />   
                    </div>
                    <div className={`${c}-logo-container logo-cd2h`} style={{ width: 250, height: 250, marginTop: -100, marginLeft: -20 }}>
                        <img className={`${c}-logo`} src={process.env.PUBLIC_URL + '/cd2h.png'} style={{ objectFit: 'contain' }} />   
                    </div>
                </div>
            </div>
        );
    }
}