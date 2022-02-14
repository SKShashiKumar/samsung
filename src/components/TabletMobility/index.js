import React from 'react'
import './TabletMobility.scss'

const TabletMobilityTab = () => {
  return (
    <div className='TabletMobilityTab'>
        <div className="container-fluid TabletMobilityContainer">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 GalaxyHeading">
                    <h1>Tablet mobility.<br/>PC power.</h1>
                    <p>Meet the latest member of the Galaxy family.</p>
                    {/* <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"> */}
                            <button className='LearnMore rounded-pill'>Buy Now</button>
                        {/* </div> */}
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                  <img src="images/TabletMain.png" alt="SamsungViolet9" className='SamsungViolet9'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TabletMobilityTab