import React from 'react'

import './index.css'

const PhotoGallery = ({ photos }) => (
  <div className="photo-gallery">
    {photos.map(src => <img src={src} alt={src} className="photo" />)}
  </div>
)

export default PhotoGallery;