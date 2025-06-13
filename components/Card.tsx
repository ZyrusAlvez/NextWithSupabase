"use client";

import { useState }from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabase-client'; 

type Props = {
  title? : string,
  description? : string,
  id : number
}

const Card = ({title, description, id} : Props) => {

  const [newTask, setNewTask] = useState<{newTitle: string, newDescription: string}>({
  newTitle: title || "",
  newDescription: description || ""
  })
  const [editing, setEditing] = useState<boolean>(false)

  async function deleteTask(id: number){
    
    const {error} = await supabase
      .from("task")
      .delete()
      .eq("id", id)

    if(error){
      console.error(error)
    }
  }

  async function editTask(id: number){
    
    const {error} = await supabase
      .from("task")
      .update({title: newTask.newTitle, description: newTask.newDescription})
      .eq("id", id)

    if(error){
      console.error(error)
    }
  }

  return (
    <div className='flex gap-2 p-4 mt-4 border border-white rounded-lg w-[300px] justify-between'>
            <div className="flex flex-col gap-2 ">
              {
                editing 
                ? 
                <input className='border border-white rounded-sm outline-none py-1 px-2' value={newTask.newTitle} onChange={(e) => setNewTask((prev) => ({...prev, newTitle: e.target.value}))}/> 
                :
                <h1 className="text-lg">📌{title}</h1>
              }
              {
                editing
                ?
                <textarea className='border border-white rounded-sm outline-none py-1 px-2 mb-4' value={newTask.newDescription} onChange={(e) => setNewTask((prev) => ({...prev, newDescription: e.target.value}))}/>
                :
                <h1 className="text-sm text-gray-300">{description}</h1>
              }
            
            </div>
            <div className="flex flex-col h-full items-center justify-end gap-2">
              {
                !editing
                ?
                <Button title="edit" onClick={() => setEditing((e) => !e)}/>
                :
                <Button title="update" onClick={() => {setEditing((e) => !e); editTask(id)}}/>
              }
              <Button title="delete" onClick={() => deleteTask(id)}/>
            </div>

          </div>
  )
}

export default Card