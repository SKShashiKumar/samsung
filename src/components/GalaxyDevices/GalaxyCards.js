import React from 'react'

const GalaxyCards = ({imgUrl,imgAlt,imgClassName,Headings}) => {
  return (
    <div className="container-fluid">
    <div className="row">
      <div className="col-12">
      <img src={imgUrl} alt={imgAlt} className={imgClassName} />
      </div>
    </div>
    <div className="row">
      <div className="col-12">
        <h4 className='text-center GalaxyCardHeading'>{Headings}</h4>
      </div>
    </div>
  </div>
  )
}

export default GalaxyCards