import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import UserProfile from './components/UserProfile'
import UserContext from './components/UserContext'
import UserDetails from './components/UserDetails'
import ProfilePage from './components/ProfilePage'

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ border: '2px solid black', margin: '10px'}}>
        <h3>Now in app.js </h3>
        <ProfilePage />
      </div>
      
    </UserContext.Provider>
  )
}

export default App
