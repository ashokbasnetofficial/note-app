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
const date = new Date();
const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const NoteList = () => {
    return (
        <div className="notelist mt-5">
            <NoteProgress />
            <div className="row">
                <div className="col-6">
                 <Card sx={{backgroundColor:'#5c6bc0'}}>
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
                        title="Home Related Detail"

                    />

                    <CardContent>
                        <Typography variant="body1" sx={{color:'white'}}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    
                        <Typography variant="subheading1" sx={{color:'white'}}>
                           {formattedDate}
                        </Typography>
                    </CardContent>

                </Card>
            </div>
            <div className="col-6">
            <Card sx={{backgroundColor:'#88c98b'}}>
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
                        title="Home Related Detail"

                    />

                    <CardContent>
                        <Typography variant="body1" sx={{color:'white'}}>
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    
                        <Typography variant="subheading1" sx={{color:'white'}}>
                           {formattedDate}
                        </Typography>
                    </CardContent>

                </Card>
            </div>
           
        </div>
</div>

    )
}

export default NoteList