import React,{useState} from 'react'

import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import NoteProgress from './NoteProgress';
import ModalBox from '../../modal/Modal';

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});

const NoteList = (props) => {
   const[updateopen,setUpdateOpen]=useState(false);
   const [editNoteIndex, setEditNoteIndex] = useState(null);

 

    const handleDelete=(key)=>{

      const updateNote = [...props.noteValue]
      updateNote.splice(key,1)
       props.setNoteValue(updateNote)
    }
    const handleCloseUpdate =()=>setUpdateOpen(false)
    const editNote =(key)=>{
         setUpdateOpen(true)
         setEditNoteIndex(key)
    }

    return (
        <div className="notelist mt-5">
            <NoteProgress />
            <div className="row">
             {
                props.noteValue.map((value,key)=>{
                    return <div className="col-6 mt-4 " key={key}>
                    <Card sx={{backgroundColor:value.cardbg}}>
                       <CardHeader sx={{
                        color:'white',
                        typography:{
                            fontSize:'1.5rem'
                        }
                       }}
                           avatar={
                               <IconButton>
                                   <Checkbox />
                               </IconButton>
                           }
                           action={
                               <div>
                                   <IconButton>
                                       <EditIcon onClick ={()=>editNote(key)} />
                                   </IconButton>
                                   <IconButton>
                                       <DeleteIcon onClick={()=>handleDelete(key)}/>
                                   </IconButton>
                               </div>
                           }
                        title={value.subject}
   
                       />
   
                       <CardContent>
                           <Typography variant="body1" sx={{color:'white'}}>
                              {value.description}
                           </Typography>
                       
                           <Typography variant="subheading1" sx={{color:'white'}}>
                              {formattedDate}
                           </Typography>
                       </CardContent>
   
                   </Card>
               </div>
                })
             }
           
        </div>
        <ModalBox 
        open={updateopen}
        type='Update'
        handleClose={handleCloseUpdate}
        noteValue={props.noteValue}
        setNoteValue={props.setNoteValue}
        editNoteIndex={editNoteIndex}
        />
</div>

    )
}

export default NoteList