import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';
function TodoForm({ addTodo }) {
  const [todoInput, setTodoInput] = useState('');

  function onSubmitHandler(event) {
    event.preventDefault();
    addTodo(todoInput);
    setTodoInput('');
  }

  return (
    <div className={styles.todoFormContainer}>
      <form className="" onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <Button type="submit" title="Submit">
          submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
