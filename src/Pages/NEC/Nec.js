import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import CampHead from '../Home/CampLejuene/CampHead'
import CampForm from '../Home/CampLejuene/CampForm'
import CampWork from '../Home/CampLejuene/CampWork'
import CampHelp from '../Home/CampLejuene/CampHelp'
import CampReview from '../Home/CampLejuene/CampReview'
import Footer from '../../components/Footer/Footer'
import NecHead from './NecHead'
import NecHelp from './NecHelp'
import NecWork from './NecWork'
import NecReview from './NecReview'
import NecForm from './NecForm'

const Nec = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Legal Justice Claim </title>
    </Helmet>
    <div>
      <LegalHeader />
      <NecHead />
      <NecForm />
      <NecWork />
      <NecHelp />
      <NecReview />
      <Footer />
    </div>
  </>
  )
}

export default Nec