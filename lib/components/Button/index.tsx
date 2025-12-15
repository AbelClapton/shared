import { Button as ADButton, type ButtonProps } from 'antd'
import styles from './index.module.css'

export function Button(props: ButtonProps) {
  const { className, ...restProps } = props
  return <ADButton className={`${className} ${styles.button}`} {...restProps} />
}
