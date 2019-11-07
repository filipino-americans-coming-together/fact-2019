import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './scenes/Navigation'
import Landing from './scenes/LandingPlaceholder'
import TeamPage from './scenes/team/TeamPage'
import Workshops from './scenes/Workshops'
import AppDownload from './scenes/AppDownload'
import AdminDashboard from './scenes/AdminDashboard'
import BookletPDFViewer from './scenes/BookletPDFViewer'

import './stylesheets/global.css'
import './stylesheets/colors.css'
import './stylesheets/fonts.css'

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Route exact path='/' component={Landing} />
        <Route path='/team' component={TeamPage} />
        <Route path='/workshops' component={Workshops} />
        <Route path='/app' component={AppDownload} />
        <Route path='/admin-dashboard' component={AdminDashboard} />
        <Route path='/booklet' component={BookletPDFViewer} />
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
