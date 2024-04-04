import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { UidContext } from '../AppContext';
import { useDispatch } from 'react-redux';

import { getUser } from '../actions/user.actions';

import NavBar from '../components/NavBar.component';
import Boutons from '../components/Boutons';
import { useRemovedMenu } from '../store';



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
  // On remove le Menu (image + catalogue) si on clique sur inscription et autre
  const MenuRemoved = useRemovedMenu((state) => state.isRemoved)



  return (
    <UidContext.Provider value={uid} >
      <div className="fixed w-full h-full bg-cover bg-center " style={{ backgroundImage: "url('/images/Background/menu_bg.jpg')" }}>

        <NavBar uid={uid} />
        {!MenuRemoved ? <div className='fixed w-full h-1/3 m-auto '><Boutons uid={uid} /></div> :
          ""}
      </div>
    </UidContext.Provider>



  );
}

export default App;
