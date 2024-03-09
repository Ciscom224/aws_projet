
import ReportIcon from '@mui/icons-material/Report';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Alert from '@mui/joy/Alert';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';

const AlertVariousStates = (props)=> {

    const [color,setColor] = useState(props.type ? 'success' : 'danger')
    const [msg,_] = useState(props.message)
    const [title,setTitle] = useState(props.type ? 'Succes' : 'Erreur')
    const [icon,setIcon] = useState(props.type ? <CheckCircleIcon /> : <ReportIcon />)


  return (
    <Box sx={{ display: 'flex', gap: 2, width: '100%', flexDirection: 'column' }}>
      
        <Alert
          key={title}
          sx={{ alignItems: 'flex-start' }}
          startDecorator={icon}
          variant="soft"
          color={color}
          endDecorator={
            <IconButton variant="soft" color={color}>
              <CloseRoundedIcon />
            </IconButton>
          }
        >
          <div>
            <div>{title}</div>
            <Typography level="body-sm" color={color}>
              {msg}
            </Typography>
          </div>
        </Alert>
      
    </Box>
  );
}

export default AlertVariousStates