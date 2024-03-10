import React, {useEffect, useState} from 'react';

const Count = () => {
    const [endTime] = useState(new Date("Mar 15, 2035 00:00:00").getTime());
    const [[hours, mins, secs], setTime] = useState([0, 0, 0]);
    const [timer, setTimer] = useState(false);

    useEffect(()=> {
        const timeLeft = (endTime - new Date()) / 1000;
        setTime([
            Math.floor((timeLeft / 3600) % 24),
            Math.floor((timeLeft / 60) % 60),
            Math.floor(timeLeft % 60)
        ])
    }, [timer, endTime])

    useEffect(()=>{
        const timerID = setInterval(() => setTimer(!timer), 1000);
        return () => clearInterval(timerID);
    }, [timer])
    return (
        <div className="count">
            <span>{hours.toString().padStart(2, '0')}</span>:<span>{mins.toString().padStart(2, '0')}</span>:<span>{secs.toString().padStart(2, '0')}</span>
        </div>
    );
};

export default Count;