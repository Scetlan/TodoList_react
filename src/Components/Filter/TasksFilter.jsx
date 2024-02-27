import React from 'react';

export default class TasksFilter extends React.Component {
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
          <button type="button" className={addClass} onClick={() => onFilterChange(name)}>
            {text}
          </button>
        </li>
      );
    });
    return <ul className="filters">{newButtons}</ul>;
  }
}

TasksFilter.defaultProps = {
  onFilterChange: () => {},
  filter: 'all',
};
