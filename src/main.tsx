import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import { defaultLocale, getMessages } from '../lib/i18n'
import App from './App.tsx'
import './index.css'
import demoMessages from './locales/en.json'

const locale = defaultLocale
const libraryMessages = getMessages(locale)
const messages = {
  ...libraryMessages,
  ...demoMessages,
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <IntlProvider locale={locale} messages={messages}>
      <App />
    </IntlProvider>
  </StrictMode>,
)
