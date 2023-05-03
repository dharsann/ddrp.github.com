import React,{useState} from 'react';
import Logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/navbar.css";

function Navbar() {
    const [openlinks,setopenlinks]=useState(false);
    const Togglenavbar=()=>{
        setopenlinks(!openlinks);
    };
    return (
    <div className='Navbar'>
        <div className='leftside' id={openlinks?"open":"close"}>
            <img src={Logo} alt="logo"/>
            <div className='hiddenlinks'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            </div>
        </div>
        <div className='rightside'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={Togglenavbar}>
                <ReorderIcon />
            </button>
        </div>            
    </div>
  );
}

export default Navbar; 
