import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
}
const images = ['/pic.jpg', '/pic2.jpg', '/pic3.jpg', '/pic4.jpg']

const Gallery = () => {
  return (
    <div className=" container mx-auto my-12 p-5 lg:p-0 xl:p-20">
      <Carousel infinite responsive={responsive} itemClass="px-5 w-full">
        {images.map((image, index) => (
          <img
            src={image}
            alt="gallery image"
            key={index}
            className=" w-full"
          />
        ))}
      </Carousel>
    </div>
  )
}

export default Gallery
