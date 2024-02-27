import NewTaskForm from '../Form/NewTaskForm';

export default function Header({ addItem }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm className="new-todo" placeholder="What needs to be done?" addItem={addItem} />
    </header>
  );
}
