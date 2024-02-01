import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpForm from './SignUpForm'
import LogInForm from './LogInForm'
import { Link } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignUpForm />}></Route>
            <Route path='/login' element={<LogInForm />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      {/* <SignUpForm /> */}
    </>
  )
}

export default App
