import { useState } from 'react'
import React from 'react'
import './style.css'
import Header from './components/Header'
import Notes from  './components/Notes'
import InputArea from './components/InputArea'


function App() {

  const [content, setContent]= useState([])

  function addNote(note){
     setContent(prev=>{
       return [...prev,note]
     })
  }

  function deleteNote(id){
     setContent(prev=>{
       return prev.filter((item,index)=>{
          return (index!==id)
      })
     })
  }


  
  return (
    <> 
       <Header/>

       <InputArea 
         onAdd={addNote}
         />    
       
          {content.map((itr,index)=>{
            return(
              <Notes
                title={itr.title}
                des= {itr.des}
                id={index}
                key={index}
                onDel={deleteNote}
                 />
            )
          })}

   
    </>
  )
}

export default App
