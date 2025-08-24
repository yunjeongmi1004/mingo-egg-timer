import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './app'

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>,
)
