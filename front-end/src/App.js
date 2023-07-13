import logo from './logo.svg';
import './App.css';
import SideNav from './components/common/SideNav';
import Navbar from './components/common/Navbar';
import UserCard from './components/common/UserCard';
import { Link, BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dependents from './pages/Dependents';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import EditDependent from './pages/EditDependent';
import Profile from './pages/Profile';
import Chatbot from './components/common/Chatbot';
import CardPage from './pages/card'; 
import AppointmentsPage from './pages/appointments';
import VirtualPage from './pages/vr';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/dependents" element={<Dependents/>} />
        <Route path='/Locations' element={<CardPage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Signup' element={<SignupPage />} />
        <Route path='/EditDependent' element={<EditDependent />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path='/Appointments' element={<AppointmentsPage />} />
        <Route path='/vr' element={<VirtualPage />} />
        
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
