import './index.css'

const TodoItem = props => {
  const {todoListDetails, deleteTodo} = props
  const {title, id} = todoListDetails
  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="todos">
      <p className="todo">{title}</p>
      <button type="button" className="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
