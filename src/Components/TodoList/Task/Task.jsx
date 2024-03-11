export default function Task({ time, label, onDeleted, onToggleDone, onToggleEdit, startTimer, stopTimer, timer }) {
  const { min, sec } = timer;

  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={onToggleDone} />
      <label>
        <span className="title">{label}</span>
        <span className="description">
          <button className="icon icon-play" onClick={startTimer}></button>
          <button className="icon icon-pause" onClick={stopTimer}></button>
          {min}:{sec}
        </span>
        <span className="description">{time}</span>
      </label>
      <button type="button" className="icon icon-edit" onClick={onToggleEdit} aria-label="Edit" />
      <button type="button" className="icon icon-destroy" onClick={onDeleted} aria-label="Delete" />
    </div>
  );
}

Task.defaultProps = {
  time: '',
  done: false,
  label: '',
  onToggleDone: () => {},
  onDeleted: () => {},
  onToggleEdit: () => {},
  startTimer: () => {},
  stopTimer: () => {}
};
