import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function About() {
  const aboutRef = useScrollReveal()

  return (
    <section id="sobre" className="shell about" ref={aboutRef}>
      <div>
        <p className="section-label">Sobre mim</p>
        <h2 className="section-title">Engenharia é onde conecto lógica, código e valor real.</h2>
      </div>

      <div>
        <p className="about-intro">
          Sou estudante de <strong>Engenharia de Software</strong> na <strong>UTFPR</strong> (Universidade Tecnológica Federal do Paraná), no 6º período, apaixonado por construir aplicações modernas, escaláveis e eficientes.
        </p>

        <p className="about-detail">
          Venho desenvolvendo sistemas que vão de plataformas <strong>Full-Stack</strong> (React 19, Java Spring Boot e Docker) a <strong>pipelines automatizadas de Inteligência Artificial</strong> em Python, além de projetos em <strong>Go</strong> e ferramentas de CLI.
          Busco uma oportunidade onde possa colaborar ativamente com um time de tecnologia, aplicar boas práticas de engenharia e continuar evoluindo em ritmo acelerado.
        </p>

        <div className="facts">
          <div className="fact">
            <strong>UTFPR</strong>
            <span>Eng. de Software · 6º período</span>
          </div>
          <div className="fact">
            <strong>Full-Stack</strong>
            <span>Front, Back, IA &amp; DevOps</span>
          </div>
          <div className="fact">
            <strong>2026</strong>
            <span>disponível para oportunidades</span>
          </div>
        </div>
      </div>
    </section>
  )
}
