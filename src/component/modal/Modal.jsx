import React, { useState,useEffect } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
const options = [
    {
        value: 'home',
        label: 'Home',
        bgcolor:'#ff9100'
    },
    {
        value: 'personal',
        label: 'Personal',
        bgcolor:'#88c98b'
    },
    {
        value: 'work',
        label: 'Work',
        bgcolor:'#5c6bc0'
    },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    bgcolor: 'background.paper',
    borderRadius: '.4rem',
    boxShadow: 24,
    p: 0,
};
const ModalBox = ({ open,type,handleClose,noteValue,setNoteValue,editNoteIndex,setBtnLabel}) => {
    const [subject,setSubject]=useState('');
    const [description,setDescription]=useState('');
    const [category,setCategory]=useState('');
    const [categorybg,setCategoryBg]=useState('')
    useEffect(() => {
        if (editNoteIndex !== -1 && noteValue[editNoteIndex]) {
          setSubject(noteValue[editNoteIndex].subject);
          setDescription(noteValue[editNoteIndex].description);
          setCategory(noteValue[editNoteIndex].category);
          setCategoryBg(noteValue[editNoteIndex].cardbg);
        }
      }, [editNoteIndex, noteValue]);
      
    const handleSelect=(event)=>{
       const category =event.target.value;
       const bg =options.find((option)=>option.value===category)?.bgcolor||'#fff'
    
       if(category==='default'){
        return;

       }
       else{
        setCategory(category)
        setCategoryBg(bg)
       }
     }
   
  
     const handleForm = (event) => {
        event.preventDefault();
      
        if (type === 'Add') {
            let values = {
                subject: subject,
                description: description,
                category: category,
                cardbg: categorybg,
              };
     
          setNoteValue([...noteValue, values]);
          setDescription('');
          setSubject('');
          setCategory('');
          setBtnLabel('all')
        } 
        else if (type === 'Update') {
            // Update existing note
            let updatedNoteValue = [...noteValue];
            updatedNoteValue[editNoteIndex] = {
              subject: subject,
              description: description,
              category: category,
              cardbg: categorybg,
            };
            setNoteValue(updatedNoteValue);
        
          }
        handleClose();
      };
      

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className="modal-title px-4 mt-4">
                        <h4 >Add Note</h4>
                        <hr />
                    </div>
                    <div className="form-group px-4 mt-4">
                        <form action="" method="get" onSubmit={handleForm}>
                            <div className="row">
                                <div className="col-8">
                                    <input 
                                    type="text" 
                                    value={subject}
                                    className="form-control" 
                                    placeholder='Add title...' 
                                    onChange={(event)=>setSubject(event.target.value)}
                                    required
                                    />
                                </div>
                                <div className="col-4">
                                    <select 
                                    className="form-select form-control" 
                                    aria-label="select category"
                                    name='category'
                                   onChange={handleSelect}
                                   value={category}
                                    >
                                        <option value ='default'>Select Category</option>
                                        {
                                            options.map((option, key) => {
                                                return <option key={key}  value={option.value}>{option.label}</option>
                                            })
                                        }
                                    </select>

                                </div>
                                <div className="col-8">
                                    <div className="form-group">

                                        <textarea
                                            sx={{resize:"none !important"}}
                                            className="form-control"
                                            id="description"
                                            value={description}
                                            placeholder='Add description...'
                                            rows="10"
                                            name='description'
                                            onChange={(event)=>setDescription(event.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                   
                                </div>
                                <div className="col-12 mb-4">
                                         <Stack direction="row">
                                            <Box sx={{ flexGrow: 1, fontWeight:'600'}}  /> 
                                            <Button variant="text" sx={{fontWeight:'800',fontSize:'1.1rem'}} onClick={handleClose}>cancel</Button>
                                            <Button type='submit' variant="text" sx={{fontWeight:'800',fontSize:'1.1rem'}} >{type}</Button>
                                        </Stack>
                                    </div>
                            </div>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalBox;