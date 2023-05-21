import React, { useState,useEffect } from 'react'
import { Button } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import ModalBox from '../modal/Modal';

const NoteCategory = ({noteValue,setNoteValue,setFilterNotes,setNoteCategory}) => {
    const [open, setOpen] = useState(false);
  
   
 const handleCategory =(e)=>{
    const btn = e.currentTarget.innerText.toLowerCase();
  
    console.log(btn)
    let filterNote =  noteValue.filter((note)=>{
        if(btn==='all'){
        return noteValue
      }
       else if(btn===note.category){
           return noteValue
        }
   }
      )
   setFilterNotes(filterNote);
   
   setNoteCategory(true)
 }
   const handleOpen = () =>{ 
    setOpen(true);
    setNoteCategory(false)
};
    const handleClose = () => setOpen(false);
    return (

        <div className="category mt-4">
              
            <div className="d-flex justify-content-between">
                <div className="category d-flex justify-content-evenly">
                    <Button variant="contained" disableElevation sx={{textTransform:'capitalize',fontWeight:'600'}} onClick={handleCategory}>
                        All
                    </Button>
                    <Button sx={{display:'flex',flexDirection:'column',textTransform:'capitalize',color:'gray',fontWeight:'600',}} onClick={handleCategory}>
                        Home
                        <FiberManualRecordIcon sx={{fontSize:"small",color:'#ff9100'}}/>
                    </Button>
                    <Button sx={{display:'flex',flexDirection:'column',textTransform:'capitalize',color:'gray',fontWeight:'600'}} onClick={handleCategory}>
                        Work
                        <FiberManualRecordIcon sx={{fontSize:"small",color:'#5c6bc0'}}/>
                    </Button>
                    <Button sx={{display:'flex',flexDirection:'column',textTransform:'capitalize',color:'gray',fontWeight:'600'}} onClick={handleCategory}>
                        Personal
                        <FiberManualRecordIcon sx={{fontSize:"small",color:'#88c98b'}}/>
                    </Button>
                </div>
                <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen} >
                    Add Note
                </Button>
            </div>
            <ModalBox 
            open={open} 
            handleClose={handleClose} 
            handleOpen={handleOpen}
            noteValue={noteValue}
            setNoteValue={setNoteValue}
          />
        </div>
    )
}

export default NoteCategory