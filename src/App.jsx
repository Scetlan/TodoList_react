import './style.css';
import Header from './Components/Header/Header';
import BlogFooter from './Components/FooterBlog/FooterBlog';
import TodoList from './Components/TodoList/TodoList';
import createdData from './utils/renderData';
import { v4 } from 'uuid';
import onFilterTasks from './utils/filterTasks';

import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      filter: 'all',
    };
  }

  onFilterChange = filter => {
    this.setState({
      filter,
    });
  };

  deleteItem = id => {
    this.setState(({ tasks }) => ({
      tasks: tasks.filter(element => element.id !== id),
    }));
  };

  addItem = value => {
    const newItem = {
      label: value,
      id: v4(),
      time: createdData(new Date()),
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

  onToggleDone = id => {
    this.setState(({ tasks }) => {
      const newArray = tasks.map(task => (task.id === id ? { ...task, done: !task.done } : task));

      return {
        tasks: newArray,
      };
    });
  };

  onToggleEdit = id => {
    this.setState(({ tasks }) => {
      const newArray = tasks.map(task => (task.id === id ? { ...task, isEditing: !task.isEditing } : task));

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

  data = new Date();

  render() {
    const { tasks, filter } = this.state;
    const visibleTasks = onFilterTasks(tasks, filter);
    return (
      <>
        <Header addItem={this.addItem} />
        <section className="main">
          <TodoList
            tasks={visibleTasks}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleEdit={this.onToggleEdit}
          />
          <BlogFooter
            tasks={tasks}
            clearTask={this.clearCompleted}
            filterTasks={filter}
            onFilterChange={this.onFilterChange}
          />
        </section>
      </>
    );
  }
}

const reactRoot = createRoot(document.getElementById('container'));
reactRoot.render(<App />);
