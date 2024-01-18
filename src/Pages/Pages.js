import React from 'react'
import List from '../Components/List'
import Create from '../Components/Create'
import './Pages.css'
import image from '../images/21077233-removebg-preview 1-removebg-preview.jpg'
import { useState } from 'react';

function Pages() {
    const [tasks, setTasks] = useState([
       
    ]);

    const addlist = title => {
        const newtask = [...tasks, { title:title, completed: false,editable:false }];
        console.log(newtask)
        setTasks(newtask);
    };
    const completetask = index => {
       
        const newtask = [...tasks];
        console.log(newtask[index].title)
        newtask[index].completed = !newtask[index].completed;
        setTasks(newtask);
    };
    const removeTask = index => {
        const newtask = [...tasks];
        newtask.splice(index, 1);
        setTasks(newtask);
    };
    // const edittask = index => {
        
    //     const newtask = [...tasks];
    //     newtask[index].editable=true;
       
    //     setTasks(newtask);
    // };
    
  return (
    <div className='pages'>
       
         
        <div className='pages-right'>
            <h1>List-Items</h1>
        <Create
         addlist={addlist}
        />
        {
            tasks.map((task,index)=>
            
            <List
            task={task}
            index={index}
            key={index}
            completetask={completetask}
            removeTask={removeTask}
            
            />
            )
        }
       
        
        </div>

         <div className='pages-left'>
                 <img src={image} alt='img'></img>
         </div>
          
         
    </div>
   
  )
}

export default Pages