import PropTypes from 'prop-types'


const YoutubeEmbed = () => (
  <div className='video-responsive'>
    <iframe
      width='1280'
      height='720'
      src='https://www.youtube.com/embed/UBs5I3uOeNE?si=FVAdqhwzWk1n1aMt&amp;start=13080'
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowfullscreen
    ></iframe>
  </div>
)

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
}

export default YoutubeEmbed
