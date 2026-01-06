import React from 'react'

// const FnlComp = () => {
//   return (
//     <div>FnlComp</div>
//   )
// }

const FnlComp = ({name}) => {
  return (
    <div>FnlComp: {name}</div>
  )
}

export default FnlComp

// Is a plain function returning JSX
// Gets props as function arguments
// use Hooks handle state