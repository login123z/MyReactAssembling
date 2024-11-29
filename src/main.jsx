import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '/src/scss/_main.scss'


const rootElemrnt = document.getElementById('root');
const reactRoot = createRoot(rootElemrnt)

reactRoot.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
