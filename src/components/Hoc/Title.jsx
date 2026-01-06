import { useState } from 'react';

const Title = () => {
    const [isHover, setIsHover] = useState(false);

const handleMouseEnter =()=>{
    setIsHover(true)
}
const handleMouseLeave =()=>{
    setIsHover(false)
}

  return (
    <div>
        <h1
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={isHover ? {backgroundColor :'green'}:{}}
        >Welcome to My world</h1>
    </div>
  )
}

export default Title