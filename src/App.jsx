import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ThankYouCard from './components/ThankYouCard'
import SignupForm from './components/SignupForm'

function App() {

  const [isSummited, setIsSummited] = useState(false);
  const [email, setEmail] = useState('');

  return (
    <main className="flex justify-center items-center w-full h-screen">
      {isSummited ? (<ThankYouCard email={email}/>):(<SignupForm setIsSummited={setIsSummited} setEmail={setEmail} email={email}/>)}
    </main>
  )
}

export default App
