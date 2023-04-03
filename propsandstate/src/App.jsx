import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/headerfold/header.css'
import './components/gicon/icon.css'
import './components/inputfold/input.css'
import './components/feelingfold/feeling.css'
import './components/languagefold/language.css'
import './components/footerfold/footer.css'
import Header from './components/headerfold/header'
import Icon from './components/gicon/icon'
import Input from './components/inputfold/input'
import Feeling from './components/feelingfold/feeling'
import Language from './components/languagefold/language'
import Footer from './components/footerfold/footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <Header />
      <Icon />
      <Input />
      <Feeling />
      <Language />
      <Footer />
    </div>
  )
}

export default App
