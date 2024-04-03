import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import NavBar from '../components/navbar';
import HomePage from './home.page';
import GamePage from './game.page';
import CategoryPage from './category.page';
import { UidContext } from '../AppContext';
import { useDispatch } from 'react-redux';

import { getUser } from '../actions/user.actions';

function App() {
  const dispatch = useDispatch()
  const [backgroundImage, setBackgroundImage] = useState("url('/images/menu_bg.jpg')");
  const [uid, setUid] = useState(null)


  const changeBgImage = (image) => {
    setBackgroundImage(image);
  };
  useEffect(() => {
    async function checkAuth() {
      await axios({
        method: "get",
        url: `${process.env.REACT_APP_API_URL}jwtid`,
        withCredentials: true,
      }).then((res) => {
        if (res.status !== 200) {
          setUid(res.data)
        }
      })
        .catch((err) => console.log(err));
    }
    checkAuth()

    if (uid) dispatch(getUser(uid));

  }, [uid])

  return (
    <UidContext.Provider value={uid}>
      <Router>
        <div className="w-full h-screen bg-cover bg-center overflow-hidden " style={{ backgroundImage }}>
          <NavBar />
          <main >
            {
              uid ? 
              <div class="fixed bottom-10 left-7">
              <button class="bg-amber-500 hover:bg-amber-700 text-white font-bold py-4 px-4 rounded-full shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-6 w-6 text-white">
                  <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h96v80c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64z" />
                </svg>
              </button>
            </div>
              :null
            }
          
            <Routes>
              <Route exact path="/" element={<HomePage changeBgImage={changeBgImage} />} />
              <Route path="/games" element={<GamePage changeBgImage={changeBgImage} />} />
              <Route path="/game-categories" element={<CategoryPage changeBgImage={changeBgImage} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UidContext.Provider>
  );
}
export default App;
