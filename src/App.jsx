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

  stopTimer = id => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(prevTask => {
        if (prevTask.id === id && prevTask.timer.timerRunning) {
          clearInterval(prevTask.timer.intervalId);
          return {
            ...prevTask,
            timer: {
              ...prevTask.timer,
              timerRunning: false,
              lastStoppedMin: prevTask.timer.min,
              lastStoppedSec: prevTask.timer.sec,
            },
          };
        }
        return prevTask;
      }),
    }));
  };

  startTimer = id => {
    this.setState(({ tasks }) => {
      const newArray = tasks.map(task => {
        if (task.id === id && !task.timer.timerRunning) {
          let { min, sec } = task.timer;
          task.timer.intervalId = setInterval(() => {
            if (sec > 0) {
              sec -= 1;
            } else if (min > 0) {
              sec = 59;
              min -= 1;
            } else {
              clearInterval(task.timer.intervalId);
              return;
            }
            this.setState(prevState => ({
              tasks: prevState.tasks.map(prevTask =>
                prevTask.id === id ? { ...prevTask, timer: { ...prevTask.timer, sec, min } } : prevTask
              ),
            }));
          }, 1000);
          return {
            ...task,
            timer: {
              ...task.timer,
              timerRunning: true,
              intervalId: task.timer.intervalId,
            },
          };
        }
        return task;
      });
      return { tasks: newArray };
    });
  };

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

  addItem = (label, minutes, seconds) => {
    const currentDate = new Date();
    const newItem = {
      label: label,
      id: v4(),
      timer: {
        timerRunning: false,
        min: minutes,
        sec: seconds,
      },
      timeCreation: currentDate,
      done: false,
      isEditing: false,
      time: 'created just',
    };

    setInterval(() => {
      this.setState(prevState => ({
        tasks: prevState.tasks.map(prevTask => ({
          ...prevTask,
          time: 'created ' + formatDistanceToNow(prevTask.timeCreation, { addSuffix: true, includeSeconds: true }),
        })),
      }));
    }, 5000);

    this.setState(({ tasks }) => ({
      tasks: [...tasks, newItem],
    }));
  };

  updateItem = (id, value) => {
    this.setState(({ tasks }) => {
      const data = [...tasks];
      let newArray = data.map(task => (task.id === id ? { ...task, label: value, isEditing: false } : task));
      return {
        tasks: newArray,
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

  clearCompleted = (tasks) => {
    const newTasks = tasks.filter(task => !task.done);
    this.setState({
      tasks: newTasks,
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
            addItem={this.addItem}
            updateItem={this.updateItem}
            tasks={visibleTasks}
            onDeleted={this.deleteItem}
            onToggleDone={this.onToggleDone}
            onToggleEdit={this.onToggleEdit}
            startTimer={this.startTimer}
            stopTimer={this.stopTimer}
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
