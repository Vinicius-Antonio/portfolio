import React, { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'
import { useScrolled } from '../hooks/useScrolled'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const isScrolled = useScrolled(20)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Trajetória', href: '#trajetoria' },
    { label: 'Contato', href: '#contato' }
  ]

  const handleLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
      <div className="shell">
        <nav className="nav" aria-label="Navegação principal">
          <a className="brand" href="#inicio">
            vinicius<span>.dev</span>
          </a>

          <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} id="nav-menu">
            {navItems.map(item => (
              <a key={item.href} href={item.href} onClick={handleLinkClick}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Alternar para modo ${theme === 'light' ? 'escuro' : 'claro'}`}
              title={`Modo ${theme === 'light' ? 'Escuro' : 'Claro'}`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              className="menu-button"
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="nav-menu"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
