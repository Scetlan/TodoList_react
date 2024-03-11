import addClass from '../../utils/addClass';
import Task from './Task/Task';
import React from 'react';

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  onValueChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleKeyUp = (id, value, updateItem) => e => {
    e.preventDefault();
    if (value === '') {
      return;
    } else if (e.code === 'Enter') {
      updateItem(id, value);
      this.setState({ value: '' });
    }
  };

  render() {
    const { value } = this.state;
    const { tasks, onDeleted, onToggleDone, onToggleEdit, startTimer, stopTimer, updateItem } = this.props;

    return (
      <ul className="todo-list">
        {tasks.map(task => {
          const { id, label, time, done, isEditing, timer } = task;
          return (
            <li className={addClass(isEditing, done)} id={id} key={id}>
              <Task
                label={label}
                time={time}
                timer={timer}
                onDeleted={() => onDeleted(id)}
                onToggleDone={() => onToggleDone(id)}
                onToggleEdit={() => onToggleEdit(id)}
                startTimer={() => startTimer(id)}
                stopTimer={() => stopTimer(id)}
              />
              {isEditing ? (
                <input
                  className="edit"
                  type="text"
                  placeholder='Edit task...'
                  onKeyUp={this.handleKeyUp(id, value, updateItem)}
                  onChange={this.onValueChange}
                />
              ) : null}
            </li>
          );
        })}
      </ul>
    );
  }
}

TodoList.defaultProps = {
  tasks: [],
  isEditing: false,
  onDeleted: () => {},
  onToggleDone: () => {},
  onToggleEdit: () => {},
};

export default TodoList;
