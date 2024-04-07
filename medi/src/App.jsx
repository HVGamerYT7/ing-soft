import { useState } from 'react'
import './css/App.css'
import Form_ini_ses from './components/form_ini_ses'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background'>
      <Form_ini_ses />
    </div>
  )
}

export default App
