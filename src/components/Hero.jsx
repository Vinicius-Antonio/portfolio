import React from 'react'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import profilePic from '../assets/FotoPerfil.png'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Hero() {
  const heroRef = useScrollReveal()

  return (
    <section id="inicio" className="shell hero" ref={heroRef}>
      <div>
        <span className="eyebrow">
          <span className="status-dot"></span> Aberto a oportunidades
        </span>

        <h1>
          Construo software com <em>curiosidade</em>, engenharia e propósito.
        </h1>

        <p className="hero-copy">
          Olá, eu sou <strong>Vinícius Antonio de Oliveira</strong>, estudante de <strong>Engenharia de Software na UTFPR (6º período)</strong>.
          Desenvolvo soluções Full-Stack com <strong>Java (Spring Boot), React, Python (IA) e Go</strong>, focado em criar código limpo, performático e experiências de alto valor.
        </p>

        <div className="button-row">
          <a className="button button-primary" href="#projetos">
            Ver meus projetos <ArrowDown size={18} />
          </a>
          <a className="button button-secondary" href="https://www.linkedin.com/in/vinicius-antonio-de-oliveira" target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
          </a>
          <a className="button button-secondary" href="https://github.com/Vinicius-Antonio" target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="portrait-wrap">
        <div className="portrait">
          <img src={profilePic} alt="Vinícius Antonio de Oliveira" />
        </div>
        <div className="note">
          Engenharia de Software
          <small>UTFPR · 6º período · Dev Full-Stack &amp; IA</small>
        </div>
      </div>
    </section>
  )
}
