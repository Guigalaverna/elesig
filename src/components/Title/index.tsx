import { CSSProperties, ReactNode } from 'react'
import styles from './styles.module.scss'

interface TitleProps {
  sectionName: string
  children: ReactNode | string
  
  containerStyles?: CSSProperties
  sectionNameStyles?: CSSProperties
}

export function Title({ 
  children, 
  sectionName, 
  containerStyles, 
  sectionNameStyles, 
}: TitleProps) {
  return (
    <div className={styles.container} style={containerStyles}>
      <span style={sectionNameStyles}>{sectionName}</span>
      { children }
    </div>
  )
}