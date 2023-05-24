import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const NoteProgress = ({count}) => {
 
  return (
   <>
   <div className="progressp d-flex flex-column">
    <div className="progress-title ">
        <p className="text-start text-secondary">
            You have {count} totals notes
        </p>
    </div>
    <div className="progressbar mb-3">
    <Box sx={{ width: '100%' }}>
      <LinearProgress />
    </Box>
    </div>
   
   </div>
   </>
  )
}

export default NoteProgress