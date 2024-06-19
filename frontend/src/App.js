
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar'
import Homepage from './Homepage'
import Companies from './Companies'
import Company from './Company'
import Jobs from './Jobs'
import Login from './Login'
import Signup from './Signup'
import Profile from './Profile'

import './App.css'


function App() {
  return (
    <>
    
    <NavBar />
    <Routes>

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

    </Routes>
  
    </>
  )

}

export default App;
