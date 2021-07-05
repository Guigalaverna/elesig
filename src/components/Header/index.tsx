/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss'

export function Header() {
  return (
    <header className={styles.container}>
      <img src="./Logo.svg" alt="Elesig" />
      <div>
        <a href="#home">Home</a>
        <a href="#services">Serviços</a>
        <a href="#contact">Contato</a>
      </div>
      <div></div>
    </header>
  )
}