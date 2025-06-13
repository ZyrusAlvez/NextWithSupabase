"use client";

import { useState, useEffect }from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabase-client'; 

const Home = () => {

  const [task, setTask] = useState<{title: string, description: string}>({
    title: "", 
    description: ""
  })

  type Task = {
    id: number,
    created_at: string,
    title: string;
    description: string;
  };
  
  const [taskList, setTaskList] = useState<Task[]>([]);

  async function onSubmit(e: React.FormEvent){
    e.preventDefault(); // stops page reload
    
    const { error } = await supabase
    .from("task")
    .insert(task)
  
  if (error) {
    console.error("Insert error:", error);
  } else {
    console.log("data inserted");
  }
    setTask({title: "", description: ""})
  }

  async function fetchData(){
    const {data, error} = await supabase
      .from("task")
      .select("*")
    
    if (error){
      console.error(error)
      return;
    }else{
      setTaskList(data)
    }
  }

  useEffect(() => {
    fetchData()    
  }, [onSubmit])
  
  return (
    <form onSubmit={onSubmit} className='flex flex-col gap-2 text-white items-center'>
      <h1 className='text-2xl font-bold mb-4'>Task Manager CRUD</h1>
      <input type="text" className='border border-white rounded-sm outline-none py-1 px-2 w-[300px]' placeholder='Task Title' value={task.title} onChange={(e) => setTask((prev) => ({...prev, title: e.target.value}))}/>
      <textarea className='border border-white rounded-sm outline-none py-1 px-2 w-[300px]' placeholder='Task Description' value={task.description} onChange={(e) => setTask((prev) => ({...prev, description: e.target.value}))}/>
      <Button title="Add Task" onClick={onSubmit}/>

      <div className='flex flex-col '>
        {taskList.map((e, i) => (
          <div key={i} className='flex gap-2 p-4 mt-4 border border-white rounded-lg w-[300px] justify-between'>
            <div className="flex flex-col gap-2 ">
              <h1 className="text-lg">📌{e.title}</h1>
              <h1 className="text-sm text-gray-300">{e.description}</h1>
            </div>
            <div className="flex flex-col h-full items-center justify-end gap-2">
              <Button title="edit"/>
              <Button title="delete"/>
            </div>

          </div>
        ))}
      </div>

    </form>
  )
}

export default Home

