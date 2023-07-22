import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { MouseEventHandler } from 'react';

import styles from './Task.module.css';

interface TaskProps {
  text: string;
  isCompleted?: boolean;
  handleDeleteTask: MouseEventHandler<SVGSVGElement>;
  handleCompletedTask: MouseEventHandler<SVGSVGElement>;
}

export function Task({ text, isCompleted, handleDeleteTask, handleCompletedTask }: TaskProps) {

  return (
    <div className={styles.task}>
      { 
        isCompleted ? <CheckCircle onClick={handleCompletedTask} className={ styles.checkboxChecked} weight='fill' /> :
        <Circle onClick={handleCompletedTask} className={ styles.checkboxUnchecked } />
      }
      <p className={ isCompleted ? styles.pCompleted : ''}>{text}</p>
      <Trash className={ styles.trash } alt='remove task' onClick={handleDeleteTask}/>
    </div>
  );
}
