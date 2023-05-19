import React, { useState } from 'react'
import { Button } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import ModalBox from '../modal/Modal';

const NoteCategory = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (

        <div className="category mt-4">
              
            <div className="d-flex justify-content-between">
                <div className="category d-flex justify-content-evenly">
                    <Button variant="contained" disableElevation sx={{textTransform:'capitalize',fontWeight:'600'}}>
                        All
                    </Button>
                    <Button sx={{display:'flex',flexDirection:'column',textTransform:'capitalize',color:'gray',fontWeight:'600'}}>
                        Home
                        <FiberManualRecordIcon sx={{fontSize:"small",color:'#ff9100'}}/>
                    </Button>
                    <Button sx={{display:'flex',flexDirection:'column',textTransform:'capitalize',color:'gray',fontWeight:'600'}}>
                        Work
                        <FiberManualRecordIcon sx={{fontSize:"small",color:'#5c6bc0'}}/>
                    </Button>
                    <Button sx={{display:'flex',flexDirection:'column',textTransform:'capitalize',color:'gray',fontWeight:'600'}}>
                        Personal
                        <FiberManualRecordIcon sx={{fontSize:"small",color:'#88c98b'}}/>
                    </Button>
                </div>
                <Button variant="contained" startIcon={<AddIcon />} onClick={handleOpen} >
                    Add Note
                </Button>
            </div>
            <ModalBox open={open} handleClose={handleClose} handleOpen={handleOpen} />
        </div>
    )
}

export default NoteCategory