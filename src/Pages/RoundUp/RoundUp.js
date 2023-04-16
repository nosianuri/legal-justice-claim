import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import CampHead from '../Home/CampLejuene/CampHead'
import CampForm from '../Home/CampLejuene/CampForm'
import CampWork from '../Home/CampLejuene/CampWork'
import CampHelp from '../Home/CampLejuene/CampHelp'
import CampReview from '../Home/CampLejuene/CampReview'
import Footer from '../../components/Footer/Footer'
import RoundUpHead from './RoundUpHead'
import RounUpForm from './RounUpForm'
import RoundUpWork from './RoundUpWork'
import RoundUpHelp from './RoundUpHelp'
import RoundUpReview from './RoundUpReview'

const RoundUp = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Legal Justice Claim </title>
    </Helmet>
    <div>
      <LegalHeader />
      <RoundUpHead />
      <RounUpForm />
      <RoundUpWork />
      <RoundUpHelp />
      <RoundUpReview />
      <Footer />
    </div>
  </>
  )
}

export default RoundUp