import React from 'react'

import { Button } from 'antd'

import { withFirebase } from 'Authentication'

import t from 'assets/languages'

const SignOutButton = ({ firebase }) => (
  <Button onClick={firebase.doSignOut} className="t--capitalize">
    {t('sign out')}
  </Button>
)

export default withFirebase(SignOutButton)
