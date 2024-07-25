import { useState } from 'react';
import './css/style.css';

function Header(){

    const [act,setAct]=useState('');

    function formaction(){
        setAct('login-form active');
        console.log("act",act);
    }

    return(
        <div>
            <header className="header">
    <a href="#" className="logo">
      We<span>Build</span>
    </a>
    <nav className="navbar">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#pricing">Pricing</a>
      <a href="#contact">Contact</a>
      <a href="#blogs">Blogs</a>
    </nav>
    <div className="icons">
      <div id="menu-btn" className="fas fa-bars" />
      <div id="info-btn" className="fas fa-info-circle" />
      <div id="search-btn" className="fas fa-search" />
      <div id="login-btn" className="fas fa-user" onClick={formaction}><button onClick={formaction} ></button></div>
    </div>
    <form action={act} className="search-form">
      <input
        type="search"
        name=""
        placeholder="search here..."
        id="search-box"
      />
      <label htmlFor="search-box" className="fas fa-search" />
    </form>
   
    <form action={act} className="login-form">
      <h3>login form</h3>
      <input type="email" placeholder="enter your email" className="box" />
      <input type="password" placeholder="enter your password" className="box"/>
      <div className="flex">
        <input type="checkbox" name="" id="remember-me" />
        <label htmlFor="remember-me">remember me</label>
        <a href="#">forgot password?</a>
      </div>
      <input type="submit" defaultValue="login now" className="btn" />
      <p>
        don't have an account <a href="#">create one!</a>
      </p>
    </form>
   
  </header>
  <div className="contact-info">
    <div id="close-contact-info" className="fas fa-times" />
    <div className="info">
      <i className="fas fa-phone" />
      <h3>phone number</h3>
      <p>+123-456-7890</p>
      <p>+111-222-3333</p>
    </div>
    <div className="info">
      <i className="fas fa-envelope" />
      <h3>email address</h3>
      <p>prakhart073@gmail.com</p>
      <p>prakhart073@gmail.com</p>
    </div>
    <div className="info">
      <i className="fas fa-map-marker-alt" />
      <h3>office address</h3>
      <p>indore, india - 452010</p>
    </div>
    <div className="share">
      <a href="#" className="fab fa-facebook-f" />
      <a href="#" className="fab fa-twitter" />
      <a href="#" className="fab fa-instagram" />
      <a href="#" className="fab fa-linkedin" />
    </div>
  </div>
  
        </div>
    )
};

export default Header;