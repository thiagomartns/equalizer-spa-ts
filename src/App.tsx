import GlobalStyles from './styles/global'
import Hero from './components/Hero/index'
import Main from './components/Main/index';
import Footer from './components/Footer/index'

function App() {

  return (
    <div className="App">
      <div className="app-content">
        <GlobalStyles />
        <Hero />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App
