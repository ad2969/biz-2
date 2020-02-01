import React from 'react'

import { AuthUserContext, withAuthorization } from 'Session'
import PasswordChangeForm from './passwordChangeForm'

import t from 'assets/languages'

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>{t('account')}: {authUser.email}</h1>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
)

const authCondition = authUser => !!authUser

export default withAuthorization(authCondition)(AccountPage)
