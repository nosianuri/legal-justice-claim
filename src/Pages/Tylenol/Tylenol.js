import React from 'react'
import { Helmet } from 'react-helmet'
import LegalHeader from '../../components/LegalHeader/LegalHeader'
import CampHead from '../Home/CampLejuene/CampHead'
import CampForm from '../Home/CampLejuene/CampForm'
import CampWork from '../Home/CampLejuene/CampWork'
import CampHelp from '../Home/CampLejuene/CampHelp'
import CampReview from '../Home/CampLejuene/CampReview'
import Footer from '../../components/Footer/Footer'
import TylenolHead from './TylenolHead'
import TylenolForm from './TylenolForm'
import TylenolWork from './TylenolWork'
import TylenolHelp from './TylenolHelp'
import TylenolReview from './TylenolReview'

const Tylenol = () => {
  return (
    <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Legal Justice Claim </title>
    </Helmet>
    <div>
      <LegalHeader />
      <TylenolHead />
      <TylenolForm />
      <TylenolWork />
      <TylenolHelp />
      <TylenolReview />
      <Footer />
    </div>
  </>
  )
}

export default Tylenol