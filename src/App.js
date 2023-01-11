import { Route, Routes } from 'react-router-dom';
import './App.css';
import Attorneys from './Pages/Attorneys/Attorneys';
import CarAccident from './Pages/CarAccident/CarAccident';
import Contact from './Pages/Contact/Contact';
import Earplug from './Pages/Earplug/Earplug';
import FireFighting from './Pages/FireFighting/FireFighting';
import Home from './Pages/Home/Home';
import MedicalMalpractice from './Pages/MedicalMalpractice/MedicalMalpractice';
import Mesothelioma from './Pages/Mesothelioma/Mesothelioma';
import MotorcycleAccident from './Pages/MotorcycleAccident/MotorcycleAccident';
import NEC from './Pages/NEC/NEC';
import Notfound from './Pages/Notfound/Notfound';
import PersonalInjury from './Pages/PersonalInjury/PersonalInjury';
import RoundUp from './Pages/RoundUp/RoundUp';
import SexAbuse from './Pages/SexAbuse/SexAbuse';
import TalcumPowder from './Pages/TalcumPowder/TalcumPowder';
import TruckAccident from './Pages/TruckAccident/TruckAccident';
import Zantac from './Pages/Zantac/Zantac';

function App() {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact-us' element={<Contact />} />
      <Route path='/attorneys' element={<Attorneys />} />
      <Route path='/earplug' element={<Earplug />} />
      <Route path='/firefighting' element={<FireFighting />} />
      <Route path='/medicalmalpractice' element={<MedicalMalpractice />} />
      <Route path='/caraccident' element={<CarAccident />} />
      <Route path='/mesothelioma' element={<Mesothelioma />} />
      <Route path='/motorcycleaccident' element={<MotorcycleAccident />} />
      <Route path='/nec' element={<NEC />} />
      <Route path='/zantac' element={<Zantac />} />
      <Route path='/truckaccident' element={<TruckAccident />} />
      <Route path='/talcumpowder' element={<TalcumPowder />} />
      <Route path='/sexabuse' element={<SexAbuse />} />
      <Route path='/roundup' element={<RoundUp />} />
      <Route path='/personalinjury' element={<PersonalInjury />} />
      <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
