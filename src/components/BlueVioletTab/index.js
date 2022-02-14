import React from 'react'
import './BlueVioletTab.scss'

const BlueVioletTab = () => {
  return (
    <div className='BlueVioletTab'>
        <div className="container-fluid BlueVioletContainer">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 GalaxyHeading">
                    <h1>The new super powerful Galaxy Note9</h1>
                    <p>Meet the latest member of the Galaxy family.</p>
                    {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> */}
                            <button className='LearnMore rounded-pill'>Buy Now</button>
                        {/* </div> */}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <img src="images/SamsungViolet9.png" alt="SamsungViolet9" className='SamsungViolet9'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlueVioletTab