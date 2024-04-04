import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { UidContext } from '../AppContext';
import { useDispatch } from 'react-redux';

import { getUser } from '../actions/user.actions';
import Home from './Home.page';
import Games from './Games';
import QuizChoice from './QuizChoice';
import NavBar from '../components/NavBar.component';

function App() {
  const dispatch = useDispatch()
  const [uid, setUid] = useState(null)

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
        <div className="w-full h-screen bg-cover  bg-center overflow-hidden " style={{ backgroundImage: "url('/images/Background/menu_bg.jpg')" }}>
          <NavBar/>
          <main className='border-2 border-rose-300 h-screen '>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/games/quizchoice" element={<QuizChoice />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UidContext.Provider>
  );
}
export default App;