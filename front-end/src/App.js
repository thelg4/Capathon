import logo from './logo.svg';
import './App.css';
import SideNav from './components/common/SideNav';
import Navbar from './components/common/Navbar';
import UserCard from './components/common/UserCard';

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <UserCard />
      </div>
      
    </div>
  );
}

export default App;
