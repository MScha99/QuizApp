import { useState } from 'react'
import './Tutorial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen} from '@fortawesome/free-solid-svg-icons';

export default function Tutorial() {
    const [tutorial, setTutorial] = useState(false);

    const toggleTutorial = () => {
        setTutorial(!tutorial)
    }

    return (
        <>
        <button
        onClick={toggleTutorial} className='btn-tutorial'><FontAwesomeIcon icon={faBookOpen} /></button>

         {tutorial && (
            <div className="tutorial">
            <div onClick={toggleTutorial} className="overlay">
                <div className="tutorial-content">
                    <h2 className='tutorialContent'>do nauki!!!</h2>
                    <p className='tutorialContent'>jhfjfvjcfvyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
                        uujhgvgjddddddddddddddddlkshfkdjhskjfkjsbkj
                        fbkjsbfkjbskjdbfkjsbkfbksjbfkjsbkfbksjbfkjsbkfb
                        ksjbkckskjbcksbkcbksjbckbskbckbskbcksjbkcjbskc</p>
                    <button
                    onClick={toggleTutorial} className='close-tutorial'>Zamknij</button>
                </div>
            </div>
        </div>
         )}
        </>
    );
}