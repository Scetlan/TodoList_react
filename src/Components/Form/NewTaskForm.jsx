import React from 'react';
export default class NewTaskForm extends React.Component {
  state = {
    label: '',
    minutes: '',
    seconds: '',
  }

  handleKeyUp = (event) => {
    const { label, minutes, seconds } = this.state;
    event.preventDefault();

    if (label === '') {
      return;
    } else if (event.code === 'Enter') {
      if (isNaN(minutes) || isNaN(seconds)) {
        this.setState({ label: '', minutes: '', seconds: '' });
      } else {
        this.props.addItem(label, Number(minutes), Number(seconds));
        this.setState({
          label: '',
          minutes: '',
          seconds: '',
        });
      };
    };
  }

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  }

  onChangeMinSec = (element, name) => {
    if (element.target.value > 60 || element.target.value < 0) {
      return;
    }
    this.setState({
      [name]: element.target.value,
    });
  }

  onMinChange = (e) => {
    this.onChangeMinSec(e, 'minutes');
  }

  onSecondChange = (e) => {
    this.onChangeMinSec(e, 'seconds');
  }

  render() {
    const { label, minutes, seconds } = this.state;

    return (
      <header className="header">
        <h1>todos</h1>
        <form className="new-todo-form">
          <input
            onKeyUp={this.handleKeyUp}
            onChange={this.onLabelChange}
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus=""
            value={label}
          />
          <input
            value={minutes}
            onKeyUp={this.handleKeyUp}
            onChange={this.onMinChange}
            className="new-todo-form__timer"
            placeholder="Min"
            autoFocus=""
          />
          <input
            value={seconds}
            onKeyUp={this.handleKeyUp}
            onChange={this.onSecondChange}
            className="new-todo-form__timer"
            placeholder="Sec"
            autoFocus=""
          />
        </form>
      </header>
    );
  };
}

NewTaskForm.defaultProps = {
  addItem: () => {},
  placeholder: '',
};
