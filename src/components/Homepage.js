import React from 'react';
import heroImage from '../../backgrounds/hero-image-final.jpg';
import drill from '../../backgrounds/driller.svg'
import hammer from '../../backgrounds/hammer.svg'
import lightbulb from '../../backgrounds/light-bulb.svg'
import broom from '../../backgrounds/broom.svg'
import sprout from '../../backgrounds/sprout.svg'
import art from '../../backgrounds/art.svg'

const Homepage = React.createClass({

  render: function() {

    return (
      <div>
        <div className="container-fluid">

          <div className="row">
            <div className="hero-image" style={{
              backgroundImage: `url(${heroImage})`,
              backgroundColor: 'rgba(0,0,0,0.5)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover'
            }}>

            <div className="overlay">

                <div className="container">

                  <div className="text-center home-header">
                    <h1 className="hero-text">Find your home improvement expert</h1>
                  </div>

                  <div className="text-center">
                    <h2 className="hero-text">Friendly, knowledgeable professionals straight to your home.</h2>
                    <h2 className="hero-text">Select a service and we do the rest.</h2>
                  </div>

                  <div className="text-center btn-holder">
                    <a href="/#/sign-up" className="image-button">
                      <button type="button" className="btn start">
                        <div className="button-text">
                          <span className="glyphicon glyphicon-home"></span> Start Home Improvements
                        </div>
                      </button>
                    </a>
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="row">
            <div className="container highlight-section">
              <div className="first-content-area text-center">

                <h2 className="sec2-title">Homeside helps you with home improvements, alterations, and more.</h2>

                  <div className="all-the-circles">

                    <div className="circle-container">
                      <div className="circle">
                        <div className="image-holder">
                          <img src={broom} />
                        </div>
                      </div>

                      <div className="circ-title">Cleaning</div>
                      <div className="circ-text">Get your house spotlessly cleaned, <br />even while your out.</div>
                    </div>

                    <div className="circle-container">
                      <div className="circle">
                        <div className="image-holder">
                          <img src={art} />
                        </div>
                      </div>

                      <div className="circ-title">Painting</div>
                      <div className="circ-text">Need new coat or a new color? <br />Try our painting experts!</div>
                    </div>

                    <div className="circle-container">
                      <div className="circle">
                        <div className="image-holder">
                          <img src={sprout} />
                        </div>
                      </div>

                      <div className="circ-title">Gardening</div>
                      <div className="circ-text">We can help with planting your <br />new seasonal flowers.</div>
                    </div>

                    <div className="circle-container c2">
                      <div className="circle">
                        <div className="image-holder">
                          <img src={lightbulb} />
                        </div>
                      </div>

                      <div className="circ-title">Electrical</div>
                      <div className="circ-text">Have a qualified electrician work <br /> on fixing your electrical issues.</div>
                    </div>

                    <div className="circle-container c2">
                      <div className="circle">
                        <div className="image-holder">
                          <img src={hammer} />
                        </div>
                      </div>

                      <div className="circ-title">Carpentry</div>
                      <div className="circ-text">Make additions and alterations to <br /> your home from experienced carpenters</div>
                    </div>

                    <div className="circle-container c2">
                      <div className="circle">
                        <div className="image-holder">
                          <img src={drill} />
                        </div>
                      </div>

                      <div className="circ-title">Roofing</div>
                      <div className="circ-text">From minor repairs to complete roof <br /> overhauls, we've got you covered.</div>
                    </div>

                  </div>

              </div>

            </div>
          </div>

          <footer className="footer">
          <div className="container f-container">
              <div className="f-item"><a href="#">Legal Stuff</a></div>
              <div className="f-item"><a href="#">Privacy Things</a></div>
              <div className="f-item"><a href="#">Ask Questions</a></div>
              <div className="f-item"><a href="#">"Try" to Contact Us</a></div>
          </div>
        </footer>

        </div>

      </div>
    )
  }
});

module.exports = Homepage;
