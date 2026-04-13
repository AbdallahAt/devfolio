import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import OpenSource from './components/OpenSource'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Success from './components/Success'
import ScrollToTop from './components/ScrollToTop'

function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        <Hero />
        <About />
        <Services />
        <Experience />
        <TechStack />
        <OpenSource />
        <Publications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="bg-background dark:bg-background-dark text-on-background dark:text-on-background-dark min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
