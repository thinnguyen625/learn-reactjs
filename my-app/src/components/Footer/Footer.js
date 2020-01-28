import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container">
                    <nav className="footer-nav">
                    <div className="column">
                        <div className="title">MAIN</div>
                        <ul>
                        <li><a href="#">Start Here</a></li>
                        <li><a href="#">Portfolio</a></li>
                        <li><a href="#">Meet Us</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="title">COMPANY</div>
                        <ul>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Help</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Jobs</a></li>
                        <li><a href="#">Directory</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="title">ONE MORE</div>
                        <ul>
                        <li><a href="#">Meetups</a></li>
                        <li><a href="#">Handbook</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Equipment</a></li>
                        </ul>
                    </div>
                    <div className="column">
                        <div className="title">THE LAST ONE</div>
                        <ul>
                        <li><a href="#">Meetups</a></li>
                        <li><a href="#">Handbook</a></li>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">API</a></li>
                        <li><a href="#">Equipment</a></li>
                        </ul>
                    </div>
                    </nav>
                    <ul className="soc">
                    <li><a className="soc-twitter" href="#" /></li>
                    <li><a className="soc-facebook" href="#" /></li>
                    <li><a className="soc-vimeo soc-icon-last" href="#" /></li>
                    </ul>
                    <div className="copyright">
                    <p>© 2013 be happy<br />
                        <a href="#">Privacy Policy</a> <a href="#">Terms of Service</a>
                    </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;