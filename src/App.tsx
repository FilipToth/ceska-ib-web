import LandingPage from 'pages/landing/landing'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <LandingPage />
      </main>
    </>
  )
}

export default App
