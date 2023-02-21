import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Notfound from './Pages/Notfound/Notfound';
import Privacy from './Pages/Privacy/Privacy';
import TermsCondition from './Pages/Terms&condition/TermsCondition';
import Thanks from './Pages/Thanks/Thanks';


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
