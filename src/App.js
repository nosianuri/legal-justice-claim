import { Route, Routes } from 'react-router-dom';
import './App.css';
import CarAccident from './Pages/CarAccident/CarAccident';
import Thanks from './Pages/CarAccident/Thanks';
import Privacy from './Pages/Privacy/Privacy';
import TermsCondition from './Pages/Terms&condition/TermsCondition';
import CampMultiForm from './Pages/CampMultiForm/CampMultiForm';
import Congratulate from './Pages/CampMultiForm/Congratulate';
import Home from './Pages/Home/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';
import CampLejeune from './Pages/Home/CampLejuene/CampLejeune';
import LegalNews from './Pages/LegalNews/LegalNews';
import Nec from './Pages/NEC/Nec';
import Mva from './Pages/MVA/Mva';
import HairRelaxer from './Pages/HairRelaxer/HairRelaxer';
import Talcome from './Pages/Talcome/Talcome';
import Tylenol from './Pages/Tylenol/Tylenol';
import FighterFoam from './Pages/FighterFoam/FighterFoam';
import Testimonial from './Pages/Testimonial/Testimonial';
import About from './Pages/About/About';
import RoundUp from './Pages/RoundUp/RoundUp';
import CaliforniaPrivacy from './Pages/CaliforniaPrivacy/CaliforniaPrivacy';

function App() {
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
// }, []);
Aos.init({
  duration: 1800,
  offset: 100,
});
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/car-accident' element={<CarAccident />} />
      <Route path='/camp-lejeune' element={<CampMultiForm />} />
      <Route path='/camplejeune' element={<CampLejeune />} />
      <Route path='/nec' element={<Nec />} />
      <Route path='/mva' element={<Mva />} />
      <Route path='/roundup' element={<RoundUp />} />
      <Route path='/hair-relaxer' element={<HairRelaxer />} />
      <Route path='/talcome' element={<Talcome />} />
      <Route path='/tylenol' element={<Tylenol />} />
      <Route path='/fire-fighter-foam' element={<FighterFoam />} />
      <Route path='/thanks' element={<Thanks />} />
      <Route path='/testimonial' element={<Testimonial />} />
      <Route path='/legal-news' element={<LegalNews />} />
      <Route path='/about-us' element={<About />} />
      <Route path='/camplejeune-thanks' element={<Congratulate />} />
      <Route path='/terms&condition' element={<TermsCondition />} />
      <Route path='/privacy-policy' element={<Privacy />} />
      <Route path='/california-privacy-rights' element={<CaliforniaPrivacy />} />
      </Routes>
    </>
  );
}

export default App;
