import React from 'react'
import './BannerPage.scss'

const BannerPage = () => {
  return (
    <div className='BannerPage'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="container-fluid">
                        <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <h1 className='MainTitle'>Discover a world without limits</h1>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <p className='Description'>It doesn't take a genius to see why switching to the Galaxy S9 | S9+ is a good idea.</p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                            <button className='LearnMore rounded-pill'>Learn More</button>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                                        <img src="images/86.png" alt="SamsungBanner" className='SamsungBanner'/>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className="row BannerCardRow">
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 BannerCards">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 BannerCardHeading colorViolet">
                                <h1>Carved Frame</h1>
                            </div>
                            <div className="col-12 BannerCardDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</div>
                            <div className="col-12"><i className="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 BannerCards">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 BannerCardHeading colorPurple">
                                <h1>Curved Glass</h1>
                            </div>
                            <div className="col-12 BannerCardDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</div>
                            <div className="col-12"><i className="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 BannerCards">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 BannerCardHeading colorBlueViolet">
                                <h1>Water Tested</h1>
                            </div>
                            <div className="col-12 BannerCardDescription">Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</div>
                            <div className="col-12"><i className="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                    <h1 className='MainTitle'>Discover a world without limits</h1>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                    <img src="images/86.png" alt="SamsungBanner" className='SamsungBanner'/>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                    <p className='Description'>It doesn't take a genius to see why switching to the Galaxy S9 | S9+ is a good idea.</p>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-12 col-xl-12">
                    <button className='LearnMore rounded-pill'>Learn More</button>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default BannerPage