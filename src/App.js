import logo from './logo.svg'
import './App.css'

function App() {
  const user = undefined;

  return (
    <div className='App'>
      <h1>Hello {user ? user : 'stranger'}</h1>
    </div>
  )
}

export default App
