import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Contact = () => {
  return (
    <div>
        <h1>This is contact page</h1>
        <Link to="channel">Channel</Link>
        <Link to="compnay">compnay</Link>
        <Link to="other">Other</Link>
        <Outlet/>
    </div>

    
  )
}
