import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './assets/Routes/Routes/Routes'

function App() {


  return (
    <div className=' max-w-[1440] mx-auto'>
      <RouterProvider router={router} />


    </div>

  )
}

export default App
