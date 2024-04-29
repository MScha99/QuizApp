import { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Return.css"
import { Button } from '@mui/material'

export default function Return() {
  const [display, setDisplay] = useState(false)

  const toggleDsiplay = () => {
    setDisplay(!display)
  }

  return (
    <div>
      <Button variant='outlined' onClick={toggleDsiplay}>Strona główna</Button>

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
