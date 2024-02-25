import React, { Component } from 'react';
import NewTaskForm from '../Form/NewTaskForm';

export class Header extends Component {

  render() {
    const {addItem} = this.props
    return (
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm className="new-todo" placeholder="What needs to be done?" addItem={addItem}/>
      </header>
    );
  }
}
