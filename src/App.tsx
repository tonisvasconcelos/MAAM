import { RouterProvider } from 'react-router-dom'
import { router } from './app/router'
import './app/i18n'

function App() {
  console.log('App component rendering...')
  return <RouterProvider router={router} />
}

export default App
