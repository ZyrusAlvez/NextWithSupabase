"use client";

import { useState, useEffect }from 'react'
import Button from '@/components/ui/Button'
import { supabase } from '@/lib/supabase-client';
import Card from '@/components/Card'; 

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
    <>
      <form onSubmit={onSubmit} className='flex flex-col gap-2 text-white items-center'>
        <h1 className='text-2xl font-bold m-4'>Task Manager CRUD</h1>
        <input type="text" className='border border-white rounded-sm outline-none py-1 px-2 w-[300px]' placeholder='Task Title' value={task.title} onChange={(e) => setTask((prev) => ({...prev, title: e.target.value}))}/>
        <textarea className='border border-white rounded-sm outline-none py-1 px-2 w-[300px] mb-4' placeholder='Task Description' value={task.description} onChange={(e) => setTask((prev) => ({...prev, description: e.target.value}))}/>
        <Button title="Add Task" onClick={onSubmit}/>
      </form>

      <div className='grid grid-cols-3 gap-8'>
        {taskList.map((e) => (
          <div key={e.id}>
            <Card title={e.title} description={e.description} id={e.id}/>
          </div>
        ))}
      </div>

    </>
  )
}

export default Home

