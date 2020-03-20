import React from 'react'

import { withFirebase } from 'Authentication'

import t from 'assets/languages'

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
}

class PasswordChangeForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = event => {
    const { passwordOne } = this.state

    this.props.firebase
      .doPasswordUpdate(passwordOne)
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

  render() {
    const { passwordOne, passwordTwo, error } = this.state

    const isInvalid =
      passwordOne !== passwordTwo || passwordOne === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder={t('new', 0, 'C') + ' ' + t('password', 0, 'C')}
        />
        <input
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder={t('confirm', 0, 'C') + ' ' + t('password', 0, 'C')}
        />
        <button disabled={isInvalid} type="submit" className="t--capitalize">
          {t('reset password')}
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default withFirebase(PasswordChangeForm)
