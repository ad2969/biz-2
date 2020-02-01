import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { setLanguage, getLanguage } from 'assets/languages'

import NavBar from 'components/navBar'
import SignUpPage from 'views/SignUp'
import SignInPage from 'views/SignIn'
import PasswordForgetPage from 'views/SignIn/passwordForget'
import HomePage from 'views/Home'
import AccountPage from 'views/Account'

import * as ROUTES from 'constants/routes'
import * as LANGUAGES from 'constants/languages'
import { withAuthentication } from 'Session'

const App = () => {
  const INITIAL_LANGUAGE = LANGUAGES.ENGLISH

  // Set language if not set yet / different
  useEffect(() => {
    if (!getLanguage() || getLanguage() !== INITIAL_LANGUAGE) {
      setLanguage(INITIAL_LANGUAGE)
      console.log('** SET APP LANGUAGE (CODE):', INITIAL_LANGUAGE)
    }
  }, [ INITIAL_LANGUAGE ])

  return (
    <Router>
      <NavBar />

      <hr />

      <Route exact path={ROUTES.LANDING} component={SignInPage} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route exact path={ROUTES.ACCOUNT} component={AccountPage} />
    </Router>
  )
}

export default withAuthentication(App)
