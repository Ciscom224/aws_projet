/* eslint-disable react-hooks/exhaustive-deps */
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
  const dispatch=useDispatch()
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
        if(res.status!==200) {
          setUid(res.data)
        }
      })
      .catch((err)=>console.log(err));
    }
    checkAuth()
 
    if(uid) dispatch(getUser(uid));
 
}, [uid])

  return (
    <UidContext.Provider value={uid}>
      <Router>
        <div className="w-full h-screen bg-cover bg-center overflow-hidden " style={{ backgroundImage }}>
          <NavBar />
          <main >
            
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
