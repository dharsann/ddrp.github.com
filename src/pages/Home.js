import React from 'react'
import ImageSlider from '../components/ImageSlider';
import '../styles/Home.css'

function Home() {
  const slides = [
    { url: "http://localhost:3000/image1.jpg", title: "nozzle" },
    { url: "http://localhost:3000/image2.jpg", title: "bellow" },
    { url: "http://localhost:3000/image3.jpg", title: "gasket" },
    { url: "http://localhost:3000/image4.jpg", title: "bush" },
    { url: "http://localhost:3000/image5.jpg", title: "washer" },
    { url: "http://localhost:3000/image6.jpg", title: "ring" },
  ];
  const containerStyles = {
    width: "500px",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <div className='home'>
      <h1>Some of our products</h1>
      <h4>For more details of our components click the Products link above</h4>
      <div style={containerStyles}>
          <ImageSlider slides={slides} parentWidth={500}/>
      </div>
    </div>
  )
}

export default Home
