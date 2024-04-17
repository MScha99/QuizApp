/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './RightBanner.css'
export default function RightBanner({ banners, currentQuestion }) {
  return (
    <div className='RightBanner-container'>
      <img
        src={banners[currentQuestion % banners.length]}
        alt='Ad Banner'
        className='right-banner-image'
      />
    </div>
  )
}
