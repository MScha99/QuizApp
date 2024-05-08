/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function TopBanner({ banners, currentQuestion }) {
  if (banners.length === 0) {
    return null;
  }

  return (
    <div className='TopBanner-container'>
      <img
        src={banners[currentQuestion % banners.length]}
        alt='Ad Banner'
        className='banner-image'
        style={{ width: 'auto', height: 'auto', display: 'block' }} 
      />
    </div>
  );
}
