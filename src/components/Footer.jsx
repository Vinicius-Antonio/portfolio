import React from 'react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="shell">
      <span>© {year} Vinícius Antonio de Oliveira. Desenvolvido com React &amp; Vite.</span>
      <span>Engenharia de Software · 6º período</span>
    </footer>
  )
}
