import React from 'react'
import images from '../utils/index'

const Portfolio = () => {
  return (
    
    <div>
      <h2 className="section__header mt-6">
           ~ My Portfolio ~
        </h2>
        <div>
          {images.map((image) => (
            <img
              src={image}
              alt="portfolio"
              className="portfolio__image"
            />
          ))}
        </div>
    </div>
  )
}

export default Portfolio