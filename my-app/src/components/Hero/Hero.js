import React, { Component } from 'react';

class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <div className="container">
                    <h1>Don't ignore your dreams</h1>
                    <p><strong>The 5 regrets</strong> paint a portrait of post-industrial man, who shrinks himself into a shape that fits his circumstances, then turns dutifully till he stops.</p>
                    <a href="#" className="btn btn-green">See how it works</a>
                    <a href="#" className="btn btn-blue">Join us</a>
                </div>
            </div>
        );
    }
}

export default Hero;