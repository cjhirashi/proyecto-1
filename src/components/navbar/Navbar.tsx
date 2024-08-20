import Link from 'next/link'
import React from 'react'
import { FaCode } from 'react-icons/fa'
import { ItemsNavbarComponent } from './Items'

const menu = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Blog',
        path: '/blog',
    },
    {
        name: 'Contactos',
        path: '/contactos',
    },
    {
        name: 'Dashboard',
        path: '/dashboard/main',
    },
]

export const NavbarComponent = () => {

  return (
    <>
      <nav className='flex p-4 bg-neutral-700'>

        <div className='flex-none flex gap-2 items-center'>
        <FaCode  size={30}/>
        <h1 className='text-xl'>Marcelo <span className='text-blue-500'>Piña Neria</span></h1>
        </div>

        <div className='flex-1 '></div>

        <div className='flex-none flex gap-4 '>
            
            {
                menu.map( item => (
                    <ItemsNavbarComponent key={item.name} name={item.name} path={item.path} />
                ))
            }
            
        </div>

      </nav>
    </>
  )
}