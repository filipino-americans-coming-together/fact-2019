import React from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './scenes/Navigation'
import Landing from './scenes/LandingPlaceholder'
// import Home from './scenes/Home'
// import Team from './scenes/Team'
// import Workshops from './scenes/Workshops'
// import Registration from './scenes/Registration'

import './stylesheets/global.css'
import './stylesheets/colors.css'

import './stylesheets/fonts.css'

const App = () => {
  return (
    <>
      <Router>
        <Helmet>
          <title>FACT 2019</title>
          <link
            rel='stylesheet'
            href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
            integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
            crossOrigin='anonymous'
          />
        </Helmet>
        <Navigation />
        <Route exact path='/' component={Landing} />
        <script
          src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
          integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
          crossOrigin='anonymous'>
        </script>
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
          integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
          crossOrigin='anonymous'>
        </script>
        <script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
          integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
          crossOrigin='anonymous'>
        </script>
        <script
          src='https://kit.fontawesome.com/bafb654faa.js'>
        </script>
      </Router>
    </>
  )
}

export default App


{/* <Route exact path='/' component={Home} />
<Route path='/team' component={Team} />
<Route path='/workshops' component={Workshops} />
<Route path='/registration' component={Registration} /> */}
