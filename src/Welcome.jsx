import React from 'react'

const Welcome = (prop) => {
    console.log(prop)
  return (
    <h1>
        hello,{prop.key_name}
        <p>{prop.city}</p>
    </h1>
  )
}

export default Welcome