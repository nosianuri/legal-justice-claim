import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import CampHead from '../Home/CampLejuene/CampHead'
import CampForm from '../Home/CampLejuene/CampForm'
import CampWork from '../Home/CampLejuene/CampWork'
import CampHelp from '../Home/CampLejuene/CampHelp'
import CampReview from '../Home/CampLejuene/CampReview'
import Footer from '../../components/Footer/Footer'
import MvaHead from './MvaHead'
import MvaWork from './MvaWork'
import MvaHelp from './MvaHelp'
import MvaReview from './MvaReview'
import MvaForm from './MvaForm'

const Mva = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Legal Justice Claim </title>
    </Helmet>
    <div>
      <LegalHeader />
      <MvaHead />
      <MvaForm />
      <MvaWork />
      <MvaHelp />
      <MvaReview />
      <Footer />
    </div>
  </>
  )
}

export default Mva