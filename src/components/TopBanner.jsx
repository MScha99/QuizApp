/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import './TopBanner.css'
export default function TopBanner({ banners, currentQuestion }) {
  return (
    <div className='TopBanner-container'>
      <img
        src={banners[currentQuestion % banners.length]}
        alt='Ad Banner'
        className='banner-image'
      />
    </div>
  )
}
