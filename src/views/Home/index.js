import React from 'react'

import { withAuthorization } from 'Session'

import t from 'assets/languages'

const HomePage = () => (
  <div>
    <h1 className="t--capitalize">{t('home page')}</h1>
    <p>{t('home page accessibility')}.</p>
  </div>
)


const condition = authUser => !!authUser

export default withAuthorization(condition)(HomePage)
