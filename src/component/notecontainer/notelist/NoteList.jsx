import React from 'react'

import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import NoteProgress from './NoteProgress';

const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const NoteList = (props) => {
    return (
        <div className="notelist mt-5">
            <NoteProgress />
            <div className="row">
             {
                props.noteValue.map((value)=>{
                    return <div className="col-6 mt-4 ">
                    <Card sx={{backgroundColor:value.cardbg}}>
                       <CardHeader sx={{color:'white'}}
                           avatar={
                               <IconButton>
                                   <Checkbox />
                               </IconButton>
                           }
                           action={
                               <div>
                                   <IconButton>
                                       <EditIcon />
                                   </IconButton>
                                   <IconButton>
                                       <DeleteIcon />
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
</div>

    )
}

export default NoteList