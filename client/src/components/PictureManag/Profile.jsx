/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccessibleBadges from "../NotificationIcon";
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import { useSelector } from "react-redux";
// import Friends from "./frends.component";
import Friends from "../Friends.component";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const ProfileUser = ({ setIsLogin }) => {
  const userData = useSelector((state) => state.userReducer);
  const navigate = useNavigate();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => setOpenDrawer(!openDrawer);
  const disconnect = async () => {
    await axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL}api/user/logout`,
      withCredentials: true,
    }).then((res) => {
      setIsLogin(false);
      navigate("/");
      setTimeout(() => {
        window.location.reload();
      }, 500);

      //   toast(res.data.message)
    });
  };

  useEffect(() => {
    console.log("user : ", userData);
  }, [userData]);
  return (
    <div>
      <Menu as="div" className="relative ml-3">
        <div>
          <div>
            <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Open user menu</span>
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Avatar"
                className="w-[45px] rounded-full border-2 border-gray-400 "
                title="Profil"
                id="Profil"
                // onClick={}
              />
              {userData.online && (
              <div className="absolute  -bottom-0.5 left-8 right-0 m-auto w-fit  rounded-full bg-gray-800 hover:bg-gray-700 border border-gray-950">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            )}
            
            </Menu.Button>
          </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-5 w-48 origin-top-right rounded-md bg-black opacity-75 py-1 shadow-lg orange-300 orange-black ring-opacity-2 focus:outline-none">
            <Menu.Item>
              <h2
                href="#"
                className="block px-4 py-2 text-md font-semibold text-white text-center uppercase"
              >
                {userData.surName}
              </h2>
            </Menu.Item>
            <hr />
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-900" : "",
                    "block px-4 py-2 text-sm font-semibold text-white"
                  )}
                >
                  Parametre
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-900" : "",
                    "block px-4 py-2 text-sm font-semibold text-white"
                  )}
                  onClick={toggleDrawer}
                >
                  Amis
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-900" : "",
                    "block px-4 py-2 text-sm font-semibold text-white"
                  )}
                >
                  Classement
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  onClick={disconnect}
                  href="#"
                  className={classNames(
                    active ? "bg-gray-900" : "",
                    "block px-4 py-2 text-sm text-white font-semibold"
                  )}
                >
                  Deconnexion
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
      <Friends isOpen={openDrawer} onClose={toggleDrawer} />
    </div>
  );
};

export default ProfileUser;
