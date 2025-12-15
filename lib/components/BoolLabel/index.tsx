import { useMemo } from 'react'
import { BoolLabelType } from '../../constants'
import { useLibIntl } from '../../hooks/useLibIntl'

type BoolLabelProps = {
  type?: BoolLabelType
  value?: boolean
}

export function BoolLabel({
  type = BoolLabelType.YesNo,
  value,
}: BoolLabelProps) {
  const intl = useLibIntl()

  const text = useMemo(() => {
    switch (type) {
      case BoolLabelType.PassFail:
        return value
          ? intl.formatMessage('component.boollabel.pass')
          : intl.formatMessage('component.boollabel.fail')
      default:
        return value
          ? intl.formatMessage('component.boollabel.yes')
          : intl.formatMessage('component.boollabel.no')
    }
  }, [intl, type, value])

  return <span>{text}</span>
}
