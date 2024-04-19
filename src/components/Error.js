import React from 'react'

const Error = (props) => {
  return (
    <div className='w-screen h-screen flex flex-col  justify-center items-center'><p className='underline text-3xl'> {props.text}</p><a href='/' className='text-blue-900'>click here to login</a></div>
  )
}

export default Error
