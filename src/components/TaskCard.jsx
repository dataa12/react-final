export default function TaskCard({ task }) {
  return (
    <div className="task-card">
      <h4 className="task-title">{task.title}</h4>
      <p className={`task-status ${task.completed ? 'done' : 'pending'}`}>
        {task.completed ? '✅ Done' : '⏳ Pending'}
      </p>
    </div>
  )
}
