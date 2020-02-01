import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import { withFirebase } from 'Authentication'
import * as ROUTES from 'constants/routes'

import t from 'assets/languages'

const SignUpPage = () => (
  <div>
    <h1 className="t--capitalize">{t('sign up')}</h1>
    <SignUpForm />
  </div>
)

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class SignUpFormBase extends React.Component {
  constructor (props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { email, passwordOne } = this.state

    this.props.firebase
      .doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE })
        this.props.history.push(ROUTES.HOME)
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
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder={t('full name', 0, 'C')}
        />
        <input
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder={t('email address', 0, 'C')}
        />
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder={t('password', 0, 'C')}
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder={t('confirm', 0, 'C') + ' ' + t('password', 0, 'C')}
        />
        <button disabled={isInvalid} type="submit">
          {t('sign up')}
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

const SignUpLink = () => (
  <p className="t--capitalize">
    {t('dont have an account')}?<Link to={ROUTES.SIGN_UP}> {t('sign up')}</Link>
  </p>
)

const SignUpForm = withRouter(withFirebase(SignUpFormBase))

export default SignUpPage

export { SignUpForm, SignUpLink }
