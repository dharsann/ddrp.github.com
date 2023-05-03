import React from 'react'
import '../styles/About.css'

function About() {
  return (
    <section id="about">
        <h2>About Us</h2>
            <div class="third margin-bottom">
              <div class="card-4">
                <div class="container">
                  <h3>R.Anantharaman</h3>
                  <p class="opacity">Proprietor</p>
                </div>
              </div>
            </div>
        
            <div class="third margin-bottom">
              <div class="card-4">
                <div class="container">
                  <h3>K.Sridevi</h3>
                  <p class="opacity">General manager</p>
                </div>
              </div>
            </div>

            <div class="description">
              <p>
                We own a rubber manufacturing facility where we manufacture almost all kinds of rubber
                components to satisfy the needs of customers.These components range from textile spares to 
                automotive rubber parts.Our facility was established in 2013.
              </p>
            </div>
      </section>
  )
}

export default About