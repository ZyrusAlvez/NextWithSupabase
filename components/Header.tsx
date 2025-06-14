"use client";

import React from 'react'
import { useSession } from '@/context/SessionContext'

const Header = () => {
  const session = useSession()
  return (
    <header className="fixed top-0 left-0 z-1 flex justify-between h-16 w-full items-center bg-gray-700 px-4 border-b border-white">
      <h1>Task Manager 2.0</h1>
      <h1>{!session ? "Not Signed in" : session.user.email}</h1>
  </header>
  )
}

export default Header