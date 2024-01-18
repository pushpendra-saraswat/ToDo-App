import React from 'react'

function dit() {
  return (
     
        <form className='create' >
    
            <input type="text" placeholder="Add your task" value={inputText}
                onChange={e => setInputText(e.target.value)}></input>
    
            <button className='btn' onClick={handleevent}>Update</button>
        </form>
  )
}

export default edit