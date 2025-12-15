import en from './locales/en.json'
import es from './locales/es.json'

export const messages = {
  en,
  es,
} as const

export type MessageLocale = keyof typeof messages
export type MessageKey = Extract<keyof (typeof messages)['en'], string>

export const defaultLocale: MessageLocale = 'en'
export const supportedLocales = Object.keys(messages) as MessageLocale[]

export const getMessages = (locale: MessageLocale) => messages[locale]
