import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import { uuid } from 'react-uuid';

import './style.css';
import { Header } from './Components/Header/Header';
import BlogFooter from './Components/FooterBlog/FooterBlog';
import TodoList from './Components/TodoList/TodoList';
import createdData from './utils/renderData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      filter: 'all',
    };
  }

  onFilterChange = (filter) => {
    this.setState({
      filter
    })
  };

  Filter = (tasks, filter) => {
    switch (filter) {
      case 'All':
        return tasks;
      case 'Active':
        return tasks.filter((task) => !task.done);
      case 'Completed':
        return tasks.filter((task) => task.done);
      default:
        return tasks;
    }
  };

  deleteItem = (id) => {
    this.setState(({ tasks }) => {
      return {
        tasks: tasks.filter((element) => element.id !== id),
      };
    });
  };

  idx = 10;
  addId = (id) => {
    this.idx = id + 1;
    return this.idx;
  };

  addItem = (value) => {
    const newItem = {
      label: value,
      id: this.addId(this.idx),
      time: createdData(),
      done: false,
      isEditing: false,
    };

    this.setState(({ tasks }) => {
      const newTasks = [...tasks, newItem];
      return {
        tasks: newTasks,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ tasks }) => {
      const newArray = tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task));

      return {
        tasks: newArray,
      };
    });
  };

  onToggleEdit = (id) => {
    this.setState(({ tasks }) => {
      const newArray = tasks.map((task) => (task.id === id ? { ...task, isEditing: !task.isEditing } : task));

      return {
        tasks: newArray,
      };
    });
  };

  clearCompleted = () => {
    this.setState({
      tasks: [],
    });
  };

  render() {
    const { tasks, filter } = this.state;
    const visibleTasks = this.Filter(tasks, filter);
    return (
      <>
        <Header addItem={this.addItem} />
        <section className="main">
          <TodoList
            tasks={this.state.tasks}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleEdit={this.onToggleEdit}
          />
          <BlogFooter
            tasks={tasks}
            clearTask={this.clearCompleted}
            filter={filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </>
    );
  }
}

const reactRoot = createRoot(document.getElementById('container'));
reactRoot.render(<App />);
