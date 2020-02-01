import React from 'react'
import t from 'assets/languages'

const LandingPage = () => (
  <div>
    <h1 className="t--capitalize">{t('welcome')}, {t('brother', 2)} {t('and')} {t('sister')}!</h1>
  </div>
)

export default LandingPage
