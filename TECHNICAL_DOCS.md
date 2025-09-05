# 📋 Documentação Técnica - ZapTex Landing Page

## 🗂️ Estrutura de Arquivos Detalhada

```
zaptex-lp/
├── 📄 index.html                    # Página principal (594 linhas)
├── 📖 README.md                     # Documentação principal
├── 📋 TECHNICAL_DOCS.md            # Esta documentação técnica
├── 📄 LICENSE                       # Licença MIT
├── ⚙️ netlify.toml                 # Configurações do Netlify
├── 🚫 .gitignore                   # Arquivos ignorados pelo Git
├── 📁 assets/
│   ├── 🎨 css/
│   │   └── main.css                # Estilos principais (1594 linhas)
│   ├── ⚡ js/
│   │   └── main.js                 # Scripts principais (450+ linhas)
│   └── 🖼️ images/
│       ├── hero-section-banner10.webp    # Banner principal (WebP otimizado)
│       ├── hero-section-banner1.png      # Fallback PNG
│       ├── hero-section-banner22.png     # Alternativa
│       ├── hero-section-banner3.png      # Alternativa
│       ├── Zaptex logo black.png         # Logo versão escura
│       ├── Zaptex logo color.png         # Logo colorido (principal)
│       ├── Zaptex logo white.png         # Logo versão clara
│       └── 📁 mockups/
│           └── 📁 Mockups/
│               ├── 📁 Avental/           # Aventais profissionais
│               ├── 📁 Camisas, Abadás, Shorts e Coletes/
│               ├── 📁 Croppeds (Arthur)/
│               ├── 📁 Regata com Capuz (Arthur)/
│               ├── 📁 Wind Banner (Arthur)/
│               ├── 📁 Bandeiras (Arthur)/
│               ├── 📁 Almofadas/
│               ├── 📁 X Banner/
│               ├── Desbravadores.png
│               └── ações missionárias.png
```

## 🧩 Componentes e Funcionalidades

### 1. **Header Dinâmico**
- **Arquivo**: `index.html` (linhas 18-30)
- **Estilos**: `main.css` (linhas 70-150)
- **JavaScript**: `main.js` (linhas 380-400)

**Funcionalidades**:
- Transparência dinâmica baseada no scroll
- Menu responsivo (desktop/mobile)
- Logo clicável
- Navegação suave entre seções

### 2. **Hero Section**
- **Arquivo**: `index.html` (linhas 36-48)
- **Estilos**: `main.css` (linhas 160-210)
- **JavaScript**: `main.js` (linhas 420-470)

**Características**:
- Background com imagem WebP otimizada
- Gradiente overlay para legibilidade
- Animação de skeleton loading
- Preload de imagem crítica
- Responsivo com breakpoints customizados

### 3. **Sistema de Modais de Produtos**
- **JavaScript**: `main.js` (linhas 50-200)
- **Estilos**: `main.css` (linhas 800-900)

**Base de dados de produtos**:
```javascript
const productImages = {
  uniformes: [...], // 4 imagens de aventais
  sports: [...],    // 17 imagens (camisas, abadás, coletes, croppeds, regatas)
  eventos: [...],   // 15 imagens (wind banners, bandeiras, almofadas, x-banner)
  igreja: [...]     // 2 imagens (desbravadores, ações missionárias)
};
```

**Funcionalidades**:
- Carregamento lazy de imagens
- Grid responsivo
- Nomenclatura automática e personalizada
- Tratamento de erro de imagens
- Navegação por teclado (ESC)

### 4. **Seção Sobre**
- **Arquivo**: `index.html` (linhas 50-80)
- **Estilos**: `main.css` (linhas 400-500)

**Layout**:
- Grid 2 colunas (desktop) / 1 coluna (mobile)
- Galeria de imagens com lazy loading
- Lista de benefícios com ícones
- Animações de entrada escalonadas

### 5. **Acordeão FAQ**
- **JavaScript**: `main.js` (linhas 250-290)
- **Estilos**: `main.css` (linhas 1200-1300)

**Funcionalidades**:
- Expansão/contração suave
- Múltiplos itens podem estar abertos
- Ícones animados
- Acessibilidade com ARIA

### 6. **Formulário de Contato**
- **Arquivo**: `index.html` (linhas 500-550)
- **JavaScript**: `main.js` (linhas 300-330)
- **Estilos**: `main.css` (linhas 1400-1500)

**Validações**:
- Campos obrigatórios
- Feedback visual
- Reset automático após envio
- Estados de loading

