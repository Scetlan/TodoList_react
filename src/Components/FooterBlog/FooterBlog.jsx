import TasksFilter from '../Filter/TasksFilter';

export default function BlogFooter({ tasks, clearTask, filterTasks, onFilterChange }) {
  const doneCount = tasks.filter(task => !task.done).length;

  return (
    <footer className="footer">
      <span className="todo-count">{doneCount} items left</span>
      <TasksFilter filter={filterTasks} onFilterChange={onFilterChange} />
      <button type="button" className="clear-completed" onClick={() => clearTask(tasks)}>
        Clear completed
      </button>
    </footer>
  );
}

BlogFooter.defaultProps = {
  tasks: [],
  isEditing: false,
  clearTask: () => {},
  filterTasks: 'all',
  onFilterChange: () => {},
};
