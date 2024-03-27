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
                    <h2 className='tutorialContent'>Samouczek</h2>
                    <p className='tutorialContent'>Terve! Kuka sinä olet? - Cześć! Kim jesteś?<br/>
                                                    Minä olen Elsa. - Jestem Elsa.<br/>
                                                    Anteeksi, kuka sinä olet? - Przepraszam, kim jesteś?<br/>
                                                    Minä olen Otso. - Jestem Otso.<br/>
                                                    Tervetuloa! - Witam!<br/>
                                                    Jee! Onnea! - Jej! Powodzenia!<br/>
                                                    Liisa, sinä olet hauska. - Liisa, jesteś zabawna.<br/>
                                                    Kippis ja paljon onnea! - Na zdrowie i gratulacje!<br/>
                                                    Elsa on nainen. - Elsa jest kobietą.<br/>
                                                    Väinö on mies. - Väinö jest mężczyzną.<br/>
                                                    Anteeksi, kuka hän on? - Przepraszam, kim ona jest?<br/>
                                                    Hän on lapsi. - Ona jest dzieckiem.<br/>
                                                    Sinä olet todella komea. - Jesteś naprawde przystojny.<br/></p>
                    <button
                    onClick={toggleTutorial} className='close-tutorial'>Zamknij</button>
                </div>
            </div>
        </div>
         )}
        </>
    );
}