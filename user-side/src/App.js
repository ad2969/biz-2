import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setLanguage, getLanguage } from 'assets/languages'

import NavBar from 'components/navBar'
import LandingPage from 'views/Landing'
import SearchPage from 'views/Search'
import ProductOne from 'views/Products/productOne'
import ProductTwo from 'views/Products/productTwo'
import ProductThree from 'views/Products/productThree'

import Chat from 'components/chat'
import ChatFeedback from 'components/chat/feedback'

import { Layout } from 'antd'

import * as ROUTES from 'constants/routes'
import * as LANGUAGES from 'constants/languages'

const App = () => {
  const INITIAL_LANGUAGE = LANGUAGES.ENGLISH

  const [ chatStatus, setChatStatus ] = useState(false)
  const [ chatFeedbackStatus, setChatFeedbackStatus ] = useState(false)

  // Set language if not set yet / different
  useEffect(() => {
    if (!getLanguage() || getLanguage() !== INITIAL_LANGUAGE) {
      setLanguage(INITIAL_LANGUAGE)
      console.log('** SET APP LANGUAGE (CODE):', INITIAL_LANGUAGE)
    }
  }, [ INITIAL_LANGUAGE ])

  return (
    <Router>
      <Layout>
        <Layout.Header>
          <NavBar />
        </Layout.Header>
        <Layout.Content>
          <Route exact path={ROUTES.LANDING} component={LandingPage} />
          <Route exact path={ROUTES.SEARCH} component={SearchPage} />
          <Route exact path={ROUTES.PRODUCTONE} render={() => <ProductOne chatFunction={setChatStatus} />} />
          <Route exact path={ROUTES.PRODUCTTWO} render={() => <ProductTwo chatFunction={setChatStatus} />} />
          <Route exact path={ROUTES.PRODUCTTHREE} render={() => <ProductThree chatFunction={setChatStatus} />} />
          <Chat active={chatStatus} chatFunction={setChatStatus} chatFeedbackFunction={setChatFeedbackStatus}/>
          <ChatFeedback active={chatFeedbackStatus} chatFeedbackFunction={setChatFeedbackStatus}/>
        </Layout.Content>
      </Layout>
    </Router>
  )
}

export default App
