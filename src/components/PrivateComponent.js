import React from 'react'
import { Outlet } from 'react-router-dom'

const PrivateComponent = () => {
  return (
    <>
        <Outlet />
    </>
  )
}

export default PrivateComponent