## ⚡ Otimizações de Performance

### **Carregamento de Imagens**
```javascript
// Preload da hero section
<link rel="preload" as="image" href="./assets/images/hero-section-banner10.webp" fetchpriority="high"/>

// Lazy loading para produtos
<img loading="lazy" onerror="this.src='assets/images/mockups/placeholder.jpg'">
```

### **CSS Otimizado**
- **Variáveis CSS** para manutenibilidade
- **Animações** com `transform` e `opacity`
- **Media queries** organizadas por breakpoint
- **Critical path** otimizado

### **JavaScript Performance**
```javascript
// Event listeners otimizados
window.addEventListener('scroll', evaluate, {passive: true});

// Intersection Observer para animações
const observer = new IntersectionObserver(callback, {
  rootMargin: '0px 0px -100px 0px',
  threshold: 0.1
});
```

## 🎨 Sistema de Design

### **Variáveis CSS**
```css
:root {
  /* Cores Primárias */
  --azul-primario: #1b26c4;
  --azul-secundario: #2563eb;
  --azul-escuro: #1e40af;
  
  /* Tipografia */
  --font-brand: 'Ubuntu', 'Poppins', sans-serif;
  --font-sans: 'Poppins', sans-serif;
  
  /* Espaçamentos */
  --container-max: 1200px;
  --padding-section: 4rem 0;
  
  /* Shadows */
  --shadow-card: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-modal: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### **Breakpoints Responsivos**
```css
/* Mobile First */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
@media (min-width: 1600px) { /* 2xl */ }
```

## 🔧 Configurações de Deploy

### **Netlify Configuration**
```toml
[build]
  publish = "."
  command = "echo 'No build command needed for static site'"

# Headers de segurança e performance
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    Content-Security-Policy = "..."

# Cache agressivo para assets estáticos
[[headers]]
  for = "*.{webp,png,jpg,css,js,woff2}"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 📊 Métricas e Monitoramento

### **Core Web Vitals Target**
- **LCP**: < 2.5s (hero image otimizada)
- **FID**: < 100ms (event listeners otimizados)
- **CLS**: < 0.1 (dimensões fixas para imagens)

### **Lighthouse Checklist**
- ✅ Performance: 95+
- ✅ Accessibility: 100 (alt texts, ARIA, contraste)
- ✅ Best Practices: 100 (HTTPS, sem vulnerabilidades)
- ✅ SEO: 100 (meta tags, estrutura semântica)

## 🛡️ Segurança

### **Headers de Segurança**
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy: ...`

### **Validação Client-Side**
```javascript
// Sanitização básica de inputs
function sanitizeInput(input) {
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}
```

## 🔄 Fluxo de Desenvolvimento

### **Git Workflow**
```bash
# Desenvolvimento local
git checkout -b feature/nova-funcionalidade
git add .
git commit -m "feat: adiciona nova funcionalidade"
git push origin feature/nova-funcionalidade

# Deploy automático via Netlify
# Merge para main -> Deploy automático
```

### **Testing Checklist**
- [ ] Responsividade em todos os breakpoints
- [ ] Funcionalidade em todos os navegadores modernos
- [ ] Performance (Lighthouse score)
- [ ] Acessibilidade (screen readers)
- [ ] SEO (meta tags, structured data)

## 📱 Compatibilidade

### **Navegadores Suportados**
- Chrome 90+
- Firefox 85+
- Safari 14+
- Edge 90+

### **Devices Testados**
- iPhone 12/13/14 (375px)
- iPad (768px)
- Desktop 1920px+
- Ultrawide 2560px+

## 🚀 Deploy Instructions

### **Netlify Deploy**
1. Conectar repositório GitHub
2. Build settings: `publish = "."`
3. Environment variables (se necessário)
4. Domain settings: `zaptex.netlify.app`

### **Alternative Deploy Options**
- **Vercel**: Zero config deployment
- **GitHub Pages**: Branch-based deployment
- **Firebase Hosting**: Google Cloud integration

## 📈 Analytics & Tracking

### **Implementação Futura**
```html
<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>

<!-- Microsoft Clarity -->
<script type="text/javascript">
  // Clarity tracking code
</script>
```

### **Métricas Importantes**
- Tempo de permanência na página
- Taxa de conversão (formulários)
- Cliques nos modais de produtos
- Performance em dispositivos móveis

---

**Desenvolvido por Lucas Silva**  
**Última atualização**: 05/09/2025
