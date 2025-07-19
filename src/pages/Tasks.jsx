import { useState } from 'react'
import { useFetch } from '../hooks/useFetch'
import TaskCard from '../components/TaskCard'
import '../index.css'

export default function Tasks() {
  const { data: tasks, loading } = useFetch('https://jsonplaceholder.typicode.com/todos?_limit=20')
  const [filter, setFilter] = useState('all')

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true
    return filter === 'completed' ? task.completed : !task.completed
  })

  return (
    <div className="tasks-page">
      <h2>My Tasks</h2>
      <div className="filters">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
        <button onClick={() => setFilter('pending')} className={filter === 'pending' ? 'active' : ''}>Pending</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="task-list">
          {filteredTasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  )
}
