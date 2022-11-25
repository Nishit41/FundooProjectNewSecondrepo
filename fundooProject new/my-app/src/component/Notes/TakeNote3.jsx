import React from 'react'

function TakeNote3(props) {
  return (
    <div  className='multi-notes-container' >
         <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet" />
          {/* <span className="material-symbols-outlined " id='md-48'>delete</span> */}
          <input className='multi-notes-1' type="text" value={props.title} placeholder="Title" >
        
          </input>
          <input id="multi-notes-2" rows='auto' cols="" value={props.content} placeholder="Take a note .." />
    
          <div className='botton-icons-parent'>
        <div className='botton-icons-take-note-1'>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100" rel="stylesheet" />
          <span className="material-symbols-outlined " id='md-48'>notifications</span>
          <span className="material-symbols-outlined " id='md-48'>person </span>
          <span className="material-symbols-outlined " id='md-48'>palette</span>
          <span className="material-symbols-outlined " id='md-48'>image</span>
          <span className="material-symbols-outlined " id='md-48'>archive</span>
          <span className="material-symbols-outlined " id='md-48'>delete</span>
         </div>
          
        </div>


        {/* </div> */}
      {/* </div> */}
    </div>
  )
}

export default TakeNote3