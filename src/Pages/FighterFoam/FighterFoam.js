import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import CampHead from '../Home/CampLejuene/CampHead'
import CampForm from '../Home/CampLejuene/CampForm'
import CampWork from '../Home/CampLejuene/CampWork'
import CampHelp from '../Home/CampLejuene/CampHelp'
import CampReview from '../Home/CampLejuene/CampReview'
import Footer from '../../components/Footer/Footer'
import FireFighterHead from './FireFighterHead'
import FireFighterForm from './FireFighterForm'
import FireFighterHelp from './FireFighterHelp'
import FireFighterReview from './FireFighterReview'
import FireFighterWork from './FireFighterWork'

const FighterFoam = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Legal Justice Claim </title>
    </Helmet>
    <div>
      <LegalHeader />
      <FireFighterHead />
      <FireFighterForm />
      <FireFighterWork />
      <FireFighterHelp />
      <FireFighterReview />
      <Footer />
    </div>
  </>
  )
}

export default FighterFoam