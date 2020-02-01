import React from 'react'
import { Link } from 'react-router-dom'

import SignOutButton from 'components/buttons/signOutButton'
import * as ROUTES from 'constants/routes'

import { AuthUserContext } from 'Session'

import t from 'assets/languages'

const NavBar = () => (
  <div>
    <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
  </div>
)

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING} className="t--capitalize">{t('landing')}</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME} className="t--capitalize">{t('home page')}</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT} className="t--capitalize">{t('account')}</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
)

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING} className="t--capitalize">{t('landing')}</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN} className="t--capitalize">{t('sign in')}</Link>
    </li>
  </ul>
)

export default NavBar
