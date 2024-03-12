import { useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";
import Side_bar from "../SideBarPicture";

const Profile = () => {
  const avatarUrl = useRef(
    "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };
  const handlePicture = () => {
    setIsClicked(!isClicked)
  }

  return (
    <div className="flex flex-col items-center relative">
      <div className="relative">
        <img
          src={avatarUrl.current}
          alt="Avatar"
          className="w-[60px] h-[60px] rounded-full border-2 border-gray-400"
          title="Profil"
          onClick={handlePicture}
        />
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
        </button>
      </div>
      
      <Side_bar  isClicked={isClicked}  /> 
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
