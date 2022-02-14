import React from 'react'
import './BlackSamsung.scss'

const BlackSamsung = () => {
  return (
    <div className='BlackSamsung'>
        <div className="container-fluid BlackSamsungContainer">
            <div className="row">
              
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <img src="images/BlackSamsung.png" alt="BlackSamsung" className='BlackSamsung'/>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 GalaxyHeading">
                    <h1>Galaxy Note9: See what else it can do.</h1>
                    <p>The Galaxy Note9 is packed with features to up your photo game and connect you more deeply with the things that are important to you.
                      See how it's redefining the smartphone.Meet the latest member of the Galaxy family.</p>
                    {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> */}
                            <button className='LearnMore rounded-pill'>Learn More</button>
                        {/* </div> */}
                </div>

            </div>
        </div>
    </div>
  )
}

export default BlackSamsung