import React from 'react'
import CampHead from './CampHead'
import CampForm from './CampForm'
import NavigationMenu from '../../../components/Navbar/NavigationMenu'
import CampWork from './CampWork'
import CampHelp from './CampHelp'
import Footer from '../../../components/Footer/Footer'
import CampReview from './CampReview'

const CampLejeune = () => {
  return (
    <div>
      <NavigationMenu />
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