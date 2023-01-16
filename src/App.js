import { Route, Routes } from 'react-router-dom';
import './App.css';
import Earplug from './Pages/Earplug/Earplug';
import FireFighting from './Pages/FireFighting/FireFighting';
import Home from './Pages/Home/Home';
import MedicalMalpractice from './Pages/MedicalMalpractice/MedicalMalpractice';
import NEC from './Pages/NEC/NEC';
import Notfound from './Pages/Notfound/Notfound';
import RoundUp from './Pages/RoundUp/RoundUp';
import SexAbuse from './Pages/SexAbuse/SexAbuse';
import TalcumPowder from './Pages/TalcumPowder/TalcumPowder';
import Zantac from './Pages/Zantac/Zantac';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/earplug' element={<Earplug />} />
      <Route path='/firefighting' element={<FireFighting />} />
      <Route path='/personalinjury' element={<MedicalMalpractice />} />
      <Route path='/nec' element={<NEC />} />
      <Route path='/zantac' element={<Zantac />} />
      <Route path='/talcumpowder' element={<TalcumPowder />} />
      <Route path='/sexabuse' element={<SexAbuse />} />
      <Route path='/roundup' element={<RoundUp />} />
      <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
