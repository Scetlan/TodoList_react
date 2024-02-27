import addClass from '../../../utils/addClassDescription';

export default function Task({ time, done, label, onDeleted, onToggleDone, onToggleEdit, isEditing }) {
  return (
    <div className="view">
      <input className="toggle" type="checkbox" onChange={onToggleDone} />
      {isEditing ? (
        <label>
          <input className="change-task" type="text" value={label} />
        </label>
      ) : (
        <label>
          <span className={addClass(done)}>{label}</span>
          <span className="created">{time}</span>
        </label>
      )}
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
};
