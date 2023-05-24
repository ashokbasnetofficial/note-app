import React, { useState,useEffect} from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
const Search = (props) => {
   
    const [searchInput, setSearchInput] = useState('');
  
   
   
useEffect(() => {
    if (searchInput !== '') {
      props.setBtnLabel('all')
      props.setIsSearch(true);
      let newNoteList = props.noteValue.filter((note) =>
        note.subject.includes(searchInput)
      );
      console.log(newNoteList);
      props.setSearchNote(newNoteList);
    } else {
      props.setIsSearch(false);
    }
  }, [searchInput]);
  
    return (
        <div className="searchbar mt-5">
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', minWidth: "100%" }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search notes ..."
                    inputProps={{ 'aria-label': 'find notes' }}
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </Paper>
        </div>

    )
}

export default Search