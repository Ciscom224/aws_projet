import { useRef, useState ,useEffect } from "react";
import PencilIcon from "./PencilIcon";
import Modal from "./Modal";


// Il existe 3 props possible : props.navig permet de savoir si on est dans la barre de navigation ou pas / props.online : permet de savoir si on est en ligne ou pas pour la page amis
// et le props.classment est la pour gérer la taille de la photo de profil car on l'appelle juste dans la page classement pour l'instant
const Profile1 = (props) => {

  // ce UseRef va nous permettre de récupérer l'image locale de l'utilisateur s'il en a une et sinon on en met une personnalisé
  // Bien sur quand elle sera connecté au backend on demandera juste la photo car le backend gère déja les photo par défault
  const avatarUrl = useRef("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80")
  const [modalOpen, setModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  
  // Fonction lorsqu'on change de photo de profil 
  const updateAvatar = (imgSrc) => {
    localStorage.setItem("img",imgSrc)
    avatarUrl.current = imgSrc;
  };
  // Rajout test
  // Fonction pour le cas du menu et savoir si on a cliqué sur la Photo de profil de la navigBar ou pas
  const handlePicture = () => {
    if (props.navig) {
      setIsClicked(!isClicked)
    }
  }

    // Cet useEffect permet de fermer le menu du profil en cas de event (mouse) de dehors du menu et photo de profil et se met a jour a chaque clic
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

export default Profile1;