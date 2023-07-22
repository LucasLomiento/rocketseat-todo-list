import { RocketLaunch } from 'phosphor-react'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h1>to</h1>
      <RocketLaunch className={ styles.logo } />
      <h1>do</h1>
    </header>
  )
}
