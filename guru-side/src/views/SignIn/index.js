import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { withFirebase } from 'Authentication'
import * as ROUTES from 'constants/routes'

import { Form, Icon, Input, Checkbox, Button, message } from 'antd'
import t from 'assets/languages'

import { SignUpLink } from 'views/SignUp'
import { PasswordForgetLink } from './passwordForget'

const SignInPage = () => (
  <div className="signin-page">
    <h1 className="t--capitalize">{t('sign in')}</h1>
    <SignInForm />
    <PasswordForgetLink />
    <SignUpLink />
  </div>
)

class SignInFormBase extends React.Component {
  handleSubmit = event => {
    event.preventDefault()

    this.props.form.validateFields((errors, values) => {
      if (errors) {
        message.error('Please fill in the required fields and try again!') /* TO DO TRANSLATION */
      } else {
        const email = this.props.form.getFieldValue('email')
        const password = this.props.form.getFieldValue('password')

        this.props.firebase
          .doSignInWithEmailAndPassword(email, password)
          .then(() => {
            this.props.history.push(ROUTES.HOME)
          })
          .catch(error => {
            message.error(error.message)
          })
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <Form onSubmit={this.handleSubmit} className="signin-form">
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Please input your Email!' }],
          })(
            <Input
              prefix={<Icon type="user" />}
              placeholder={t('email', 0, 'C')}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" />}
              type="password"
              placeholder={t('password', 0, 'C')}
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: false,
          })(<Checkbox className="t--capitalize">{t('remember me')}</Checkbox>)} {/* TODO TRANSLATION */}
        </Form.Item>
        <Button type="primary" htmlType="submit" className="signin__button t--capitalize">
          {t('sign in')}
        </Button>
      </Form>
    )
  }
}

const WrappedSignInForm = Form.create({ name: 'sign_in' })(SignInFormBase)

const SignInForm = compose(
  withRouter,
  withFirebase,
)(WrappedSignInForm)

export default SignInPage

export { SignInForm }
