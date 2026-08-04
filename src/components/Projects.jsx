import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Projects() {
  const projectsRef = useScrollReveal()

  const projectList = [
    {
      num: '01',
      title: 'Comandei Platform (Full-Stack)',
      description: 'Plataforma completa de gestão de comandas e pedidos digitais para estabelecimentos. Backend em Java Spring Boot com arquitetura RESTful, frontend reativo em React 19 + TypeScript + Vite, e conteinerização completa com Docker. Projeto colaborativo em equipe.',
      techs: ['React 19', 'TypeScript', 'Java Spring Boot', 'Maven', 'Docker', 'Vite'],
      link: 'https://github.com/tavinhoo/comandei-platform'
    },
    {
      num: '02',
      title: 'AI Data Pipeline & Dashboard Generator',
      description: 'Sistema automatizado de engenharia de dados e IA em Python. Coleta e processa dados tabulares e coordena Agentes de IA (Desenvolvedor e Revisor) para gerar dashboards HTML interativos e relatórios analíticos.',
      techs: ['Python', 'Agentes de IA', 'Gemini / OpenAI API', 'Data Pipeline'],
      link: 'https://github.com/Vinicius-Antonio/ai-pipeline'
    },
    {
      num: '03',
      title: 'Sistema de Gerenciamento de Biblioteca',
      description: 'Sistema web completo para gestão de acervo de biblioteca. Controle de livros, empréstimos, devoluções e cadastro de usuários com interface amigável e funcionalidades CRUD.',
      techs: ['JavaScript', 'Handlebars', 'Node.js', 'HTML & CSS'],
      link: 'https://github.com/Vinicius-Antonio/sistema-de-gerenciamento-de-biblioteca'
    },
    {
      num: '04',
      title: 'TamagOps — Tamagotchi DevOps em Go',
      description: 'Um Tamagotchi virtual temático de DevOps escrito em Go. Projeto que combina conceitos de programação concorrente, gerenciamento de estado e terminal interativo para simular cuidados com infraestrutura.',
      techs: ['Go', 'CLI', 'Concurrency', 'Terminal UI'],
      link: 'https://github.com/Vinicius-Antonio/tamagops'
    },
    {
      num: '05',
      title: 'Café Aconchego — Web Platform CRUD',
      description: 'Aplicação web desenvolvida com arquitetura modular em Vanilla JavaScript, HTML5 e CSS3. Sistema completo de autenticação, cadastro e painel administrativo CRUD com busca em tempo real e persistência no localStorage.',
      techs: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Web Storage API'],
      link: 'https://github.com/Vinicius-Antonio'
    }
  ]

  return (
    <section id="projetos" className="projects-section">
      <div className="shell" ref={projectsRef}>
        <p className="section-label">Projetos em Destaque</p>
        <h2 className="section-title">Sistemas reais desenvolvidos na prática.</h2>

        <div className="project-list">
          {projectList.map(project => (
            <a
              key={project.num}
              className="project-card"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <span className="project-number">{project.num}</span>

              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.techs.map(t => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              <span className="arrow" aria-hidden="true">
                <ArrowUpRight size={28} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
