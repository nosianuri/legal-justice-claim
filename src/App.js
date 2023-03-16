import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarAccident from './Pages/CarAccident/CarAccident';
import Thanks from './Pages/CarAccident/Thanks';
import Privacy from './Pages/Privacy/Privacy';
import TermsCondition from './Pages/Terms&condition/TermsCondition';
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import CampMultiForm from './Pages/CampMultiForm/CampMultiForm';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
}, []);
  return (
    <>
      <Routes>
      <Route path='/car-accident' element={<CarAccident />} />
      <Route path='/camp-lejeune' element={<CampMultiForm />} />
      <Route path='/thanks' element={<Thanks />} />
      <Route path='/terms&condition' element={<TermsCondition />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      </Routes>
    </>
  );
}

export default App;
