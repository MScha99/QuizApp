/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


export default function TopBanner({ banners, currentQuestion }) {
  if (banners.length === 0) {
    return null;
  }

  return (
    <div >
      <img
        src={banners[currentQuestion % banners.length]}
        alt='Ad Banner'
       
        // style={{ width: 'auto', height: 'auto', display: 'block' }} 
        style={{
          width: '100%',
          // height: '100%',
          // objectFit: 'contain',
        }}
      />
    </div>
  );
}
