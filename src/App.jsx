import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {Header} from './components/Header'

import {Add} from './pages/Add'
import {WatchList} from './pages/WatchList'
import {Watched} from './pages/Watched'

import './App.css'
import '.lib/font-awesome/css/all.min.css';

function App() {

  return (
    <div className="App">
      <h1>Hello World</h1>
      <Add />
    </div>
  )
}

export default App
