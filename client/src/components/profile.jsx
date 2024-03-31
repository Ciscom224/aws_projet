/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AccessibleBadges from "./NotificationIcon";
import { Menu, Transition } from "@headlessui/react";
import axios from "axios";
import { useSelector } from "react-redux";
import userReducer from "./../reducers/user.reducer";
import Friends from "./frends.component";
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
      navigate("/");
      setIsLogin(false);
     
      //   toast(res.data.message)
    });
  };
 
  useEffect(() => {
    console.log("user : ",userData)
  }, [userData]);
  return (
    <div>
      <Menu as="div" className="relative ml-3">
        <>
          <div
            className="hidden fixed right-[150px] md:flex"
            title="Notifications"
          >
            <AccessibleBadges type={"notif"} />
          </div>
          <div className="hidden fixed right-[250px] md:flex" title="Messages">
            <AccessibleBadges type={"msg"} />
          </div>
        </>
        <div>
          <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
            <span className="absolute -inset-1.5" />
            <span className="sr-only">Open user menu</span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </Menu.Button>
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
          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-black py-1 shadow-lg orange-300 orange-black ring-opacity-2 focus:outline-none">
            <Menu.Item>
              <h2
                href="#"
                className="block px-4 py-2 text-md text-orange-300 text-center uppercase"
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
                    "block px-4 py-2 text-sm text-orange-300"
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
                    "block px-4 py-2 text-sm text-orange-300"
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
                    "block px-4 py-2 text-sm text-orange-300"
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
                    "block px-4 py-2 text-sm text-orange-300"
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
