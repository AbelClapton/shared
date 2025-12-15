import { useState } from 'react'
import { IntlProvider } from 'react-intl'
import {
  BoolLabel,
  getMessages,
  type MessageLocale,
  supportedLocales,
} from '../'
import './App.css'
import demoMessages from './locales/en.json'

function App() {
  const [locale, setLocale] = useState<MessageLocale>('en')

  const libraryMessages = getMessages(locale)
  const messages = {
    ...libraryMessages,
    ...demoMessages,
  }

  return (
    <IntlProvider locale={locale} messages={messages}>
      <div>
        {/* Locale switcher */}
        {supportedLocales.map((loc) => (
          <button
            key={loc}
            onClick={() => setLocale(loc)}
            style={{ fontWeight: locale === loc ? 'bold' : 'normal' }}
          >
            {loc.toUpperCase()}
          </button>
        ))}

        {/* Your components */}
        <BoolLabel value={true} />
        <BoolLabel value={false} type="PassFail" />
      </div>
    </IntlProvider>
  )
}

export default App
