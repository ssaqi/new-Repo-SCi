import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Sign from './Components/Sign/Sign.jsx';
import {Route , Routes} from 'react-router-dom';
import ResentImg from './Components/Resend/ResentImg';
import LoginImg from './Components/Login/LoginImg';
import Dashhboard from './Components/Dashboard/Dashhboard';
import Home from './Components/Home/Home';
import Dashboard from './Components/DashboardFeatures/Dashboard';
import Account from './Components/DashboardFeatures/Account';
import Pkg from './Components/Package details/Pkg';

function App() {
  return (
     <>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/sign' element={<Sign/>}/>
      <Route path='/resent' element={<ResentImg/>}/>
      <Route path='/login' element={<LoginImg/>}/>
      <Route path='/Dashboard' element={<Dashhboard/>}/>
      <Route path='/DashboardFeatures' element={<Dashboard/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/Packagedetails' element={<Pkg/>}/>  
     </Routes>
   
     </>
  );
}

export default App;
