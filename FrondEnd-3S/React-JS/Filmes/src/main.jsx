import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { EmailProvider } from './context/email/EmailProvider.jsx'
import { SenhaProvider } from './context/senha/SenhaProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmailProvider>
      <SenhaProvider>
      <App />
      </SenhaProvider>
    </EmailProvider>
  </StrictMode>,
)