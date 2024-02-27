import React from 'react';

export default class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      label: '',
    };
  }

  onTaskChande = e => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { label } = this.state;
    const { addItem } = this.props;
    addItem(label);
    this.setState({
      label: '',
    });
  };

  render() {
    const { placeholder, className } = this.props;
    const { label } = this.state;
    return (
      <form className="form-input" onSubmit={this.onSubmit}>
        <input className={className} placeholder={placeholder} onChange={this.onTaskChande} value={label} />
      </form>
    );
  }
}

NewTaskForm.defaultProps = {
  addItem: () => {},
  placeholder: '',
};
