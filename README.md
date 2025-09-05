# 🎨 ZapTex - Landing Page Profissional

<div align="center">
  <img src="assets/images/Zaptex logo color.png" alt="ZapTex Logo" width="200">
  
  [![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://zaptex.netlify.app/)
  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 🚀 **Sobre o Projeto**

Landing page moderna e responsiva desenvolvida para a **ZapTex**, empresa especializada em personalização têxtil. O projeto foi construído com foco em **performance**, **acessibilidade** e **experiência do usuário**, utilizando tecnologias web modernas e as melhores práticas de desenvolvimento.

**🌐 [Ver site ao vivo](https://zaptex.netlify.app/)**

---

## ✨ **Características Principais**

### 🎯 **Design & UX**
- ✅ Design moderno e profissional
- ✅ Interface responsiva (mobile-first)
- ✅ Animações suaves e interações fluidas
- ✅ Sistema de cores consistente
- ✅ Tipografia otimizada para legibilidade

### ⚡ **Performance**
- ✅ Carregamento otimizado de imagens (WebP + fallbacks)
- ✅ Preload de recursos críticos
- ✅ CSS e JavaScript organizados e minificados
- ✅ Lazy loading para imagens de produtos
- ✅ Skeleton loading para melhor percepção de velocidade

### 🛠️ **Funcionalidades**
- ✅ Sistema de modais interativos para produtos
- ✅ Galeria de produtos organizada por categorias
- ✅ Acordeão com perguntas frequentes
- ✅ Formulário de contato funcional
- ✅ Navegação suave entre seções
- ✅ Header com transparência dinâmica

### 📱 **Responsividade**
- ✅ Layout adaptativo para todos os dispositivos
- ✅ Breakpoints customizados
- ✅ Touch-friendly em dispositivos móveis
- ✅ Imagens otimizadas para diferentes resoluções

---

## 🏗️ **Arquitetura do Projeto**

```
zaptex-lp/
├── 📄 index.html              # Estrutura principal da página
├── 📁 assets/
│   ├── 🎨 css/
│   │   └── main.css           # Estilos organizados e otimizados
│   ├── ⚡ js/
│   │   └── main.js            # Funcionalidades interativas
│   └── 🖼️ images/
│       ├── hero-section-banner10.webp
│       ├── Zaptex logo color.png
│       └── mockups/           # Galeria de produtos
├── 📖 README.md               # Documentação do projeto
└── 🔧 netlify.toml           # Configurações de deploy
```

### 🧱 **Componentes Principais**

#### 1. **Hero Section**
- Banner de alta qualidade com gradiente overlay
- Call-to-action prominente
- Carregamento otimizado com skeleton loading

#### 2. **Seção Sobre**
- Layout em grid responsivo
- Galeria de imagens com lazy loading
- Bullets informativos com animações

#### 3. **Catálogo de Produtos**
- 4 linhas principais de produtos
- Sistema de modal com grid de imagens
- Navegação por categorias

#### 4. **Diferenciais**
- Cards premium com hover effects
- Ícones personalizados
- Layout responsivo

#### 5. **FAQ Interativo**
- Acordeão funcional
- Animações suaves de expansão
- Conteúdo organizado

#### 6. **Formulário de Contato**
- Validação client-side
- Feedback visual ao usuário
- Design acessível

---

## 🛠️ **Tecnologias Utilizadas**

### **Frontend**
- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Styling moderno com flexbox/grid e animações
- **JavaScript (ES6+)** - Interatividade e funcionalidades dinâmicas
- **Tailwind CSS** - Framework utilitário para styling rápido

### **Otimizações**
- **WebP** - Formato de imagem otimizado
- **CSS Custom Properties** - Variáveis para manutenibilidade
- **Intersection Observer** - Animações em scroll performáticas
- **Preload/Prefetch** - Carregamento inteligente de recursos

### **Deploy & Hosting**
- **Netlify** - Hosting e CI/CD automatizado
- **Git** - Controle de versão
- **GitHub** - Repositório e colaboração

---

## 🚀 **Como Executar o Projeto**

### **Opção 1: Visualização Direta**
```bash
# Clone o repositório
git clone https://github.com/lucassilva/zaptex-lp.git

# Navegue até o diretório
cd zaptex-lp

# Abra o index.html no navegador
# Ou use um servidor local (recomendado)
```

### **Opção 2: Servidor Local (Recomendado)**
```bash
# Com Python
python -m http.server 8000

# Com Node.js (http-server)
npx http-server

# Com PHP
php -S localhost:8000

# Acesse: http://localhost:8000
```

### **Opção 3: Live Server (VS Code)**
1. Instale a extensão "Live Server"
2. Clique com botão direito no `index.html`
3. Selecione "Open with Live Server"

---

## 🎨 **Paleta de Cores**

```css
:root {
  /* Cores Primárias */
  --azul-primario: #1b26c4;      /* Azul principal */
  --azul-secundario: #2563eb;    /* Azul hover */
  --azul-escuro: #1e40af;        /* Azul escuro */
  
  /* Cores de Apoio */
  --cinza-claro: #f8fafc;        /* Backgrounds */
  --cinza-medio: #64748b;        /* Textos secundários */
  --cinza-escuro: #1e293b;       /* Textos principais */
  
  /* Cores de Estado */
  --verde-sucesso: #10b981;      /* Sucesso */
  --vermelho-erro: #ef4444;      /* Erro */
  --amarelo-aviso: #f59e0b;      /* Aviso */
}
```

---

## 📱 **Responsividade & Breakpoints**

```css
/* Mobile First Approach */
.container {
  /* Mobile: 320px+ */
  padding: 1rem;
}

@media (min-width: 640px) {
  /* Tablet Small */
}

@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1280px) {
  /* Large Desktop */
}

@media (min-width: 1600px) {
  /* Extra Large */
}
```

---

## ⚡ **Otimizações de Performance**

### **Imagens**
- ✅ Formato WebP com fallback para PNG/JPG
- ✅ Lazy loading para imagens não críticas
- ✅ Preload para imagem da hero section
- ✅ Compressão otimizada

### **CSS**
- ✅ Critical CSS inline (removido após refatoração)
- ✅ Variáveis CSS para manutenibilidade
- ✅ Animações com `transform` e `opacity`
- ✅ Media queries organizadas

### **JavaScript**
- ✅ Event listeners otimizados com `passive: true`
- ✅ Intersection Observer para scroll animations
- ✅ Debounce em eventos de scroll/resize
- ✅ Modularização do código

---

## 🔧 **Configuração do Netlify**

```toml
# netlify.toml
[build]
  publish = "."

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "*.webp"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.css"
  [headers.values]
    Cache-Control = "public, max-age=31536000"

[[headers]]
  for = "*.js"
  [headers.values]
    Cache-Control = "public, max-age=31536000"
```

---

## 🎯 **Funcionalidades Detalhadas**

### **Sistema de Modais de Produtos**
```javascript
// Categorias disponíveis
const productCategories = {
  uniformes: 'Linha Uniformes Profissionais',
  sports: 'Linha Sports & Atléticas',
  eventos: 'Linha Eventos & Brindes',
  igreja: 'Linha Igreja / Desbravadores'
};

// Abertura de modal com lazy loading
function openProductModal(category) {
  // Carregamento dinâmico de imagens
  // Grid responsivo
  // Navegação por teclado (ESC para fechar)
}
```

### **Animações de Scroll**
```javascript
// Intersection Observer para performance
const observerOptions = {
  root: null,
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1
};

// Reveal elements com delay escalonado
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-active');
    }
  });
}, observerOptions);
```

### **Header Dinâmico**
```javascript
// Transparência baseada no scroll
function evaluateHeaderState() {
  const heroHeight = hero.getBoundingClientRect().height;
  const scrollPassed = window.scrollY > (heroHeight * 0.55);
  header.classList.toggle('nav-solid', scrollPassed);
}
```

---

## 🔍 **SEO & Acessibilidade**

### **Meta Tags Otimizadas**
```html
<meta name="description" content="ZapTex - Personalização têxtil de alta qualidade. Uniformes profissionais, roupas esportivas e produtos personalizados.">
<meta name="keywords" content="personalização têxtil, uniformes, camisas personalizadas, ZapTex">
<meta property="og:title" content="ZapTex - Personalização Têxtil Premium">
<meta property="og:description" content="Especialistas em personalização têxtil com qualidade superior e designs únicos.">
<meta property="og:image" content="assets/images/hero-section-banner10.webp">
```

### **Acessibilidade**
- ✅ Estrutura semântica com HTML5
- ✅ Alt text em todas as imagens
- ✅ Navegação por teclado
- ✅ Contraste adequado de cores
- ✅ ARIA labels onde necessário
- ✅ Focus indicators visíveis

---

## 📊 **Métricas de Performance**

### **Lighthouse Score Target**
- 🎯 **Performance**: 95+
- 🎯 **Accessibility**: 100
- 🎯 **Best Practices**: 100
- 🎯 **SEO**: 100

### **Core Web Vitals**
- ✅ **LCP (Largest Contentful Paint)**: < 2.5s
- ✅ **FID (First Input Delay)**: < 100ms
- ✅ **CLS (Cumulative Layout Shift)**: < 0.1

---

## 🔄 **Histórico de Versões**

### **v2.0.0** - Refatoração Completa *(Atual)*
- ✅ Separação de CSS e JS em arquivos externos
- ✅ Arquitetura modular e manutenível
- ✅ Otimizações de performance implementadas
- ✅ Correção de bugs de UI (bordas, parallax)

### **v1.3.0** - Correções de UX
- ✅ Fix do movimento indesejado da hero no scroll
- ✅ Otimização de carregamento de imagens
- ✅ Bordas arredondadas nos modais corrigidas

### **v1.2.0** - Expansão de Produtos
- ✅ Adição de wind banners 4x4
- ✅ Novos mockups de produtos
- ✅ Melhorias na galeria

### **v1.1.0** - Melhorias Iniciais
- ✅ Sistema de modais implementado
- ✅ Responsividade aprimorada
- ✅ Animações adicionadas

### **v1.0.0** - Lançamento Inicial
- ✅ Landing page básica funcional
- ✅ Design responsivo implementado
- ✅ Estrutura HTML/CSS/JS inline

---

## 🤝 **Contribuição**

Embora este seja um projeto de portfólio pessoal, feedbacks e sugestões são sempre bem-vindos!

### **Como contribuir:**
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

---

## 📞 **Contato & Links**

- 🌐 **Site ao vivo**: [zaptex.netlify.app](https://zaptex.netlify.app/)
- 💼 **LinkedIn**: [Lucas Silva](https://linkedin.com/in/lucassilva)
- 🐙 **GitHub**: [@lucassilva](https://github.com/lucassilva)
- 📧 **Email**: lucas.silva@email.com

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 **Agradecimentos**

- **Tailwind CSS** - Framework CSS utilitário
- **Unsplash/Pexels** - Imagens de alta qualidade
- **Google Fonts** - Tipografia (Inter)
- **Netlify** - Hosting e deploy automatizado
- **Comunidade Dev** - Inspiração e melhores práticas

---

<div align="center">
  <strong>Desenvolvido com ❤️ por Lucas Silva</strong>
  <br>
  <sub>Transformando ideias em experiências digitais excepcionais</sub>
</div>

---

## 🏷️ **Tags**

`#LandingPage` `#ResponsiveDesign` `#JavaScript` `#CSS3` `#HTML5` `#TailwindCSS` `#WebDevelopment` `#Portfolio` `#Netlify` `#Performance` `#UX` `#ModernWeb`
