import 'tailwindcss/tailwind.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage'
import ContactPage from './pages/contact/ContactPage'
import RegisterPage from './pages/register-page/RegisterPage'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App
