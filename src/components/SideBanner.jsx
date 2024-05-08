/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function SideBanner({ banners, currentQuestion }) {
  if (banners.length === 0) {
    return null;
  }

  return (
    <div className='RightBanner-container'>
      <img
        src={banners[currentQuestion % banners.length]}
        alt='Ad Banner'
        className='right-banner-image'
        style={{ width: 'auto', height: 'auto', display: 'block' }} 
      />
    </div>
  )
}
