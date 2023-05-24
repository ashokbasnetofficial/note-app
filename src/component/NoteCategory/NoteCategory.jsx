import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import ModalBox from '../modal/Modal';
const btnCategory = [
    {
        label: 'all',
        sx: {
            display: 'flex',
            flexDirection: 'column',
            textTransform: 'capitalize',
            color: 'gray',
            fontWeight: '600',
            marginRight: '1.5rem'

        },
        variant: "contained",
        disableElevation: 'disableElevation',
        all: true,
        color:'#1976d2'
    },
    {
        label: 'home',
        sx: {
            display: 'flex',
            flexDirection: 'column',
            textTransform: 'capitalize',
            color: 'gray',
            fontWeight: '600',
            marginRight: '1.5rem'

        },
        color: '#ff9100'
    },
    {
        label: 'personal',
        sx: {
            display: 'flex',
            flexDirection: 'column',
            textTransform: 'capitalize',
            color: 'gray',
            fontWeight: '600',
            marginRight: '1.5rem'

        },
        method: 'handleCategory',
        color: '#88c98b'
    },
    {
        label: 'work',
        sx: {
            display: 'flex',
            flexDirection: 'column',
            textTransform: 'capitalize',
            color: 'gray',
            fontWeight: '600',
            marginRight: '1.5rem'
        },
        color: '#5c6bc0'
    }
]
const NoteCategory = (
    {
        noteValue,
        setNoteValue,
        setFilterNotes,
        setNoteCategory,
        setBtnLabel,
        btnLabel
    }
) => {
    const [open, setOpen] = useState(false);   
    const handleCategory = (e) => {
      const btn = e.currentTarget.innerText.toLowerCase();
      setBtnLabel(btn)
      console.log(btn)
     
  }
    useEffect(()=>{
   
    let filterNote = noteValue.filter((note) => {
      if ( btnLabel==='all') {
          return noteValue
      }
      else if (btnLabel === note.category) {
          return noteValue
      }
  }
  )
  setFilterNotes(filterNote);

  setNoteCategory(true)
  },
  [btnLabel,noteValue]
  ) 
    const handleOpen = () => {
        setOpen(true);
       
    };
    const handleClose = () => setOpen(false);
    return (

        <div className="category mt-4">

            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 d-flex">
                    {
                       btnCategory.map((btn, key) => {
                       
                        if (btn.all && btnLabel === 'all') {
                          return (
                            <Button className='d-flex'
                              key={key}
                              sx={
                               {
                                ...btn.sx,
                                color:'white !important'
                            }
                             }
                              variant={btn.variant}
                              disableElevation
                              onClick={handleCategory}
                            >
                              {btn.label}
                            </Button>
                          );
                        }
                      
                       
                        if (btn.label.toLowerCase() === btnLabel && btnLabel!='all') {
                          return (
                            <Button 
                            className='d-flex'
                              key={key}
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                textTransform: 'capitalize',
                                color: 'white',
                                fontWeight: '600',
                                marginRight: '1.5rem',
                                backgroundColor: btn.color, // Set the desired background color
                              }}
                              disableElevation
                              onClick={handleCategory}
                              variant='contained'
                            >
                              {btnLabel}
                            
                            </Button>
                          );
                        }
                      
                        // Default button rendering
                        return (
                          <Button
                          className='d-flex'
                            key={key}
                            sx={
                              btn.sx
                              }
                            onClick={handleCategory}
                          >
                            {btn.label}
                            <FiberManualRecordIcon sx={{ fontSize: 'small', color: btn.color }} />
                          </Button>
                        );
                      })
                      
                    }
                </div>
                <div className="col-lg-4 col-md-4 col-sm-12 d-flex justify-content-end addnote">
                
                <Button variant="contained"  startIcon={<AddIcon />} onClick={handleOpen} >
                    Add Note
                </Button>
               
                </div>

            </div>
            <ModalBox
                open={open}
                type='Add'
                handleClose={handleClose}
                handleOpen={handleOpen}
                noteValue={noteValue}
                setNoteValue={setNoteValue}
                setBtnLabel={setBtnLabel}
            />
        </div>
    )
}

export default NoteCategory