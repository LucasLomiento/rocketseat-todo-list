import { FormEvent, ChangeEvent, useState } from 'react'
import { Notepad, PlusCircle } from 'phosphor-react'

import { Task } from './Task'

import styles from './TasksBox.module.css'

interface Task {
  id: number;
  title: string;
  isCompleted?: boolean;
}

export function TasksBox() {

  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const [completedTasks, setCompletedTasks] = useState(0)


  const handleCompletedTask = (id: number) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })

    setTasks(updatedTasks)
    setCompletedTasks(updatedTasks.filter(task => task.isCompleted).length)
  }

  const handleNewTask = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const addTask = (event: FormEvent) => {
    event.preventDefault()
    if (newTask.trim() === '') {
      return
    }

    const newTaskObject = {
      id: Math.random(),
      title: newTask
    }

    setTasks([...tasks, newTaskObject])
    setNewTask('')
  }

  const handleDeleteTask = (id: number) => {
    const filteredTasks = tasks.filter(task => task.id !== id)
    setTasks(filteredTasks)
    setCompletedTasks(filteredTasks.filter(task => task.isCompleted).length)
  }

  return (
    <div id='tasksBox'>
      <form className={styles.form}>
        <input
          name="taskText"
          id="taskText"
          placeholder='Adicione uma nova tarefa'
          value={newTask}
          onChange={handleNewTask}
        />
        <button type="submit" id="buttonCreate" onClick={addTask}>
          Criar
          <PlusCircle size={16}/>
        </button>
      </form>

      <div className={styles.tasksWrapper}>
        <div className={styles.taksInfos}>
          <p className={styles.createdTasks}>Tarefas criadas <span>{tasks.length | 0}</span></p>
          <p className={styles.completedTasks}>Concluidas <span>{completedTasks}</span></p>
        </div>
        {
        tasks.length > 0 ?
          tasks.map(task => (
            <Task
              key={task.id}
              text={task.title}
              isCompleted={task.isCompleted}
              handleDeleteTask={() => handleDeleteTask(task.id)}
              handleCompletedTask={() => handleCompletedTask(task.id)}
              />
          ))
          :
          <div className={styles.noTasks}>
            <Notepad className={styles.notepadicon}/>
            <h2>Você ainda não tem tarefas cadastradas</h2>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        }
      </div>
    </div>
  )
}
