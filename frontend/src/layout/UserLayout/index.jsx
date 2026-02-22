import NavBarComponent from '@/Components/NavBar'
import React from 'react'

const UserLayout = ({children}) => {
  return (
    <div>
        <NavBarComponent/>
        {children}
    </div>
  )
}

export default UserLayout
