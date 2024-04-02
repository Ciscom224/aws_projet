import { useRef, useState ,useEffect } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import ProfileMenu from "../ProfileMenu";

const Profile = (props) => {
  const avatarUrl = useRef(localStorage.getItem("img") !== null ? localStorage.getItem("img") : "https://avatarfiles.alphacoders.com/161/161002.jpg")
  const [modalOpen, setModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  

  const updateAvatar = (imgSrc) => {
    localStorage.setItem("img",imgSrc)
    avatarUrl.current = imgSrc;
  };
  const handlePicture = () => {
    if (props.navig) {
      setIsClicked(!isClicked)
    }
  }

  
    useEffect(() => {
      if (props.navig) {
      const handleClickOutside = (event) => {
        if (isClicked) {
          const sidebar = document.getElementById('sidebar');
          const profilImage = document.getElementById('Profil');
          if (sidebar && !sidebar.contains(event.target) && profilImage && !profilImage.contains(event.target)) {
            setIsClicked(false);
          }
        
        }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
    }, [isClicked]);

  return (
    
    <div className="flex-col items-center">
      <div className="relative">
        <img
          src={avatarUrl.current}
          alt="Avatar"
          className={` ${props.classment ? 'w-[45px] ':'w-[60px]'}  rounded-full border-2 border-gray-400 `}
          title="Profil"
          id = "Profil"
          onClick={handlePicture}
        />
        {props.online && <div className="absolute  -bottom-0.5 left-1 right-0 m-auto w-fit  rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-950">
          <div class="w-3 h-3 bg-green-500 rounded-full"></div>
        </div> }
        {props.navig && <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
          
        </button>}
        <div className="absolute top-20 right-[115px] "><ProfileMenu  isClicked={isClicked}  /> </div>
      </div>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Profile;
