import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './List.css';




const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
function List({ task, index, completetask, removeTask, handleedit }) {
  return (
    <div className='list-item'>

      <Checkbox size='large' color='success' {...label}
        onClick={() => completetask(index)} />
        <h3> {task.title}  {task.completed && '  ✔'}  </h3>

      {/* <h3 style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.title}</h3> */}
      <button className='btn' onClick={() => handleedit(index)}><BorderColorIcon /></button>
      <button className='btn' onClick={() => removeTask(index)} ><DeleteForeverIcon /></button>


    </div>
  )
} 


export default List