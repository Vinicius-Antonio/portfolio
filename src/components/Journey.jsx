import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Journey() {
  const journeyRef = useScrollReveal()

  const timelineItems = [
    {
      time: 'Atual · 6º período',
      title: 'Engenharia de Software — UTFPR',
      description: 'Universidade Tecnológica Federal do Paraná. Construção de base sólida em arquitetura de software, estrutura de dados, orientação a objetos, banco de dados e metodologias ágeis de desenvolvimento.'
    },
    {
      time: 'Evolução Constante',
      title: 'Projetos Práticos & Inteligência Artificial',
      description: 'Desenvolvimento Full-Stack com Java Spring Boot, React 19 e TypeScript. Automação com Agentes de IA e APIs de LLMs em Python. Projetos de DevOps em Go.'
    },
    {
      time: 'Próximo Passo',
      title: 'Desenvolvedor Java Jr / Full-Stack',
      description: 'Em busca de integração em um time de produto para somar com curiosidade, disciplina e entregas de código com valor de negócio. Interesse em vagas de Desenvolvedor Java Jr e Full-Stack.'
    }
  ]

  return (
    <section id="trajetoria" className="shell journey" ref={journeyRef}>
      <div>
        <p className="section-label">Formação &amp; Trajetória</p>
        <h2 className="section-title">Evolução constante guiada pela prática.</h2>
        <p style={{ color: 'var(--muted)', maxWidth: '320px', lineHeight: 1.6 }}>
          Uma visão geral sobre meus estudos, áreas de foco e objetivos profissionais.
        </p>
      </div>

      <div className="timeline">
        {timelineItems.map((item, index) => (
          <article key={index} className="timeline-item">
            <time>{item.time}</time>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
