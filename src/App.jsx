import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import MyRouter from './components/myRouter/MyRouter'
import './app.css'
import { Toaster } from 'react-hot-toast';

function App () {
  return (
    <>
      <MyRouter />
      <Toaster />
    </>
  )
}

export default App
