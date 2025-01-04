import { RiCalendarTodoFill, RiCheckFill, RiCloseFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiCalendarTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiCheckFill
        className={styles.checkIcon}
        onClick={() => toggleTodo(todo.id)}
      />
      <RiCloseFill
        className={styles.closeIcon}
        onClick={() => deleteTodo(todo.id)}
      />
    </div>
  );
}

export default Todo;
