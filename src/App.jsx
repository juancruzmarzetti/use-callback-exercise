import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
        <div className='mt-10 w-screen flex flex-col justify-center align-center'>
          <h1 className='text-center text-6xl'>useCallback exercise</h1>
          <Counter/>
        </div>
    </>
  )
}

export default App
