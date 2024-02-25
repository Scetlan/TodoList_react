import React from 'react';
import Task from './Task/Task';

const TodoList = ({ tasks, onDeleted, onToggleDone, onToggleEdit }) => {
  return (
    <ul className="todo-list">
      {tasks.map((item) => {
        const { id, label, time, done, isEditing } = item;
        return (
          <li className="completed" id={id} key={id}>
            <Task
              isEditing={isEditing}
              label={label}
              time={time}
              done={done}
              onDeleted={() => {
                return onDeleted(id);
              }}
              onToggleDone={() => {
                return onToggleDone(id);
              }}
              onToggleEdit={()=>{
                return onToggleEdit(id);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
