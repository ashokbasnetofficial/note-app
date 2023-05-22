import React,{useState,useEffect} from 'react'
import NoteContainer from '../notecontainer/NoteContainer'
import  Search from '../search/search'
import NoteCategory from '../NoteCategory/NoteCategory'
const Container = () => {
  const [noteCategory,setNoteCategory]=useState(false);
  const [isSearch,setIsSearch] =useState(false);
  const [noteValue, setNoteValue] = useState(() => {
    const storedNoteValue = localStorage.getItem('noteValue');
    return storedNoteValue ? JSON.parse(storedNoteValue) : [];
  });
const [filterNotes,setFilterNotes] = useState([]);
const [searchNote,setSearchNote]=useState([])

console.log()
  // Update local storage whenever noteValue changes
  useEffect(() => {
    localStorage.setItem('noteValue', JSON.stringify(noteValue));
  }, [noteValue]);
  
    return (
    <div className="container d-flex flex-column ">
    <Search
     noteValue={noteValue}
    setSearchNote={setSearchNote}
    setIsSearch={setIsSearch}
     />
    <NoteCategory
    noteValue={noteValue}
    setFilterNotes={setFilterNotes}
    setNoteValue={setNoteValue}
    setNoteCategory={setNoteCategory}
    filterNotes={filterNotes}
  />
   {
   ( noteCategory &&
    <NoteContainer
    noteValue={filterNotes} 
    setNoteValue={setNoteValue}
    />)
    ||
   ( isSearch &&
    <NoteContainer
    noteValue={searchNote} 
    setNoteValue={setNoteValue}
    /> )
    ||
    ( 
      <NoteContainer
      noteValue={noteValue} 
      setNoteValue={setNoteValue}
      /> )
   }
 </div>
  )
}

export default Container