import NavBarComponent from '@/Components/NavBar'
import React from 'react'

const UserLayout = ({children}) => {
  return (
    <div>
        <NavBarComponent/>
        <h2>hello</h2>
      {children}
    </div>
  )
}

export default UserLayout
