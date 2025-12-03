import styles from './index.module.css'

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  const { className, ...restProps } = props
  return <input className={`${className} ${styles.input}`} {...restProps} />
}
