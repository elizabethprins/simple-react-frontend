import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import signIn from '../actions/sign-in'


const Container = styled.div`
  max-width: 350px;
  height: auto;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Login extends React.PureComponent {
  constructor() {
    super()
    this.signInUser = this.signInUser.bind(this)
  }

  signInUser() {
    console.log('sign me in!')
    this.props.signIn({ 'email': 'dev@dev.com', 'password': 'supersecretpassword' })
  }

  render() {
    console.log(this)

    return (
      <div>
        <Container>
          <p>Login component: Sign in to proceed...</p>
          <p>No interesting data here</p>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, { signIn })(Login)
