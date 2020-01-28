import React, { Component } from 'react';

class Middle extends Component {
    render() {
        return (
            <main className="middle">
                <div className="container">
                    <div className="blocks">
                    <div className="block">
                        <div className="image"><img src="/template/images/photo1.jpg" height={180} width={319} alt="" /></div>
                        <div className="person">
                        <div className="photo"><img src="/template/images/person1.jpg" height={50} width={50} alt="" /></div>
                        <div className="text">
                            <div className="phrase">You neglect your friends</div>
                            <div className="info">Valerie Adams. Moldova. 19.</div>
                        </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="image"><img src="/template/images/photo2.jpg" height={180} width={319} alt="" /></div>
                        <div className="person">
                        <div className="photo"><img src="/template/images/person2.jpg" height={50} width={50} alt="" /></div>
                        <div className="text">
                            <div className="phrase">You forget your dreams</div>
                            <div className="info">Robert. Italy. 38</div>
                        </div>
                        </div>
                    </div>
                    <div className="block">
                        <div className="image"><img src="/template/images/photo3.jpg" height={180} width={319} alt="" /></div>
                        <div className="person">
                        <div className="photo"><img src="/template/images/person3.jpg" height={50} width={50} alt="" /></div>
                        <div className="text">
                            <div className="phrase">You suppress your feelings</div>
                            <div className="info">Sergei. Italy. 38</div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="news">
                    <div className="one">
                        <div className="img"><a href="#"><img src="/template/images/news1.jpg" height={89} width={89} alt="" /></a></div>
                        <div className="text">
                        <time>Oct 18</time>
                        <p><a href="#">I would like to avoid making these mistakes.</a></p>
                        </div>
                    </div>
                    <div className="one">
                        <div className="img"><a href="#"><img src="/template/images/news2.jpg" height={89} width={89} alt="" /></a></div>
                        <div className="text">
                        <time>Oct 8</time>
                        <p><a href="#">But how do you avoid mistakes you make by default?</a></p>
                        </div>
                    </div>
                    <div className="one">
                        <div className="img"><a href="#"><img src="/template/images/news3.jpg" height={89} width={89} alt="" /></a></div>
                        <div className="text">
                        <time>Oct 2</time>
                        <p><a href="#">Ideally you transform your life so it has other defaults.</a></p>
                        </div>
                    </div>
                    </div>
                    <div className="featured">
                    <div className="title">Featured on:</div>
                    <ul>
                        <li><a href="#"><img src="/template/images/logo-new-texas-times.png" height={28} width={262} alt="" /></a></li>
                        <li><a href="#"><img src="/template/images/logo-wooden.png" height={29} width={147} alt="" /></a></li>
                        <li><a href="#"><img src="/template/images/logo-vremya.png" height={22} width={112} alt="" /></a></li>
                        <li><a href="#"><img src="/template/images/logo-open-book.png" height={29} width={217} alt="" /></a></li>
                        <li><a href="#"><img src="/template/images/logo-twitter.png" height={29} width={36} alt="" /></a></li>
                    </ul>
                    </div>
                </div>
            </main>
        );
    }
}

export default Middle;