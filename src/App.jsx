import {Outlet} from 'react-router-dom'
import {Header} from './components/Header'

import './App.css'
import '.lib/font-awesome/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  )
}

export default App
