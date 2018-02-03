import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { replace } from 'react-router-redux'

import signIn from '../actions/sign-in'
import signOut from '../actions/sign-out'


const Container = styled.div`
  width: 100vw;
  height: 80px;
  margin-bottom: 20px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Navigation extends React.PureComponent {
  constructor() {
    super()
    this.signOutUser = this.signOutUser.bind(this)
    this.signInUser = this.signInUser.bind(this)
  }

  componentWillMount() {
    if (!this.props.signedIn) {
      this.props.replace('/login')
    }
  }

  signOutUser() {
    console.log('sign me out!')
    this.props.signOut()
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
          <p>Navigation</p>
          <div>
            { this.props.signedIn ?
              <button onClick={this.signOutUser}>sign out!</button>
              :
              <button onClick={this.signInUser}>sign in!</button>
            }
          </div>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id)
})

export default connect(mapStateToProps, { signIn, signOut, replace })(Navigation)
