import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const Card = () => {
    const {defaultUser}= useContext(UserContext)
  return (
    <div className='border shadow-lg rounded-md w-[200px] h-[200px]'>
    <h4>Name: {defaultUser}</h4>
</div>
  )
}

export default Card