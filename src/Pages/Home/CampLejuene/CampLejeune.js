import React from 'react';
import CampHead from './CampHead';
import CampForm from './CampForm';
import NavigationMenu from '../../../components/Navbar/NavigationMenu'
import CampWork from './CampWork';
import CampHelp from './CampHelp';
import Footer from '../../../components/Footer/Footer';
import CampReview from './CampReview';
import LegalHeader from '../../../components/LegalHeader/LegalHeader';

const CampLejeune = () => {
  return (
    <div>
      <LegalHeader />
      <CampHead />
      <CampForm />
      <CampWork />
      <CampHelp />
      <CampReview />
      <Footer />
    </div>
  )
}

export default CampLejeune