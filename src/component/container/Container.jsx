import React, { useState, useEffect } from 'react'
import NoteContainer from '../notecontainer/NoteContainer'
import Search from '../search/search'
import NoteCategory from '../NoteCategory/NoteCategory'
const Container = () => {
  const [noteCategory, setNoteCategory] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [btnLabel, setBtnLabel] = useState('all');
  const [noteValue, setNoteValue] = useState(() => {
    const storedNoteValue = localStorage.getItem('noteValue');
    return storedNoteValue ? JSON.parse(storedNoteValue) : [];
  });
  const [filterNotes, setFilterNotes] = useState([]);
  const [searchNote, setSearchNote] = useState([])

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
        setBtnLabel={setBtnLabel}
      />
      <NoteCategory
        noteValue={noteValue}
        setFilterNotes={setFilterNotes}
        setNoteValue={setNoteValue}
        setNoteCategory={setNoteCategory}
        noteCategory={noteCategory}
        btnLabel={btnLabel}
        setBtnLabel={setBtnLabel}
      />
      {
      (  
        noteCategory&&
        <NoteContainer
            noteValue={filterNotes}
            setNoteValue={setNoteValue}
            setNoteCategory={setNoteCategory}
            setBtnLabel={setBtnLabel}
          />
        )
        ||
        (isSearch &&
          <NoteContainer
            noteValue={searchNote}
            setNoteValue={setNoteValue}
            setNoteCategory={setNoteCategory}
            setBtnLabel={setBtnLabel}
          />)
        ||
        (
          <NoteContainer
            noteValue={noteValue}
            setNoteValue={setNoteValue}
            setNoteCategory={setNoteCategory}
          />)
      }
    </div>
  )
}

export default Container