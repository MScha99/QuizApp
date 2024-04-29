import { useState } from 'react'


export default function Relaxation() {
  const [display, setDisplay] = useState(false)

  const toggleDsiplay = () => {
    setDisplay(!display)
  }

  return (
    <li className='relaxation-li' onClick={toggleDsiplay}> 
    Odpoczynek pomiędzy modułami
     

      {display ? <div className="prompt">
        <div className="prompt-content-video">
            
            <iframe
      width='854'
      height='480'
      src='https://www.youtube.com/embed/UBs5I3uOeNE?si=FVAdqhwzWk1n1aMt&amp;start=13080'
      title='YouTube video player'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
      referrerPolicy='strict-origin-when-cross-origin'
      allowfullscreen
    ></iframe>
            
                    
        </div>
      </div> : null}
    </li>
  )
}
