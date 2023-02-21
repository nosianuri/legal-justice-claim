import { Route, Routes } from 'react-router-dom';
import './App.css';
import CampLejeune from './Pages/CampLejeune/CampLejeune';
import Earplug from './Pages/Earplug/Earplug';
import FireFighting from './Pages/FireFighting/FireFighting';
import Home from './Pages/Home/Home';
import MedicalMalpractice from './Pages/MedicalMalpractice/MedicalMalpractice';
import NEC from './Pages/NEC/NEC';
import Notfound from './Pages/Notfound/Notfound';
import Privacy from './Pages/Privacy/Privacy';
import RoundUp from './Pages/RoundUp/RoundUp';
import SexAbuse from './Pages/SexAbuse/SexAbuse';
import TalcumPowder from './Pages/TalcumPowder/TalcumPowder';
import TermsCondition from './Pages/Terms&condition/TermsCondition';
import Thanks from './Pages/Thanks/Thanks';
import Zantac from './Pages/Zantac/Zantac';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/earplug' element={<Earplug />} />
      <Route path='/firefighting' element={<FireFighting />} />
      <Route path='/personalinjury' element={<MedicalMalpractice />} />
      <Route path='/nec' element={<NEC />} />
      <Route path='/zantac' element={<Zantac />} />
      <Route path='/' element={<TalcumPowder />} />
      <Route path='/sexabuse' element={<SexAbuse />} />
      <Route path='/roundup' element={<RoundUp />} />
      <Route path='/camplejeune' element={<CampLejeune />} />
      <Route path='/thanks' element={<Thanks />} /> */}
      <Route path='/terms&condition' element={<TermsCondition />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
