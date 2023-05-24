import React from 'react'
import NoteList from './notelist/NoteList'
import ZeroNote from './zeronote/ZeroNote'


const NoteContainer = ({noteValue,setNoteValue,setNoteCategory,setBtnLabel}) => {
 const isNotEmpty = noteValue.length>0
  return (
    <div>
       { 
      
        isNotEmpty?
         <NoteList 
         noteValue={noteValue}
         setNoteValue={setNoteValue}
         setNoteCategory={setNoteCategory}
         setBtnLabel={setBtnLabel}
         />
         :
         <ZeroNote/>
       }
        
        
    </div>
  )
}
export default NoteContainer