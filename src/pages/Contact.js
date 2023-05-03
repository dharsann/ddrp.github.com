import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftside' style={{backgroundImage:`url(${logo})`}}></div>
        <div className='rightside'>
        <h1>Contact Us</h1>
              <h2>
                Purushottaman Nagar,<br/>
                opp.road to Vadhapillayar Koil,<br/>
                Karamadai Road,<br/>
                Kovilpalayam,<br/>
                Coimbatore-641107.
              </h2>
            <h2>
              Email:  daeiouanantharaman@gmail.com
              <br/>
              <br/>
              (Alt)Email:  </h2>
            <h2>Phone: +91 7373786664
                <br/>
                <br/>
                (Alt)Phone: +91 9003591255
            </h2>
        </div>
    </div>
  )
}

export default Contact