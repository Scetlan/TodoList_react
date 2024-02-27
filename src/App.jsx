import './style.css';
import Header from './Components/Header/Header';
import BlogFooter from './Components/FooterBlog/FooterBlog';
import TodoList from './Components/TodoList/TodoList';
import onFilterTasks from './utils/filterTasks';
import { formatDistanceToNow } from 'date-fns';
import { v4 } from 'uuid';

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
      label: value.trim(),
      id: v4(),
      timeCreation: new Date(),
      done: false,
      isEditing: false,
      time: 'created less than a minute ago',
    };

    setInterval(() => {
      this.setState(({ tasks }) => ({
        tasks: tasks.map(task => ({ ...task, time: `created ${formatDistanceToNow(task.timeCreation, { addSuffix: true })}` })),
      }));
    }, 5000);

    this.setState(({ tasks }) => ({
      tasks: [...tasks, newItem],
    }));
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
