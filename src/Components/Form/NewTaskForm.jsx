import React, { Component } from 'react';

export default class NewTaskForm extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }

  onTaskChande = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.label);
    this.setState({
      label: '',
    });
  }

  render() {
    const { placeholder, className } = this.props;
    return (
      <form className='form-input' onSubmit={this.onSubmit}>
        <input className={className} placeholder={placeholder} autoFocus onChange={this.onTaskChande} value={this.state.label}/>
      </form>
    );
  }
}
