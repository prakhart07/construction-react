import { useState } from 'react';
import './css/style.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import Login from './login';


function Header(){

    const [act,setAct]=useState('');
    const [open, setOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
    
    return(
        <div>
            <header className="header">
    <a href="#" className="logo">
      ShubhAdi<span>BuildCon</span>
    </a>
    <nav className="navbar">
      <a href="/#home">Home</a>
      <a href="#services">Services</a>
      <a href="/#projects">Projects</a>
      <a href="#pricing">Pricing</a>
      <a href="#blogs">Blogs</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </nav>
    <div className="icons">
      <div id="menu-btn" className="fas fa-bars" />
      <div id="info-btn" className="fas fa-info-circle" />
      <div id="search-btn" className="fas fa-search" />
      {/* <div id="login-btn" className="fas fa-user" onClick={formaction}><Button onClick={handleOpen}></Button></div> */}
      <div id="login-btn" className="fas fa-user open-modal-button" onClick={openModal}></div>
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
    {isModalOpen && <Login closeModal={closeModal} />}


   
   
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