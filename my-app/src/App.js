import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
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
    <div className="hero">
      <div className="container">
        <h1>Don't ignore your dreams</h1>
        <p><strong>The 5 regrets</strong> paint a portrait of post-industrial man, who shrinks himself into a shape that fits his circumstances, then turns dutifully till he stops.</p>
        <a href="#" className="btn btn-green">See how it works</a>
        <a href="#" className="btn btn-blue">Join us</a>
      </div>
    </div>
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
  </div>

  );
}

export default App;
