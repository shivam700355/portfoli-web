import { useState } from 'react'


import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Footer } from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Home />
      <Footer/>
    </>
  )
}

export default App