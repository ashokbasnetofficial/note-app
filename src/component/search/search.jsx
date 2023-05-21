import React, { useState } from 'react'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
const Search = (props) => {
    const [searchInput,setSearchInput]=useState('');
   
    //  let newNoteList=props.noteValue.filter((note)=>note.subject.includes(searchInput))
   
    
//         props.setNoteValue(newNoteList)
// }
    return (
        <div className="searchbar mt-5">
            
                
             
            
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', minWidth:"100%" }}
            >
                <IconButton sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search notes ..."
                    inputProps={{ 'aria-label': 'find notes' }}
                    value={searchInput}
                    onChange={(e)=>setSearchInput(e.target.value)}
                />   
            </Paper>
        </div>

    )
}

export default Search