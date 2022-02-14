import React from 'react'
import './Lastslide.scss'

const LastSlide = () => {
  return (
    <div className="LastSlide">
        <div className="container-fluid">
            <div className="row SmallHeading">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h2>Explore how the Galaxy Note9 <br/> transforms the way you do business.</h2>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6"><button className='LearnMore rounded-pill'>Learn More</button></div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 MainHeading">
                    <h1>Tablet mobility.<br/>PC power.</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12 LastP">
                    <p>The Galaxy Tab S4 gives you a stunningly brilliant screen, a PC experience in a tablet and more.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LastSlide