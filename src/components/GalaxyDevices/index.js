import React from 'react'
import GalaxyCards from './GalaxyCards'
import './GalaxyDevices.scss'

const GalaxyDevices = () => {
  return (
      <div className="GalaxyDevices">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h1 className='text-center ExploreHeading'>Explore other Galaxy devices.</h1>
            </div>
          </div>
          <div className="row justify-content-center text-center GalaxyCardsRow">
            <div className="col-xs-12 xol-sm-12 col-md-6 col-lg-3 col-xl-3">
              <GalaxyCards imgUrl={"images/5.jpg"} imgAlt={'Phones'} imgClassName={'Phones'} Headings={'Phones'}/>
            </div>
            <div className="col-xs-12 xol-sm-12 col-md-6 col-lg-3 col-xl-3">
              <GalaxyCards imgUrl={"images/6.jpg"} imgAlt={'Tablets'} imgClassName={'Tablets'} Headings={'Tablets'}/>
            </div>
            <div className="col-xs-12 xol-sm-12 col-md-6 col-lg-3 col-xl-3">
              <GalaxyCards imgUrl={"images/8.jpg"} imgAlt={'Wearables'} imgClassName={'Wearables'} Headings={'Wearables'}/>
            </div>
            <div className="col-xs-12 xol-sm-12 col-md-6 col-lg-3 col-xl-3">
              <GalaxyCards imgUrl={"images/7.jpg"} imgAlt={'VRs'} imgClassName={'VRs'} Headings={'VRs'}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GalaxyDevices