import React from 'react'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>&copy; {new Date().getFullYear()} Task Manager App. All rights reserved.</p>
    </footer>
  )
}

const styles = {
  footer: {
    marginTop: 'auto',
    padding: '1rem',
    textAlign: 'center',
    background: '#f0f0f0',
    borderTop: '1px solid #ddd',
  },
}
