"use client";

import { useState }from 'react'
import Button from '@/components/ui/Button'

const Home = () => {

  const [task, setTask] = useState({title: "", description: ""})
  
  return (
    <div className='flex flex-col gap-2 text-white items-center'>
      <h1 className='text-2xl font-bold mb-4'>Task Manager CRUD</h1>
      <input type="text" className='border border-white rounded-sm outline-none py-1 px-2 w-[300px]' placeholder='Task Title' value={task.title} onChange={(e) => setTask((prev) => ({...prev, title: e.target.value}))}/>
      <textarea className='border border-white rounded-sm outline-none py-1 px-2 w-[300px]' placeholder='Task Description' value={task.description} onChange={(e) => setTask((prev) => ({...prev, description: e.target.value}))}/>
      <Button title="Add Task"/>

      <h1>{task.title}</h1>
      <h1>{task.description}</h1>

    </div>
  )
}

export default Home

