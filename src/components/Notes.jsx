import React from "react"


function Notes(props){

   function removeNote(){
       props.onDel(props.id)
   }

    return(
        <div className="notes">
            <h1>{props.title}</h1>
            <p>{props.des}</p>
            <button
                onClick={removeNote}
                >Delete</button>

        </div>
        
    )
}

export default Notes