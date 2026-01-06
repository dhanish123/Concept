import React from 'react'
import Child from '../Props drilling/Child'

const Parent = ({user}) => {
  return (
    <div>
        <h1>Parent</h1>
        <Child user={user} />
    </div>
  )
}

export default Parent