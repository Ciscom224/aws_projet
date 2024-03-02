import { useRef, useState } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";

const Profile = () => {
  const avatarUrl = useRef(
    "https://avatarfiles.alphacoders.com/161/161002.jpg"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const updateAvatar = (imgSrc) => {
    avatarUrl.current = imgSrc;
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="relative" onMouseEnter={() => setIsHovered(true)}  onMouseLeave={() => setIsHovered(false)}>
        <img
          src={avatarUrl.current}
          alt="Avatar"
          className="w-[60px] h-[60px] rounded-full border-2 border-gray-400"
        />
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-600"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <PencilIcon />
        </button>
      </div>
      {isHovered && ( // Affiche le nom uniquement si isHovered est vrai
        <h2 className="text-[#e0c758] font-bold mt-2">{localStorage.getItem('name')}</h2>
      )}
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
