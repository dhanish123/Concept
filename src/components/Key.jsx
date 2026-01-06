import React from 'react'

const Key = () => {
      const items = ["Apple", "Banana", "Cherry"];  
  return (
      <ul style={{listStyleType:'disc'}}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>  // track each item uniquely
      ))}
    </ul>
  )
}

export default Key  