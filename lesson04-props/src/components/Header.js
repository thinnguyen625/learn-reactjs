import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-inverse">
                    <a className="navbar-brand" href="https://reactjs.org/docs/create-a-new-react-app.html">Title</a>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="https://reactjs.org/docs/create-a-new-react-app.html">Home</a>
                        </li>
                        <li>
                            <a href="https://reactjs.org/docs/create-a-new-react-app.html">Link</a>
                        </li>
                    </ul>
                </nav>
                
            </div>
        );
    }
}

export default Header;