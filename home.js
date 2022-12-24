import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Up Start Finance</title>
        <meta property="og:title" content="Up Start Finance" />
      </Helmet>
      <div className="navbar-container">
        <div className="max-width">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/group%202.svg"
              className="home-image"
            />
            <span className="brandName"> S.E.E.M.A.</span>
          </div>
          <div className="home-links">
            <span className="home-text01 navbarLink">How it works</span>
            <span className="home-text02 navbarLink">Features</span>
            <span className="home-text03 navbarLink">Pricing</span>
            <button className="button button-primary">Get started</button>
          </div>
          <div className="home-burger-menu navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="hero-container section-container">
        <div className="home-max-width1 max-width">
          <div className="home-content">
            <span className="home-subtitle beforeHeading">
              solar Energy Equity MANAGEMENT APPLICATION
            </span>
            <h1 className="home-title">Go Solar With Us !! </h1>
            <span className="home-description">
              <span>
                Seeema aims to track , regulate  and ensure equitable
                distribution of generated renewable electricity.
              </span>
              <br></br>
              <span>
                India is densely populated country with major electricity
                consumers associated with apartments , slums and agriculture.
                Due to unavability of open lands for solar installation only a
                few people reaps the benifits. 
              </span>
              <br></br>
            </span>
            <div className="home-container1">
              <button className="button button-gradient">Get started</button>
              <button className="button button-transparent">Log in</button>
            </div>
          </div>
          <div className="home-image1">
            <img
              alt="image"
              src="/playground_assets/download%20%5B1%5D-600h.jpg"
              className="home-hero-image"
            />
            <img
              alt="image"
              src="/playground_assets/group%2018-1200w.png"
              className="home-image2"
            />
          </div>
        </div>
      </div>
      <div className="section-container">
        <div className="home-max-width2 max-width">
          <div className="home-image3">
            <img
              alt="image"
              src="/playground_assets/group%2020-1200w.png"
              className="home-hero-image1"
            />
          </div>
          <div className="home-content1">
            <span className="home-text08 beforeHeading">how it works</span>
            <h1 className="home-text09">Direct Contact Electricity..</h1>
            <span className="home-text10">
              <span>
                SEEMA takes electricity generation and consumption data from the
                nodes on blockchain which have solar panel installed to fulfill
                the requirement of the recever/buyer.
              </span>
              <br></br>
              <br></br>
              <span>
                Particularly blockchain is used to form a decentralized ,
                transparent and peer to peer power tracking network.
              </span>
              <br></br>
            </span>
            <div className="home-container2">
              <button className="button-secondary button bg-transparent">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1 section-container">
        <div className="home-max-width3 max-width">
          <div className="home-content2">
            <span className="home-text16 beforeHeading">save money</span>
            <h1 className="home-text17">
              <span>Upstream  to </span>
              <br></br>
              <span>Downstream</span>
              <br></br>
            </h1>
            <span className="home-text22">
              <span>
                Our key feature is that the high production solar houses can
                sell there  auxillary energy to the reciever who need additional
                energy  whether they has solar panel installed or not.
              </span>
              <br></br>
              <br></br>
              <span>
                SEEMA is based on blockchain so there is no centralized
                authority so the energy transfer will occur peer to peer, meter
                box to meter box..
              </span>
            </span>
          </div>
          <div className="home-image4">
            <img
              alt="image"
              src="/playground_assets/nq5hieqfnng2tmwzj6fkud5bz4-1200w.jpg"
              className="home-hero-image2"
            />
          </div>
        </div>
      </div>
      <div className="home-section2 section-container">
        <div className="home-max-width4 max-width">
          <div className="home-banner">
            <span className="home-text27 beforeHeading">get started</span>
            <h1 className="home-text28">
              <span className="home-text29">
                1.) To put the solar panels of 1 KW the minimum space is
                required 10 sq.feet.
              </span>
              <br className="home-text30"></br>
              <span className="home-text31">
                2.)  1 KW solar panel give power supply for 8-10 hrs  
              </span>
              <span className="home-text32">3-4 bhk.</span>
              <br className="home-text33"></br>
              <span className="home-text34">
                3.) The cost of 1 KW solar system is 80 thousand rupees on grid.
              </span>
              <br className="home-text35"></br>
              <span className="home-text36">
                4.) The cost of 1 KW solar system is 1 lakh 5 thousand off grid.
              </span>
              <br></br>
            </h1>
            <div className="home-btns"></div>
          </div>
        </div>
        <div className="home-div">
          <DangerousHTML
            html={`<!DOCTYPE html>
<html>
    <head>
        <title>Unit Converter</title>
        <!-- for styling -->
        <style>
            span {
                color: Green;
            }
        </style>
    </head>
    <body>
        <!-- Title of your Converter -->
        <h2 style="color: Green;">Weight Converter</h2>
         
<p>Enter a value in the KWH field to convert :</p>
 
 
         
<p>
            <!-- label the input field -->
            <label>KWH</label>
            <!-- input tag for enter the data -->
            <!-- UnitConvert function call
 function kiloweightConvert to evaluate value-->
            <input id="KWH"
                   type="number"
                   placeholder="kWH"
                   oninput="KWHConvert(this.value)"
                   onchange="KWHConvert(this.value)" />
        </p>
 
        <!-- output field-->
         
<p>Rupees: <span id="Rupees"></span></p>
 
         

 
 
        <script>
     //function that evaluates the weight and return result
            function KWHConvert(value) {
                document.getElementById("Rupees").innerHTML =
                  value * 6;
               
            }
        </script>
    </body>
</html>`}
          ></DangerousHTML>
        </div>
      </div>
    </div>
  )
}

export default Home
