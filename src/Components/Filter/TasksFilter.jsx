import React, { Component } from 'react';

export default class TasksFilter extends Component {
  constructor() {
    super();
    this.state = {
      buttons: [
        { name: 'all', text: 'All' },
        { name: 'active', text: 'Active' },
        { name: 'completed', text: 'Completed' },
      ],
    };
  }

  render() {
    const { buttons } = this.state;
    const { filter, onFilterChange } = this.props;

    const newButtons = buttons.map(({ name, text }) => {
      const isActive = filter === name;
      const addClass = isActive ? 'selected' : '';
      return (
        <li key={name}>
          <button className={addClass} onClick={() => onFilterChange(name)}>{text}</button>
        </li>
      );
    });
    return <ul className="filters">{newButtons}</ul>;
  }
}
