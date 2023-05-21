import React,{useState,useEffect} from 'react'
import NoteContainer from '../notecontainer/NoteContainer'
import  Search from '../search/search'
import NoteCategory from '../NoteCategory/NoteCategory'
const Container = () => {
  const [noteCategory,setNoteCategory]=useState(false);
  const [noteValue, setNoteValue] = useState(() => {
    const storedNoteValue = localStorage.getItem('noteValue');
    return storedNoteValue ? JSON.parse(storedNoteValue) : [];
  });
const [filterNotes,setFilterNotes] = useState([]);
console.log(filterNotes)
  // Update local storage whenever noteValue changes
  useEffect(() => {
    localStorage.setItem('noteValue', JSON.stringify(noteValue));
  }, [noteValue]);
    return (
    <div className="container d-flex flex-column ">
    <Search
     noteValue={noteValue}
     setNoteValue={setNoteValue}
     />
    <NoteCategory
    noteValue={noteValue}
    setFilterNotes={setFilterNotes}
    setNoteValue={setNoteValue}
    setNoteCategory={setNoteCategory}
  />
   {
    noteCategory &&
    <NoteContainer
    noteValue={filterNotes} 
    />
    ||
    <NoteContainer
    noteValue={noteValue} 
    /> 
   }
 </div>
  )
}

export default Container