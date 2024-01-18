import AddBoxIcon from '@mui/icons-material/AddBox';
import { grey } from '@mui/material/colors';
import './Create.css'
import { useState } from 'react';

// import List from './List';

function Create({addlist}) {
    const [inputText, setInputText] = useState('');
    const handleevent = (e) => {
        e.preventDefault();
        console.log(inputText)
        // if (!inputText)
        //     return;
        addlist(inputText);
        setInputText('')
    
}
return (
    <form className='create' >

        <input type="text" placeholder="Add your task" value={inputText}
            onChange={e => setInputText(e.target.value)}></input>

        <button className='btn' onClick={handleevent}><AddBoxIcon sx={{ color: grey[500] }} /></button>
    </form>
);
}
export default Create;