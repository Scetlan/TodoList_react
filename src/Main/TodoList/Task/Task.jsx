import React from 'react';

export const Task = ({ text, title, nameClass = ''}) => {
  return (
    <li className={nameClass}>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span className="description">{title}</span>
          <span className="created">{text}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"></button>
      </div>
    </li>
  );
};
