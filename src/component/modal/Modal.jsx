import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
const options = [
    {
        value: 'Select Category',
        label: 'Select Category',
    },
    {
        value: 'home',
        label: 'Home',
    },
    {
        value: 'personal',
        label: 'Personal',
    },
    {
        value: 'work',
        label: 'Work',
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
const ModalBox = ({ open, handleClose }) => {


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
                        <form action="" method="get">
                            <div className="row">
                                <div className="col-8">
                                    <input type="text" className="form-control" placeholder='Add title...' />
                                </div>
                                <div className="col-4">
                                    <select class="form-select form-control" aria-label="Default select example">
                                        <option selected>Select Category</option>
                                        {
                                            options.map((option, key) => {
                                                return <option key={key} value={option.value}>{option.label}</option>
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
                                            placeholder='Add description...'
                                            rows="10"
                                          
                                        ></textarea>
                                    </div>
                                   
                                </div>
                                <div className="col-12 mb-4">
                                         <Stack direction="row">
                                            <Box sx={{ flexGrow: 1, fontWeight:'600'}}  /> 
                                            <Button variant="text" sx={{fontWeight:'800',fontSize:'1.1rem'}} onClick={handleClose}>cancel</Button>
                                            <Button variant="text" sx={{fontWeight:'800',fontSize:'1.1rem'}}>add</Button>
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