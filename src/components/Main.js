import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import fetchProjects from '../actions/fetch'
import signOut from '../actions/sign-out'


const Container = styled.div`
  max-width: 350px;
  height: auto;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  align-items: center;
`

class Main extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      stately: true
    }
    this.signOutUser = this.signOutUser.bind(this)
  }

  componentWillMount() {
    this.props.fetchProjects()
  }

  signOutUser() {
    console.log('sign me out!')
    this.props.signOut()
  }

  render() {
    console.log(this)

    return (
      <div>
        <Container>
          <p>This is the homepage</p>
          <p>Password protected stuff, see console >>></p>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = state => state


export default connect(mapStateToProps, { fetchProjects, signOut })(Main)
