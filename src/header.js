import { useState } from 'react';
import './css/style.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const style1 = {
    position: 'absolute',
    top: '120%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40rem',
    background: 'var(--white)',
    boxShadow: 'var(--box-shadow)',
    padding: '2rem',
    textAlign: 'center',
    animation: 'fadeIn .2s linear',
    display: 'none',
  };
  

function Header(){

    const [act,setAct]=useState('');

    function formaction(){
        setAct('');
        console.log("act",act);
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



    return(
        <div>
            <header className="header">
    <a href="#" className="logo">
      ShubhAdi<span>BuildCon</span>
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
      <div id="login-btn" className="fas fa-user" onClick={formaction}><Button onClick={handleOpen}></Button></div>
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
   

    {/* <form action={act} className="login-form">
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
    </form> */}

    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="login-form active"
      >
        <Box sx={style1}>
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
        </Box>
      </Modal>
   
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