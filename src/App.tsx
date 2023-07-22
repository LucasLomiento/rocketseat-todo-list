import { Header, TasksBox } from './components'

import styles from './App.module.css'

export function App() {

  return (
    <div className={ styles.App }>
      <Header />
      <main className={styles.main}>
        <TasksBox />
      </main>
    </div>
  )
}
