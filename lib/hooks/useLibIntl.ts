import { useIntl } from 'react-intl'
import type { MessageKey } from '../i18n'

export function useLibIntl() {
  const intl = useIntl()

  return {
    ...intl,
    formatMessage: (id: MessageKey) => intl.formatMessage({ id: id as string }),
  }
}
