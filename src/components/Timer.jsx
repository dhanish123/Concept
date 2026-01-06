import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [Timer, setTimer] = useState(0);
    useEffect(() => {
        const intervel = setInterval(()=>{
            setTimer(prev=>prev+1)
        },1000)
        return () => {
            clearInterval(intervel)
        };
    }, []);
  return (
    <div>
       <h1> Timer :{Timer}</h1>
    </div>
  )
}

export default Timer
