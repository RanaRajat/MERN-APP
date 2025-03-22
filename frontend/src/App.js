import React from 'react'
import { Container } from 'react-bootstrap'
import Headers from './components/Headers'
import Footer from './components/Footer'
import AppRoutes from './screens/AppRoutes'

const App = () => {
  return (
    <>
      <Headers/>
     <main className="py-3">
      <Container>
      <AppRoutes/>
      </Container>
     </main>
     <Footer/>
      </>
  )
}

export default App
