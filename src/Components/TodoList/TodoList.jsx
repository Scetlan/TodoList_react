import Task from './Task/Task';

function TodoList({ tasks, onDeleted, onToggleDone, onToggleEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map(item => {
        const { id, label, time, done, isEditing } = item;
        return (
          <li className="completed" id={id} key={id}>
            <Task
              isEditing={isEditing}
              label={label}
              time={time}
              done={done}
              onDeleted={() => onDeleted(id)}
              onToggleDone={() => onToggleDone(id)}
              onToggleEdit={() => onToggleEdit(id)}
            />
          </li>
        );
      })}
    </ul>
  );
}

TodoList.defaultProps = {
  tasks: [],
  isEditing: false,
  onDeleted: () => {},
  onToggleDone: () => {},
  onToggleEdit: () => {},
};

export default TodoList;
