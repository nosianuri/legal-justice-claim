import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import CampHead from '../Home/CampLejuene/CampHead'
import CampForm from '../Home/CampLejuene/CampForm'
import CampWork from '../Home/CampLejuene/CampWork'
import CampHelp from '../Home/CampLejuene/CampHelp'
import CampReview from '../Home/CampLejuene/CampReview'
import Footer from '../../components/Footer/Footer'
import TalcomHead from './TalcomHead'
import TalcomForm from './TalcomForm'
import TalcomHelp from './TalcomHelp'
import TalcomReview from './TalcomReview'
import TalcomWork from './TalcomWork'

const Talcome = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Legal Justice Claim </title>
    </Helmet>
    <div>
      <LegalHeader />
      <TalcomHead />
      <TalcomForm />
      <TalcomWork />
      <TalcomHelp />
      <TalcomReview />
      <Footer />
    </div>
  </>
  )
}

export default Talcome