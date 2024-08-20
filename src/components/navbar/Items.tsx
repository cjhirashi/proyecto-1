'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export interface ItemsNavbarInterface {
  name: string
  path: string
}

export const ItemsNavbarComponent = ({name, path}:ItemsNavbarInterface) => {

    const pathName = usePathname();

  return (
    <>
      <div>

        <Link className={`hover:text-blue-500 ${ (pathName === path ) && 'text-green-500' }`} href={path}> {name} </Link>

      </div>
    </>
  )
}