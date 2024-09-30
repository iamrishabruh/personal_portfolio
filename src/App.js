import { useContext } from 'react'
import { ThemeContext } from './theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Leadership from './components/Leadership/Leadership'
import Scroll from './components/Scroll/Scroll'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top' className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Leadership />
        <Skills />
        <Contact />
      </main>

      <Scroll />
      <Footer />
    </div>
  )
}

export default App