import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import React,{useState} from "react"

function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }
  
  export default function AccessibleBadges() {

    const [count,setCount] = useState(0)

    const incrementCount = () => {
        setCount(count+1)
    }

    return (
      <IconButton aria-label={notificationsLabel(100)} sx={{ fontSize: 30 }} onClick={incrementCount} >
        <Badge badgeContent={count} color="error">
          <NotificationsIcon fontSize='' style={{ color: '#000000' }}/>
        </Badge>
      </IconButton>
    );
  }