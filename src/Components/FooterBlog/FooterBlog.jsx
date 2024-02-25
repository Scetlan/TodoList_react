import React, { Component } from 'react';
import TasksFilter from '../Filter/TasksFilter';

export default class BlogFooter extends Component {
  render() {
    const { tasks, clearTask, filter, onFilterChange } = this.props;
    const doneCount = tasks.filter((task) => !task.done).length;

    return (
      <footer className="footer">
        <span className="todo-count">{doneCount} items left</span>
        <TasksFilter filter={filter} onFilterChange={onFilterChange}/>
        <button className="clear-completed" onClick={clearTask}>
          Clear completed
        </button>
      </footer>
    );
  }
}
