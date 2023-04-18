import React from 'react'

import Testimonial from './Testimonial';



function Testimonials(props) {
    const Allreviews= props.reviews;

  return (
    <div>
      <Testimonial review={Allreviews.map((review) =>(review))} Allreviews={Allreviews}></Testimonial>
    </div>
  )
}

export default Testimonials
