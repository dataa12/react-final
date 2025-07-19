import '../index.css'

export default function About() {
  return (
    <div className="about-page">
      <h2>About Task Manager</h2>
      <p>
        This application was built using React to help users manage their day-to-day tasks effectively.
        It features routing, API integration, local storage support, and dynamic theming.
      </p>
      <ul>
        <li>✔️ Built with React and React Router</li>
        <li>✔️ Uses Hooks and Custom Hooks</li>
        <li>✔️ Responsive Design</li>
        <li>✔️ Dark / Light Theme Toggle</li>
      </ul>
    </div>
  )
}
