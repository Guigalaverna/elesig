import { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'

import styles from './styles.module.scss'

interface CardProps {
 title: string
 icon: ReactNode
 description: string
}

export function Card({ title, icon, description}: CardProps) {
  return (
    <div className={styles.container}>
      <div>
        {icon}
      </div>
      <h2>{title}</h2>
      <p>
        {description}
      </p>
    </div>
  )
}