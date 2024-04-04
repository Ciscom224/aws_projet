import React, { useEffect, useState, useContext } from "react";
//import { ImMenu,ImMenu3  } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import ConnexionC from "./Auth/ConnexionC";
import Profile from "./PictureManag/Profile";
import NotificationIcon from "./NotificationIcon";
import "react-image-crop/dist/ReactCrop.css";
import { useAuthStore, useRemovedMenu } from "../store";
import { UidContext } from "../AppContext";
// import ProfileUser from './profile';
import AuthUser from "../pages/Auth.page";

// Composant permettant d'afficher la barre de navigation dans notre page
const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [openAuth, setOpenAuth] = useState(false);
  const uid = useContext(UidContext);

  useEffect(() => {
    if (uid) setIsLogin(true);
  }, [uid]);
  const closeAuth = () => {
    setOpenAuth(false);
  };
  // Location permet de récupérer l'url de la page actuelle et qu'on utilise dans handleLogo
  const location = useLocation();
  const navigate = useNavigate();

  const setFalse = useRemovedMenu((state) => state.setFalse);
  const setTrue = useRemovedMenu((state) => state.setTrue);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const [loginOpen, setLoginOpen] = useState(false);

  // Ici en fonction de si l'user est dans la page d'accueil ou pas, on le renvoie a la page d'accueil s'il clique sur le logo
  const handleLogo = () => {
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      setLoginOpen(false);
      setFalse();
    }
  };

  const handleLogin = () => {
    console.log("login");
    setLoginOpen(!loginOpen);
    if (loginOpen) {
      setFalse();
    } else {
      setTrue();
    }
  };
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-20 flex items-center bg-[#181717] bg-opacity-65">
        <div className=" text-3xl font-bold fixed left-[5%] flex items-center ">
          <button onClick={handleLogo}>
            <img
              src="/images/LogoQuizWiz.png"
              alt="Logo"
              className="hidden sm:inline-block"
            />
          </button>
        </div>

        {!isLogin ? (
          <button
            className="fixed right-12  w-[100px]  mx-auto "
            onClick={handleLogin}
          >
            <a
              onClick={() => setOpenAuth(true)}
              href="#" className="text-gray-300 font-semibold border-2 border-yellow-500 hover:bg-yellow-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium "
            >
              Connexion
            </a>
          </button>
        ) : (
          <>
            <div
              className="hidden fixed right-[150px] md:flex"
              title="Notifications"
            >
              <NotificationIcon type={"notif"} />
            </div>
            <div
              className="hidden fixed right-[250px] md:flex"
              title="Messages"
            >
              <NotificationIcon type={"msg"} />
            </div>
            <div
              className="hidden fixed right-[350px] md:flex"
              title="Classements"
            >
              <NotificationIcon type={"classment"} />
            </div>
            <div className="flex fixed right-10">
              <Profile navig={true} classment={false} />
            </div>
          </>
        )}
      </div>
      {openAuth ? <AuthUser openAuth={openAuth} onClose={closeAuth} setIsLogin={setIsLogin} /> : null}
    </>
  );
};

export default NavBar;
