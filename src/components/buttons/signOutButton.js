import React from 'react'

import { withFirebase } from 'Authentication'

import t from 'assets/languages'

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} className="t--capitalize">
    {t('sign out')}
  </button>
)

export default withFirebase(SignOutButton)
