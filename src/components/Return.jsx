import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import "./Return.css"

export default function Return() {
  const [display, setDisplay] = useState(false)

  const toggleDsiplay = () => {
    setDisplay(!display)
  }

  return (
    <div>
      <button onClick={toggleDsiplay} className='btn-display'>
        {' '}
        <FontAwesomeIcon icon={faHouse} />{' '}
      </button>

      {display ? <div className="prompt">
        <div className="overlay">
        <div className="prompt-content">
            <h2 className="prompt-content-text">Czy na pewno chcesz wrócić na ekran główny?</h2>
            <Link to='/'><button
                    onClick={toggleDsiplay} className='btn-return' >Tak</button>
                    </Link>
            <button
                    onClick={toggleDsiplay} className='btn-return'>Nie</button>
                    
        </div>
        </div>
      </div> : null}
    </div>
  )
}
