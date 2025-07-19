import '../index.css'

export default function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Task Manager</h1>
      <p>Your all-in-one solution to track, manage, and stay on top of your daily goals.</p>
      <div className="cta-buttons">
        <a href="/tasks" className="btn">View Tasks</a>
        <a href="/about" className="btn secondary">About</a>
      </div>
    </div>
  )
}
