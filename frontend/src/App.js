
import {Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import ContextObject from './ContextObject'
import NavBar from './NavBar'
import Homepage from './Homepage'
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import Login from './Login'
import Logout from './Logout'
import Signup from './Signup'
import Profile from './Profile'
// import {jwt} from 'jsonwebtoken'
import {jwtDecode} from 'jwt-decode';
import JoblyApi from './api'
import './App.css'


function App() {
  // const [loggedIn, setLoggedIn] = useState(false)
  //###############################null?
  const [currentUser, setCurrentUser] = useState('')
  const [token, setToken] = useState(null)
  
  // const [signedUp, setSignedUp] = useState(false)
//   const [token, setToken] = useLocalStorage(TOKEN_KEY='jobly-token')
// //sychronize state with browser's local storage; state persists even when page refreshed, etc.
//   function useLocalStorage(key, defaultValue=null) {
//     //#initialize state with value retrieved from local storage
//     const initialValue = localStorage.getItem(key) || defaultValue
//     const [localstorageItem, setLocalStorageItem] = useState(initialValue)
//     useEffect(function setKeyInLocalStorage(){
//       if(localstorageItem===null) {
//         localStorage.removeItem(key)
//       } else {
//         localStorage.setItem(key, localstorageItem)
//       }
//     }, [key, localstorageItem]);
  
//     return [localstorageItem, setLocalStorageItem]
//   }
  useEffect(function userInfo(){
    async function getUserInfo() {
      if(token) {
        try {
          let {username} = jwtDecode(token)
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
         ;

      } catch (err) {
        console.error('problem loading user info', err)
        setCurrentUser(null)
      }
    } 
    
    } getUserInfo()
  }, [token])


  return (
    <>
    <ContextObject.Provider value={{token, setToken, currentUser, setCurrentUser}}>
    <NavBar />
    {/* <CurrentUser /> */}
    <Routes>
    {/**Can I wrap .Provider around a Route definition? */}
      
      <Route path='/' element={<Homepage />}/>
      {/**list all companies */}
      <Route path='/companies' element={<Companies />} />
      {/**view details of this company */}
      <Route path='/companies/:handle' element={<Company />} />
      {/**List all jobs */}
      <Route path='/jobs' element={<Jobs />} />
      {/**Login/signup  */}
      <Route path='/login' element={<Login />} />
      {/**Signup form */}
      <Route path='/signup' element={<Signup />} />
      {/**Edit profile page */}
      <Route path='/profile'  element={<Profile />}/>
      <Route path='/logout' element={<Logout />}/>
    

    </Routes>
    </ContextObject.Provider>
  
    </>
  )

}

export default App;
