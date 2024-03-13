import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { GoTrophy } from "react-icons/go";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
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
  
  export default function AccessibleBadges(props) {

    const [count,setCount] = useState(0)

    const incrementCount = () => {
        setCount(count+1)
    }

    return (
      <IconButton aria-label={notificationsLabel(100)} onClick={incrementCount}  color="inherit">
        <Badge badgeContent={count} color="error">
          {props.type == "notif" && <NotificationsOutlinedIcon sx={{ fontSize: 30 }} style={{ color: '#d3dbe8' }}/>}
          {props.type == "msg" && <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 25 }} style={{ color: '#d3dbe8' }}/>}
          {props.type == "classment" && <GoTrophy sx={{ fontSize: 30 }} style={{ color: '#d3dbe8' }}/>}
        </Badge>
      </IconButton>
    );
  }