import React from 'react'
import { Check } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Skills() {
  const skillsRef = useScrollReveal()

  const techStack = [
    'Java (Spring Boot)', 'React 19', 'TypeScript', 'JavaScript (ES6+)',
    'Python', 'Go', 'Agentes de IA', 'HTML5 & CSS3',
    'Node.js', 'SQL & Bancos Relacionais', 'Docker', 'Git & GitHub',
    'REST APIs', 'Vite', 'Tailwind CSS', 'Handlebars'
  ]

  const contributions = [
    'Desenvolvimento de aplicações web responsivas e modernas',
    'Criação de APIs RESTful estruturadas e escaláveis com Java Spring Boot',
    'Automação de processos e integração com Agentes de IA',
    'Experiência com ferramentas DevOps e linguagem Go',
    'Colaboração eficiente em equipe usando Git & metodologias ágeis',
    'Foco em qualidade de código, boas práticas e aprendizado rápido'
  ]

  return (
    <section id="habilidades" className="shell" ref={skillsRef}>
      <p className="section-label">Habilidades</p>
      <h2 className="section-title">Tecnologias e ferramentas que domino e aplico no dia a dia.</h2>

      <div className="skills-grid">
        <div className="skills-card">
          <h3>Stack Técnica</h3>
          <div className="tags">
            {techStack.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>
        </div>

        <div className="skills-card focus-card">
          <h3>Como posso agregar ao time</h3>
          <p>Comprometimento em transformar desafios em código funcional e bem testado.</p>

          <ul className="focus-list">
            {contributions.map((item, i) => (
              <li key={i}>
                <span className="check"><Check size={14} /></span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
