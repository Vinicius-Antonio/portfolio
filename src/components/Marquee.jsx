import React from 'react'

export function Marquee() {
  const items = [
    'Engenharia de Software 2026',
    'Java Spring Boot & REST APIs',
    'React 19 & TypeScript',
    'Agentes de IA & Data Pipelines',
    'Go & DevOps',
    'Desenvolvimento Full-Stack',
    'UTFPR · 6º Período',
    'Aprendizado Contínuo & Agilidade'
  ]

  return (
    <div className="strip" aria-hidden="true">
      <div className="strip-track">
        {items.concat(items).map((item, index) => (
          <span key={index}>
            {item} <b>✦</b>
          </span>
        ))}
      </div>
    </div>
  )
}
