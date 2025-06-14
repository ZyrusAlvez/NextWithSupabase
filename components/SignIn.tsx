"use client";

import { useState } from 'react'
import Button from '@/components/ui/Button';
import { supabase } from '@/lib/supabase-client';

const SignIn = () => {
  
  const [credentials, setCredentials] = useState<{name: string, password: string}>({
    name: "",
    password: ""
  })

  async function onSubmit(e: React.FormEvent){
    e.preventDefault()
    const {error} = await supabase.auth.signInWithPassword({email: credentials.name, password: credentials.password})
    if (error){
      console.error("Error signing in: ", error)
    }
  }
  
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2 bg-gray-800 p-4 rounded">
      <h1 className='text-lg text-white font-bold mb-4 text-center'>Sign In</h1>
      <input placeholder='name' className='px-2 py-1 rounded-sm outline-none border border-white' value={credentials.name} onChange={(e) => setCredentials((prev) => ({...prev, name:e.target.value}))}/>
      <input placeholder='password' className='px-2 py-1 rounded-sm outline-none border border-white' value={credentials.password} onChange={(e) => setCredentials((prev) => ({...prev, password:e.target.value}))}/>
      <Button title="Submit"/>
    </form>
  )
}

export default SignIn