import React from 'react'

const ConnectCard = ({imgUrl, imgAlt, imgHeading, imgDesc}) => {
  return (
    <div className="container-fluid text-center ConnectCard">
        <div className="row">
            <div className="col-12">
                <img src={imgUrl} alt={imgAlt} className={imgAlt}/>
            </div>
            <div className="row">
                <div className="col-12">
                    <h4>{imgHeading}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <p>{imgDesc}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ConnectCard