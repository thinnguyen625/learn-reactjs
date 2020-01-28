import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="logo"><img src="/template/images/logo.png" height={25} width={81} alt="" /></div>
                    <div className="slogan">your nice slogan</div>
                    <nav>
                    <ul className="nav">
                        <li className="how-it-works"><a href="#">How it works</a></li>
                        <li className="sign-up"><a href="#">Sign up</a></li>
                        <li className="login"><a href="#">Login</a></li>
                    </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;

