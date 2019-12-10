import React from 'react';
import { Navbar } from 'reactstrap';
import { FiUser } from 'react-icons/fi';
import './Header.css';

interface Props {
    username: string;
}

export default class Header extends React.PureComponent<Props> {
    private className = 'header';

    public render() {
        const c = this.className;
        const { username } = this.props;

        return (
            <Navbar id={c} className="d-flex justify-content-between mb-3">
                <div className={`${c}-content-side`}>
                </div>
                <div className={`${c}-content-side ${c}-content-side-right`}>
                    <div className={`${c}-email`}>
                        <FiUser />
                        {username}
                    </div>
                </div>
            </Navbar>
        );
    }
}