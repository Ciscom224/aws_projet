import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import { GoTrophy } from "react-icons/go";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import React,{useState, useEffect} from "react"
import NotificationMenu from './NotificationMenu';
import { useNavigate } from 'react-router-dom';


function notificationsLabel(count) {
    if (count === 0) {
      return 'no notifications';
    }
    if (count > 99) {
      return 'more than 99 notifications';
    }
    return `${count} notifications`;
  }
  
  export default function NotificationIcon(props) {

    const [friendsToAdd,setFriendsToAdd] = useState(["1er","Yanis","Cristiano Ronaldo","Farouk","Yanis","Cristiano Ronaldo","Farouk"])
    const [isClicked, setIsClicked] = useState(false);
    const [count,setCount] = useState(friendsToAdd.length)
    const navigate = useNavigate()

    const updateCount = () => {
      setCount(friendsToAdd.length - 1 );
    }
    useEffect(() => {
      
      const handleClickOutside = (event) => {
        
        if (isClicked) {
          
          const button = document.getElementById("icon");
          const icon = document.getElementById(props.type);
          if ( button && !button.contains(event.target) && icon && !icon.contains(event.target)) {
            setIsClicked(false);
          }
      };
    }

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    
    }, [isClicked]);

    const handleClick = () => {
      setIsClicked(!isClicked)
      if (props.type == "classment") {navigate("/classement")}
    }

    return (
      <>
      <IconButton aria-label={notificationsLabel(100)}  onClick={handleClick} id="icon" color="inherit">
        <Badge badgeContent={props.type === "notif" ? count : 0} color="error">
          {props.type == "notif" && <NotificationsOutlinedIcon sx={{ fontSize: 30 }} style={{ color: '#d3dbe8' }}/>}
          {props.type == "msg" && <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: 25 }} style={{ color: '#d3dbe8' }}/>}
          {props.type == "classment" && <GoTrophy sx={{ fontSize: 30 }} style={{ color: '#d3dbe8' }}/>}
        </Badge>
      </IconButton>
      {props.type == "notif" && <div className="absolute top-20 right-[240px] "><NotificationMenu  isClicked={isClicked} updateCount={updateCount} setFriendsToAdd={setFriendsToAdd} friendsToAdd={friendsToAdd} /> </div>}
      </>
    );
  }