import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import CampHead from '../Home/CampLejuene/CampHead'
import CampForm from '../Home/CampLejuene/CampForm'
import CampWork from '../Home/CampLejuene/CampWork'
import CampHelp from '../Home/CampLejuene/CampHelp'
import CampReview from '../Home/CampLejuene/CampReview'
import Footer from '../../components/Footer/Footer'
import HairRelaxerHeader from './HairRelaxerHeader'
import HairRelaxerForm from './HairRelaxerForm'
import HairRelaxerWork from './HairRelaxerWork'
import HairRelaxerHelp from './HairRelaxerHelp'
import HairRelaxerReview from './HairRelaxerReview'

const HairRelaxer = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Legal Justice Claim </title>
    </Helmet>
    <div>
      <LegalHeader />
      <HairRelaxerHeader />
      <HairRelaxerForm />
      <HairRelaxerWork />
      <HairRelaxerHelp />
      <HairRelaxerReview />
      <Footer />
    </div>
  </>
  )
}

export default HairRelaxer