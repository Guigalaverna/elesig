import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss'

interface ButtonProps extends 
ButtonHTMLAttributes<HTMLButtonElement> {

}

export function Button({ ...rest }: ButtonProps) {
  return (
    <button {...rest} className={styles.container}>
      <p>Continuar</p>
    </button>
  )
}