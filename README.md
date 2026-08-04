# 💻 Portfólio Profissional — Vinícius Antônio

![React 19](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Vanilla-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)

Aplicação web moderna e responsiva de portfólio pessoal desenvolvida com **React 19** e **Vite**, projetada com foco em alta performance, UI/UX intuitiva e design elegante com suporte a tema Claro/Escuro (Dark Mode).

---

## ✨ Funcionalidades

- 🌓 **Dark / Light Mode**: Alternância de tema personalizada com salvamento automático de preferência.
- 📱 **Design 100% Responsivo**: Adaptado para telas mobile, tablet e desktop.
- 📜 **Barra de Progresso de Leitura**: Indicador visual do scroll na parte superior.
- 🚀 **Apresentação Hero**: Seção inicial impactante com animações e download direto de currículo.
- 👨‍💻 **Sobre Mim & Trajetória**: Apresentação da jornada profissional e acadêmica.
- 💡 **Habilidades & Tecnologias**: Grid e carrossel (Marquee) interativo com tecnologias dominadas.
- 📁 **Projetos em Destaque**: Galeria de projetos com filtros, descrição detalhada, tags e links diretos para código e demonstração.
- 📬 **Formulário de Contato**: Formulário dinâmico integrado para envio rápido de mensagens.

---

## 🛠️ Tecnologias Utilizadas

- **Core**: [React 19](https://react.dev/), [JavaScript (ES6+)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Estilização**: CSS Vanilla (Design System com variáveis CSS, Grid, Flexbox e Glassmorphism)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Deploy**: Prontamente configurado para [Vercel](https://vercel.com/) (`vercel.json`)

---

## 📂 Estrutura do Projeto

```text
portfolio/
├── public/              # Arquivos públicos e assets
├── src/
│   ├── components/      # Componentes modulares de UI (Navbar, Hero, Projects, Skills, etc.)
│   ├── context/         # Context API (Gerenciamento do Tema Dark/Light)
│   ├── hooks/           # Custom Hooks
│   ├── styles/          # Variáveis de CSS global e componentes estilizados
│   ├── App.jsx          # Componente principal da aplicação
│   └── main.jsx         # Ponto de entrada do React
├── index.html           # HTML raiz
├── package.json         # Dependências do projeto
├── vercel.json          # Configuração de rotas e build para Vercel
└── vite.config.js       # Configurações do Vite
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (Versão 18 ou superior recomendada)
- npm ou yarn

### Passo a passo

1. **Clonar o repositório:**
   ```bash
   git clone https://github.com/Vinicius-Antonio/portfolio.git
   ```

2. **Acessar a pasta do projeto:**
   ```bash
   cd portfolio
   ```

3. **Instalar as dependências:**
   ```bash
   npm install
   ```

4. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Acessar no navegador:**
   Abra a URL indicada no terminal (geralmente `http://localhost:5173`).

---

## 📦 Como Fazer o Build para Produção

Para gerar os arquivos otimizados de produção na pasta `dist`:

```bash
npm run build
```

Para testar o build localmente antes de publicar:

```bash
npm run preview
```

---

## ✉️ Contato

Desenvolvido por **Vinícius Antônio de Oliveira**  
- **Email**: vinicius.ddev@gmail.com  
- **GitHub**: [@Vinicius-Antonio](https://github.com/Vinicius-Antonio)  

---

⭐️ *Se gostou do projeto, considere dar uma estrela no repositório!*
