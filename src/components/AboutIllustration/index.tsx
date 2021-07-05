/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function AboutIllustration() {
  return (
    <div className={styles.container}>
      <span></span>
      <img 
        src="./images/Question.jpg" 
        alt="Ilustração com um símbolo de interrogação desenhado num quadro negro" 
      />
      <span></span>
    </div>
  )
}