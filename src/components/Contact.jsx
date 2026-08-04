import React from 'react'
import { ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Contact() {
  const contactRef = useScrollReveal()

  return (
    <section id="contato" className="shell" style={{ paddingTop: 0 }} ref={contactRef}>
      <div className="contact-box">
        <p className="section-label" style={{ color: '#15221e' }}>
          Vamos conversar?
        </p>

        <h2>Pronto para somar e evoluir junto com seu time.</h2>

        <p>
          Se você busca um desenvolvedor comprometido, proativo e apaixonado por construir bons produtos, entre em contato!
        </p>

        <div className="contact-links">
          <a href="mailto:vinicius.ddev@gmail.com">
            <Mail size={18} /> vinicius.ddev@gmail.com <ArrowUpRight size={16} />
          </a>
          <a href="https://www.linkedin.com/in/vinicius-antonio-de-oliveira" target="_blank" rel="noreferrer">
            <Linkedin size={18} /> LinkedIn <ArrowUpRight size={16} />
          </a>
          <a href="https://github.com/Vinicius-Antonio" target="_blank" rel="noreferrer">
            <Github size={18} /> GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
