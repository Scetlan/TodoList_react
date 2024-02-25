import React, { Component } from 'react';

export default class Task extends Component {
  addClass = (state) => {
    switch (state) {
      case true:
        return 'description';
      case false:
        return;
    }
  };

  render() {
    const { time, done, label, onDeleted, onToggleDone, onToggleEdit, isEditing } = this.props;
    return (
      <div className="view">
        <input className="toggle" type="checkbox" onChange={onToggleDone} />
        {isEditing ? (
          <label>
            <input className='change-task' type="text" value={label}/>
            <span className="created">{time}</span>
          </label>
        ) : (
          <>
            <label>
              <span className={this.addClass(done)}>{label}</span>
              <span className="created">{time}</span>
            </label>
          </>
        )}
        {/* <label>
          <span className={this.addClass(done)}>{label}</span>
          <span className="created">{time}</span>
        </label> */}
        <button className="icon icon-edit" onClick={onToggleEdit}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    );
  }
}
