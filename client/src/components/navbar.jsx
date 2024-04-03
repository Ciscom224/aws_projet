/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState, useEffect, useContext } from 'react'
import { Disclosure } from '@headlessui/react'
import { UidContext } from '../AppContext';
import ProfileUser from './profile';
import AuthUser from '../pages/auth';



export default function NavBar() {

    const [isLogin, setIsLogin] = useState(false);
    const [openAuth, setOpenAuth] = useState(false)
    const uid = useContext(UidContext);
 
    useEffect(() => {
        if (uid) setIsLogin(true)
    }, [uid])
    const closeAuth = () => {
        setOpenAuth(false);
    };



    return (
        <Disclosure as="nav" className="bg-gray-800 opacity-80 ">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-4 ">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-auto max-h-8 w-auto max-w-full"
                                        src="/images/LogoQuizWiz.png"
                                        alt="Votre entreprise"
                                    />
                                </div>

                                <div className="hidden sm:ml-6 sm:block">
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                                {/* Profile dropdown */}
                                {isLogin ? <ProfileUser setIsLogin={setIsLogin} />
                                    :
                                    <>
                                        <a onClick={() => setOpenAuth(true)}
                                            href="#"
                                            className='text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'>
                                            Connexion
                                        </a>
                                    </>


                                }
                            </div>
                        </div>
                    </div>
                    {openAuth ? <AuthUser openAuth={openAuth} onClose={closeAuth} setIsLogin={setIsLogin} /> : null}
                </>
            )}
        </Disclosure>
    )
}
