import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate  } from 'react-router-dom';
import axios from 'axios';
import { UidContext } from '../AppContext';
import { useDispatch } from 'react-redux';

import { getUser } from '../actions/user.actions';
import Home from './Home.page';
import Games from './Games';
import QuizChoice from './QuizChoice';
import NavBar from '../components/NavBar.component';
import Error from './Error.page';
import Admin from './admin/home.admin.page';
import Classement from './Classement.jsx';
import Quiz from './Quiz.jsx';

function App() {
  const dispatch = useDispatch()
  const [uid, setUid] = useState(null)
  const [loginOpen,setLoginOpen] = useState(false)


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
        <div className="w-full h-screen bg-cover bg-center overflow-hidden" style={{ backgroundImage: "url('/images/Background/menu_bg.jpg')" }}>
          <NavBar setLoginOpen={setLoginOpen} loginOpen={loginOpen}/>
          <main >
            <Routes>
            <Route path="/" element={<Home setLoginOpen={setLoginOpen} loginOpen={loginOpen}/>} />
              <Route path="/admin" element={<Admin/>} />
              <Route path="/classement" element={uid ? <Classement/>: <Navigate to="/" />} />
              <Route path="/games" element={ uid ? <Games />:<Navigate to="/" />}/>
              <Route path="/games/quiz" element={ uid ? <Quiz />:<Navigate to="/" />}/>
              <Route path="/games/quizchoice" element={ uid ? <QuizChoice />: <Navigate to="/"/>} />
              <Route path="*" element={<Error/>} />
            </Routes>
          </main>
        </div>
      </Router>
    </UidContext.Provider>
  );
}
export default App;
