import React from 'react'
import { Link } from 'react-router-dom'

import { withFirebase } from 'Authentication'
import * as ROUTES from 'constants/routes'

import t from 'assets/languages'

const PasswordForgetPage = () => (
  <div>
    <h1 className="t--capitalize">{t('password') + ' ' + t('forget')}</h1>
    <PasswordForgetForm />
  </div>
)

const INITIAL_STATE = {
  email: '',
  error: null,
}

class PasswordForgetFormBase extends React.Component {
  constructor (props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { email } = this.state

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
      })
      .catch(error => {
        this.setState({ error })
      })

    event.preventDefault()
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render () {
    const { email, error } = this.state

    const isInvalid = email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="email"
          value={this.state.email}
          onChange={this.onChange}
          type="text"
          placeholder={t('email address', 0, 'C')}
        />
        <button disabled={isInvalid} type="submit" className="t--capitalize">
          {t('reset password')}
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const PasswordForgetLink = () => (
  <p>
    <Link to={ROUTES.PASSWORD_FORGET} className="t--capitalize">{t('forgot password')}?</Link>
  </p>
)

export default PasswordForgetPage

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }
