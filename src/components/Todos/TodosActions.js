import { LuRefreshCcw } from 'react-icons/lu';
import { MdDeleteForever } from 'react-icons/md';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';
function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  completedTodosExist,
}) {
  return (
    <div className={styles.todosActionContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <LuRefreshCcw />
      </Button>
      <Button
        title="Clear Completed todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodosExist}
      >
        <MdDeleteForever />
      </Button>
    </div>
  );
}

export default TodosActions;
