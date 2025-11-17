import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
    <div className='flex w-screen'>
      <Sidebar />
      <div className='flex-1 flex-col'>
          <Navbar />
          <main></main>
      </div>
    </div>
    </> 
  )
}

export default App
