/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';

const Timer = ({ setShowResult, counter, setCounter, setElapsedTime, quizTime }) => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            if (counter > 0) {
                const mins = Math.floor(counter / 60);
                const secs = counter % 60;
                setMinutes(mins);
                setSeconds(secs);
                setCounter((prevCounter) => prevCounter - 1);
            } else {
                clearInterval(timer);
                setShowResult(true);
                setElapsedTime(quizTime);
            }
        }, 1000);
       
        return () => clearInterval(timer);
        
    }, [counter, setCounter, setShowResult, setElapsedTime, quizTime]);

    return (
        <div className='timer-container'>
            <Typography sx={{
                fontSize: "14px",
                lineHeight: "19px",
                color: "#777777",
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif"
            }}>
                Pozostało  <br />
            </Typography>
            <Typography sx={{
                fontSize: "24px",
                lineHeight: "30px",
                color: "#777777",
                fontWeight: "bold",
                fontFamily: "Inter, sans-serif"
            }}>
                {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds} min
            </Typography>
        </div>
    );
};

export default Timer;
