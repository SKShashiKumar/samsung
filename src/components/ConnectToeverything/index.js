import React from 'react'
import ConnectCard from './ConnectCard'
import './ConnectToeverything.scss'

const ConnectToeverything = () => {
  return (
    <div className="connectToeverything">
        <div className="container-fluid">
            <div className="row connectToeverythingRow">
                <div className="col-12">
                    <h1>Connect to everything important to you</h1>
                </div>
            </div>
            <div className="row connectToeverythingRow">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <ConnectCard imgUrl={"images/Connect_Watch.jpg"} imgAlt={"Connect_Watch"} imgHeading={"An untethered watch for an untethered life."} imgDesc={"The new Galaxy Watch connects via Bluetooth and LTE, so you can text, call, and run your day while leaving your phone at home."}/>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <ConnectCard imgUrl={"images/WalletPay.jpg"} imgAlt={"Connect_Watch"} imgHeading={"Turn your phone into your wallet."} imgDesc={"Forgot your cash and cards at home? No problem—with Samsung Pay right on your phone, you're always ready to pick up the check."}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConnectToeverything