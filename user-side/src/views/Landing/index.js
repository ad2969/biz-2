import React from 'react'

import Main from 'assets/media/front-page-fullheader.png'
import Content from 'assets/media/front-page-content.png'

const LandingPage = () => (
  <div className="Landing">
    <img className="Landing__mainimg" src={Main} alt="main"/>
    <img className="Landing__mainimg" src={Content} alt="main"/>
  </div>
)

export default LandingPage
