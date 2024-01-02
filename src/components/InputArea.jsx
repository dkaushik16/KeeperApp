import React from "react"
import { useState } from 'react'
import '../style.css'


function InputArea(props){

    const [note, setNote]= useState({ title:"", des:""})
    const [isExpanded, setExpanded]= useState(false)

    function handleChange(event){

        const {name,value}= event.target
        setNote(prev=>{
            return ({
                ...prev,
                [name]:value
            })
       })
    }

    function submitNote(event){
        if (note.title==="" && note.des===""){
            alert("please enter proper title and content") 
        }
        else{
        props.onAdd(note)
        setNote({
            title:"",
            des:""
        })
    }
       event.preventDefault()
    }

    function handleExpand(){
        setExpanded(true)
    }
    
  
    
    return(
        <div >
           <form>
           {isExpanded && (<input
                name= "title"
                type="text"
                placeholder="Title"
                onChange={handleChange}
                value= {note.title}
                
            />
               )}
           <textarea
              name="des"
              type="text"
              placeholder="Add a note"
              rows= {isExpanded ? 3 :1}
              onChange={handleChange}
              value={note.des}
              onClick={handleExpand}
           /> 
           <button 
              onClick={submitNote}
                  >Add</button>
          </form>
        </div>
    )
}

export default InputArea