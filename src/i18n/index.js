import { createI18n } from 'vue-i18n'
import en from './en'
import ru from './ru'
import uz from './uz'

const i18n = createI18n({
  legacy: false,
  locale: 'en', // default til
  fallbackLocale: 'en',
  messages: {
    en,
    ru,
    uz
  }
})

export default i18n
