import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import quizReducer from "../../reducers/quiz.reducer";
import Question from "../../components/Admin/Question.admin.component";
import UserManagment from "../../components/Admin/UserManagment.admin.component";
import Swal from "sweetalert2";

function Admin() {
  const [page, setPage] = useState(0);
  const [admin, setAdmin] = useState(false);
  const quiz = useSelector((state) => state.quizReducer);

  const disconect = async () => {
    const { value: password } = await Swal.fire({
      title: "Mot de passe admin",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off",
      },
    });

    if (password !== "admin_aws@123") {
      setAdmin(true);
    }
  };

  useEffect(() => {
    if (!admin) disconect();
  }, [page, admin]);

  return (
    admin && (
      <>
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-amber-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open sidebar</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        <aside
          id="logo-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-black bg-opacity-65">
            <a href="#" className="flex items-center ps-2.5 mb-5 ">
              <img
                src="/images/hibou.png"
                className="h-6 me-3 sm:h-7 border rounded-lg"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
                Admin
              </span>
            </a>
            <ul className="space-y-2 font-medium">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg  hover:bg-amber-500  group"
                  onClick={() => setPage(0)}
                >
                  <svg
                    className="w-5 h-5 text-amber-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3">Tableau de Board</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg  hover:bg-amber-500  group"
                  onClick={() => setPage(1)}
                >
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="flex-shrink-0 w-5 h-5 text-amber-500 transition duration-75  group-hover:text-gray-700 dark:group-hover:text-white"
                  />

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Questions{" "}
                  </span>
                  <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-amber-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                    56
                  </span>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg  hover:bg-amber-500 group"
                  onClick={() => setPage(2)}
                >
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-amber-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span className="flex-1 ms-3 whitespace-nowrap">Joueurs</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 text-white rounded-lg  hover:bg-amber-500 group"
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    className="flex-shrink-0 w-5 h-5 text-amber-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white"
                  />

                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Deconnexion
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </aside>

        <div className="sm:ml-64 p-4 ">
          <div className="h-screen   rounded bg-black bg-opacity-65">
            {page === 0 ? (
              <h1>Board</h1>
            ) : page === 1 ? (
              <Question />
            ) : page === 2 ? (
              <UserManagment />
            ) : null}
          </div>
        </div>
      </>
    )
  );
}

export default Admin;
