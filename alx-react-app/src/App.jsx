import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainComponent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <>
      <div>
        <Header />
        <MainComponent />
        <UserProfile name='Frankiewilson' age="20" bio='a software engineer' />
        <Footer />
      </div>
    </>
  )
}

export default App
