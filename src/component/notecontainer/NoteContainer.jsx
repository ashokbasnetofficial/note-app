import React, { useState } from 'react'
import NoteList from './notelist/NoteList'
import ZeroNote from './zeronote/ZeroNote'


const NoteContainer = ({noteValue}) => {
 const isNotEmpty = noteValue.length>0
  return (
    <div>
         
        { 
        
        isNotEmpty?
         <NoteList noteValue={noteValue}/>
         :
         <ZeroNote/>
       }
        
        
    </div>
  )
}
export default NoteContainer