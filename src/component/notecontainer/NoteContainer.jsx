import React, { useState } from 'react'
import NoteList from './notelist/NoteList'
import ZeroNote from './zeronote/ZeroNote'


const NoteContainer = () => {
  const [isNotEmpty, setIsNoTEmplty]=useState(false)
  return (
    <div>
       {
        isNotEmpty &&
        <NoteList/>
        ||
        <ZeroNote/>
        
        }
    </div>
  )
}
export default NoteContainer