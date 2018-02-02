import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles'
import Navigation from './components/Navigation'
import Routes from './routes'
import './styles/typography'
import './styles/reset'

class App extends React.Component {

  render() {
    return (
      <ThemeProvider theme={theme} >
        <div>
          <Navigation />
          <Routes />
        </div>
      </ThemeProvider>
    )
  }
}

export default App
