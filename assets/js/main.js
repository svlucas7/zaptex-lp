/* ==================================// === HEADER DINÂMICO === //
(function() {
  const header = document.getElementById('siteHeader');
  const hero = document.querySelector('.hero');
  if (!header || !hero) return;
  
  let lastScroll = 0;
  let ticking = false;
  
  function updateHeader() {
    const scrollY = window.scrollY;
    const heroHeight = hero.getBoundingClientRect().height;
    const scrollProgress = Math.min(scrollY / (heroHeight * 0.6), 1);
    
    // Estados do header baseados no scroll
    const isScrolled = scrollY > 50;
    const isPastHero = scrollY > (heroHeight * 0.55);
    const isScrollingUp = scrollY < lastScroll;
    const isAtTop = scrollY < 10;
    
    // Aplica classes dinâmicas
    header.classList.toggle('nav-solid', isPastHero);
    header.classList.toggle('nav-scrolled', isScrolled && isPastHero);
    
    // Efeito de hide/show no scroll
    if (scrollY > 100) {
      if (isScrollingUp || isAtTop) {
        header.style.transform = 'translateY(0)';
        header.style.opacity = '1';
      } else if (scrollY > lastScroll + 50) {
        header.style.transform = 'translateY(-100%)';
        header.style.opacity = '0.95';
      }
    } else {
      header.style.transform = 'translateY(0)';
      header.style.opacity = '1';
    }
    
    lastScroll = scrollY;
    ticking = false;
  }
  
  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }
  
  updateHeader();
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', updateHeader);
})();apTex Landing Page - JavaScript Principal
   ============================================ */

// === CONFIGURAÇÃO INICIAL === //
document.getElementById('year').textContent = new Date().getFullYear();

// === EFEITO PARALLAX NA HERO (MOUSE) === //
(function() {
  const bg = document.querySelector('.hero-bg-anim');
  if (!bg) return;
  
  let active = false;
  
  function go(e) {
    if (!active) return;
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;
    bg.style.transform = `scale(1.09) translate(${x * -5}px, ${y * -3.5}px)`;
  }
  
  bg.addEventListener('animationend', () => {
    active = true;
  });
  
  window.addEventListener('mousemove', go, { passive: true });
})();

// === FORMULÁRIO DE ORÇAMENTO === //
document.getElementById('orcamentoForm').addEventListener('submit', e => {
  e.preventDefault();
  const st = document.getElementById('formStatus');
  st.textContent = 'Enviado! Retornaremos em breve.';
  setTimeout(() => st.textContent = '', 5000);
  e.target.reset();
});

// === HEADER TRANSPARENTE → SÓLIDO NO SCROLL === //
(function() {
  const header = document.getElementById('siteHeader');
  const hero = document.querySelector('.hero');
  if (!header || !hero) return;
  
  function evaluate() {
    const h = hero.getBoundingClientRect();
    const passed = window.scrollY > (h.height * 0.55);
    header.classList.toggle('nav-solid', passed);
  }
  
  evaluate();
  window.addEventListener('scroll', evaluate, { passive: true });
  window.addEventListener('resize', evaluate);
})();

// === SISTEMA DE MODAL DE PRODUTOS === //
const productImages = {
  uniformes: [
    // Aventais profissionais
    'assets/images/mockups/Mockups/Avental/AVENTAL_PERSONALIZADOS_GRADE 01.jpg',
    'assets/images/mockups/Mockups/Avental/AVENTAL_PERSONALIZADOS_GRADE 05.jpg',
    'assets/images/mockups/Mockups/Avental/AVENTAL_PERSONALIZADOS_GRADE 15.jpg',
    'assets/images/mockups/Mockups/Avental/AVENTAL_PERSONALIZADOS_GRADE 25.jpg'
  ],
  sports: [
    // Camisas esportivas
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Camisas/Simples/CAMISA DRY FIT-MANGA CURTA - MOTO CROSS - GOLA DETALHADA.jpg',
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Camisas/Simples/CAMISA DRY FIT-MANGA CURTA - MOTO CROSS - GOLA EM V.jpg',
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Camisas/Simples/CAMISA DRY FIT-MANGA CURTA - MOTO CROSS - GOLA SIMPLES.jpg',
    // Abadás esportivos
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Abadás/Abada dryfit 1.jpg',
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Abadás/Abada dryfit 2.jpg',
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Abadás/CAMISA DRY FIT -ABADAS-REGATA-MOCKUP-CARNAVAL 01.jpg',
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Abadás/CAMISA DRY FIT -ABADAS-REGATA-MOCKUP-CARNAVAL 02.jpg',
    // Coletes esportivos
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Coletes/COLETE DRYFIT-DUPLA FACE-SEM BOLSO-MOCKUP 01.jpg',
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Coletes/COLETE DRYFIT-DUPLA FACE-SEM BOLSO-MOCKUP 02.jpg',
    'assets/images/mockups/Mockups/Camisas, Abadás, Shorts e Coletes/Coletes/COLETE DRYFIT-DUPLA FACE-SEM BOLSO-PESCARIA-MOCKUP 01.jpg',
    // Croppeds esportivos
    'assets/images/mockups/Mockups/Croppeds (Arthur)/CROPPED G.jpg',
    'assets/images/mockups/Mockups/Croppeds (Arthur)/CROPPED GG.jpg',
    'assets/images/mockups/Mockups/Croppeds (Arthur)/CROPPED M.jpg',
    'assets/images/mockups/Mockups/Croppeds (Arthur)/CROPPED P.jpg',
    'assets/images/mockups/Mockups/Croppeds (Arthur)/CROPPED EXG1.jpg',
    // Regatas com capuz  
    'assets/images/mockups/Mockups/Regata com Capuz (Arthur)/REGATA COM CAPUZ - G.jpg',
    'assets/images/mockups/Mockups/Regata com Capuz (Arthur)/REGATA COM CAPUZ - GG.jpg',
    'assets/images/mockups/Mockups/Regata com Capuz (Arthur)/REGATA COM CAPUZ - m.jpg',
    'assets/images/mockups/Mockups/Regata com Capuz (Arthur)/REGATA COM CAPUZ - P.jpg'
  ],
  eventos: [
    // Wind Banners
    'assets/images/mockups/Mockups/Wind Banner (Arthur)/Kit Completo/FACA/WINDBANNER FACA GG_KIT COMPLETO_FRENTE E VERSO.jpg',
    'assets/images/mockups/Mockups/Wind Banner (Arthur)/Kit Completo/FACA/WINDBANNER FACA G_KIT COMPLETO_FRENTE E VERSO.jpg',
    'assets/images/mockups/Mockups/Wind Banner (Arthur)/Kit Completo/FACA/WINDBANNER FACA M_KIT COMPLETO_FRENTE E VERSO.jpg',
    'assets/images/mockups/Mockups/Wind Banner (Arthur)/Kit Completo/FACA/WINDBANNER FACA P_KIT COMPLETO_FRENTE E VERSO.jpg',
    'assets/images/mockups/Mockups/Wind Banner (Arthur)/Kit Completo/FACA/FACA_APRESENTAÇÃO-12.jpg',
    'assets/images/mockups/Mockups/Wind Banner (Arthur)/Kit Completo/FACA/FACA_APRESENTAÇÃO-3.jpg',
    // Bandeiras
    'assets/images/mockups/Mockups/Bandeiras (Arthur)/1 - BANDEIRAS - CACHARREL - COSTURA LINHA BRANCA OVERLOCK/1000x500/BANDEIRAS-CACHARREL-COSTURA LINHA BRANCA OVERLOCK -1000X500MM-4x0-G1.jpg',
    'assets/images/mockups/Mockups/Bandeiras (Arthur)/1 - BANDEIRAS - CACHARREL - COSTURA LINHA BRANCA OVERLOCK/1000x500/BANDEIRAS-CACHARREL-COSTURA LINHA BRANCA OVERLOCK -1000X500MM-4x0-G10.jpg',
    'assets/images/mockups/Mockups/Bandeiras (Arthur)/1 - BANDEIRAS - CACHARREL - COSTURA LINHA BRANCA OVERLOCK/1000x500/BANDEIRAS-CACHARREL-COSTURA LINHA BRANCA OVERLOCK -1000X500MM-4x0-G25.jpg',
    // Almofadas personalizadas
    'assets/images/mockups/Mockups/Almofadas/Almofada 01.jpg',
    'assets/images/mockups/Mockups/Almofadas/Almofada 02.jpg',
    'assets/images/mockups/Mockups/Almofadas/Almofada 03.jpg',
    // Capas
    'assets/images/mockups/Mockups/Almofadas/Capa 01.jpg',
    'assets/images/mockups/Mockups/Almofadas/Capa 02.jpg',
    'assets/images/mockups/Mockups/Almofadas/Capa 03.jpg',
    // X Banner
    'assets/images/mockups/Mockups/X Banner/X BANNER OU INDOORKIT COMPLETO BANDEIRA E SUPORTE XTECIDO OXFORD-1850X800-4X0-G1.jpg',
    'assets/images/mockups/Mockups/X Banner/X BANNER OU INDOORKIT COMPLETO BANDEIRA E SUPORTE XTECIDO OXFORD-1850X800-4X0-G3.jpg',
    'assets/images/mockups/Mockups/X Banner/X BANNER OU INDOORBANDEIRA AVULSATECIDO OXFORD.jpg'
  ],
  igreja: [
    // Desbravadores e ações missionárias
    'assets/images/mockups/Mockups/Desbravadores.png',
    'assets/images/mockups/Mockups/ações missionárias.png'
  ]
};

// Mapeamento de nomes personalizados para produtos
const productNames = {
  // Uniformes Profissionais
  'CAMISA DRY FIT-MANGA CURTA - MENINA - GOLA DETALHADA.jpg': 'Camisa Dry Fit Feminina Premium',
  'CAMISA DRY FIT-MANGA CURTA - MENINO - GOLA DETALHADA.jpg': 'Camisa Dry Fit Masculina Premium',
  'CAMISA DRY FIT-MANGA CURTA - MENINA - GOLA EM V.jpg': 'Camisa Dry Fit Feminina Gola V',
  'CAMISA DRY FIT-MANGA CURTA - MENINO - GOLA EM V.jpg': 'Camisa Dry Fit Masculina Gola V',
  'CAMISA DRY FIT-MANGA CURTA - MENINA - GOLA SIMPLES.jpg': 'Camisa Dry Fit Feminina Clássica',
  'CAMISA DRY FIT-MANGA CURTA - MENINO - GOLA SIMPLES.jpg': 'Camisa Dry Fit Masculina Clássica',
  'AVENTAL_PERSONALIZADOS_GRADE 01.jpg': 'Avental Profissional Personalizado',
  'AVENTAL_PERSONALIZADOS_GRADE 05.jpg': 'Avental Chef Personalizado',
  'AVENTAL_PERSONALIZADOS_GRADE 15.jpg': 'Avental Industrial Personalizado',
  'AVENTAL_PERSONALIZADOS_GRADE 25.jpg': 'Avental Premium Personalizado',
  
  // Sports & Atléticas
  'CAMISA DRY FIT-MANGA CURTA - MOTO CROSS - GOLA DETALHADA.jpg': 'Camisa Esportiva Moto Cross Pro',
  'CAMISA DRY FIT-MANGA CURTA - MOTO CROSS - GOLA EM V.jpg': 'Camisa Esportiva Moto Cross V',
  'CAMISA DRY FIT-MANGA CURTA - MOTO CROSS - GOLA SIMPLES.jpg': 'Camisa Esportiva Moto Cross',
  'Abada dryfit 1.jpg': 'Abadá Dry Fit Performance',
  'Abada dryfit 2.jpg': 'Abadá Dry Fit Comfort',
  'CAMISA DRY FIT -ABADAS-REGATA-MOCKUP-CARNAVAL 01.jpg': 'Regata Carnaval Personalizada',
  'CAMISA DRY FIT -ABADAS-REGATA-MOCKUP-CARNAVAL 02.jpg': 'Regata Festa Personalizada',
  'COLETE DRYFIT-DUPLA FACE-SEM BOLSO-MOCKUP 01.jpg': 'Colete Esportivo Dupla Face',
  'COLETE DRYFIT-DUPLA FACE-SEM BOLSO-MOCKUP 02.jpg': 'Colete Atlético Premium',
  'COLETE DRYFIT-DUPLA FACE-SEM BOLSO-PESCARIA-MOCKUP 01.jpg': 'Colete Pesca Personalizado',
  'CROPPED G.jpg': 'Cropped Esportivo Tamanho G',
  'CROPPED GG.jpg': 'Cropped Esportivo Tamanho GG',
  'CROPPED M.jpg': 'Cropped Esportivo Tamanho M',
  'CROPPED P.jpg': 'Cropped Esportivo Tamanho P',
  'CROPPED EXG1.jpg': 'Cropped Esportivo Extra Grande',
  'REGATA COM CAPUZ - G.jpg': 'Regata com Capuz Tamanho G',
  'REGATA COM CAPUZ - GG.jpg': 'Regata com Capuz Tamanho GG',
  'REGATA COM CAPUZ - m.jpg': 'Regata com Capuz Tamanho M',
  'REGATA COM CAPUZ - P.jpg': 'Regata com Capuz Tamanho P',
  
  // Eventos & Brindes
  'WINDBANNER FACA GG_KIT COMPLETO_FRENTE E VERSO.jpg': 'Wind Banner Faca GG - Kit Completo',
  'WINDBANNER FACA G_KIT COMPLETO_FRENTE E VERSO.jpg': 'Wind Banner Faca G - Kit Completo',
  'WINDBANNER FACA M_KIT COMPLETO_FRENTE E VERSO.jpg': 'Wind Banner Faca M - Kit Completo',
  'WINDBANNER FACA P_KIT COMPLETO_FRENTE E VERSO.jpg': 'Wind Banner Faca P - Kit Completo',
  'FACA_APRESENTAÇÃO-12.jpg': 'Wind Banner Faca - Apresentação Premium',
  'FACA_APRESENTAÇÃO-3.jpg': 'Wind Banner Faca - Apresentação Clássica',
  'BANDEIRAS-CACHARREL-COSTURA LINHA BRANCA OVERLOCK -1000X500MM-4x0-G1.jpg': 'Bandeira Cacharrel 100x50cm',
  'BANDEIRAS-CACHARREL-COSTURA LINHA BRANCA OVERLOCK -1000X500MM-4x0-G10.jpg': 'Bandeira Cacharrel Premium 100x50cm',
  'BANDEIRAS-CACHARREL-COSTURA LINHA BRANCA OVERLOCK -1000X500MM-4x0-G25.jpg': 'Bandeira Cacharrel Deluxe 100x50cm',
  'Almofada 01.jpg': 'Almofada Personalizada Clássica',
  'Almofada 02.jpg': 'Almofada Personalizada Premium',
  'Almofada 03.jpg': 'Almofada Personalizada Deluxe',
  'Capa 01.jpg': 'Capa Personalizada Elegante',
  'Capa 02.jpg': 'Capa Personalizada Moderna',
  'Capa 03.jpg': 'Capa Personalizada Exclusiva',
  'X BANNER OU INDOORKIT COMPLETO BANDEIRA E SUPORTE XTECIDO OXFORD-1850X800-4X0-G1.jpg': 'X-Banner Kit Completo 185x80cm',
  'X BANNER OU INDOORKIT COMPLETO BANDEIRA E SUPORTE XTECIDO OXFORD-1850X800-4X0-G3.jpg': 'X-Banner Premium Kit Completo',
  'X BANNER OU INDOORBANDEIRA AVULSATECIDO OXFORD.jpg': 'X-Banner Tecido Oxford',
  
  // Igreja / Desbravadores
  'Desbravadores.png': 'Uniformes Desbravadores Personalizados',
  'ações missionárias.png': 'Camisas Ações Missionárias'
};

function openProductModal(category) {
  const modal = document.getElementById('productModal');
  const title = document.getElementById('modalTitle');
  const grid = document.getElementById('productGrid');
  
  const titles = {
    uniformes: 'Linha Uniformes Profissionais',
    sports: 'Linha Sports & Atléticas', 
    eventos: 'Linha Eventos & Brindes',
    igreja: 'Linha Igreja / Desbravadores'
  };
  
  title.textContent = titles[category] || 'Produtos';
  grid.innerHTML = '<p style="text-align:center;padding:2rem;color:#6b7280;">Carregando produtos...</p>';
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  
  // Simular carregamento de imagens
  setTimeout(() => {
    loadCategoryImages(category, grid);
  }, 500);
}

function loadCategoryImages(category, container) {
  const images = productImages[category] || [];
  
  if (images.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:2rem;color:#6b7280;">Nenhum produto encontrado para esta categoria.</p>';
    return;
  }
  
  let html = '';
  images.forEach((imgPath, index) => {
    // Extrair nome do arquivo
    const fileName = imgPath.split('/').pop();
    
    // Usar nome personalizado se disponível, senão usar nome padrão melhorado
    let productName = productNames[fileName];
    
    if (!productName) {
      productName = fileName.replace(/\.(jpg|jpeg|png|webp)$/i, '')
        .replace(/_/g, ' ')
        .replace(/-/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
      
      // Adicionar "Personalizado" no final se não tiver
      if (!productName.toLowerCase().includes('personalizado')) {
        productName += ' Personalizado';
      }
    }
    
    html += `
      <div class="product-item">
        <img src="${imgPath}" alt="${productName}" loading="lazy" 
             onerror="this.src='assets/images/mockups/placeholder.jpg'; this.onerror=null;"
             onload="this.style.opacity='1';" style="opacity:0;transition:opacity 0.3s;">
        <div class="product-name">${productName}</div>
      </div>
    `;
  });
  
  container.innerHTML = html;
  
  // Log para debug
  console.log(`Carregando ${images.length} imagens para categoria: ${category}`);
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// === INICIALIZAÇÃO DO DOM === //
document.addEventListener('DOMContentLoaded', () => {
  // Adicionar eventos de clique aos cards
  document.querySelectorAll('.line-card').forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      if (category) {
        openProductModal(category);
      }
    });
  });
  
  // Fechar modal clicando fora
  document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target.id === 'productModal') {
      closeProductModal();
    }
  });
  
  // === FUNCIONALIDADE DO ACORDEÃO === //
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const accordionItem = header.parentElement;
      const isActive = accordionItem.classList.contains('active');
      
      // Fechar todos os outros acordeões
      document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== accordionItem) {
          item.classList.remove('active');
        }
      });
      
      // Toggle do acordeão atual
      if (isActive) {
        accordionItem.classList.remove('active');
      } else {
        accordionItem.classList.add('active');
      }
    });
  });
  
  // === EFEITO PARALLAX NA HERO (DESABILITADO) === //
  function initParallax() {
    const heroBackground = document.querySelector('.hero__bg');
    const heroContent = document.querySelector('.hero__content');
    
    if (!heroBackground) return;
    
    // Remover qualquer transform que possa estar afetando a posição
    heroBackground.style.transform = 'scale(1.05)';
    if (heroContent) {
      heroContent.style.transform = 'none';
    }
    
    // Parallax desabilitado para evitar movimento indesejado
    // Código comentado para manter referência
  }
  
  // Inicializar parallax
  initParallax();
  
  // === OTIMIZAÇÃO DE CARREGAMENTO DA IMAGEM DA HERO === //
  function optimizeHeroImageLoad() {
    const heroBackground = document.querySelector('.hero__bg');
    if (!heroBackground) return;
    
    // Criar uma nova imagem para precarregar
    const heroImage = new Image();
    
    // Timeout para fallback caso a imagem demore muito
    const loadTimeout = setTimeout(() => {
      heroBackground.classList.add('loaded');
    }, 3000); // 3 segundos timeout
    
    heroImage.onload = function() {
      clearTimeout(loadTimeout);
      // Quando a imagem carregar, parar a animação de skeleton
      heroBackground.classList.add('loaded');
    };
    
    heroImage.onerror = function() {
      clearTimeout(loadTimeout);
      // Em caso de erro, ainda mostrar o background e parar animação
      heroBackground.classList.add('loaded');
    };
    
    // Definir a src para começar o carregamento
    heroImage.src = './assets/images/hero-section-banner10.webp';
    
    // Se a imagem já estiver carregada (cache), aplicar imediatamente
    if (heroImage.complete) {
      clearTimeout(loadTimeout);
      heroBackground.classList.add('loaded');
    }
  }
  
  // Inicializar carregamento otimizado da hero no DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', optimizeHeroImageLoad);
  } else {
    optimizeHeroImageLoad();
  }
  
  // === EFEITO DE REVEAL NAS SEÇÕES === //
  function initScrollReveal() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px', // Reduzido para detectar mais cedo
      threshold: 0.2 // Aumentado para melhor detecção
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, observerOptions);
    
    // Observar elementos de todas as seções
    const revealSelectors = [
      '.sobre-intro', '.sobre-gallery', '.sobre-badge', '.sobre-heading', '.sobre-bullets li',
      '.produtos-badge', '.produtos-title', '.produtos-subtitle', '.line-card',
      '.diff-card-premium', '.accordion-item',
      '#orcamento .container-max > div'
    ];
    
    revealSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(el => {
        el.classList.add('reveal-element');
        observer.observe(el);
      });
    });
    
    // Observador especial para cards de produto com delay escalonado
    const productCards = document.querySelectorAll('.line-card');
    productCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.08}s`; // Reduzido de 0.1s para 0.08s
    });
    
    // Observador especial para cards de diferenciais
    const diffCards = document.querySelectorAll('.diff-card-premium');
    diffCards.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
    });
    
    // Observador especial para items do acordeão
    const accordionItems = document.querySelectorAll('.accordion-item');
    accordionItems.forEach((item, index) => {
      item.style.transitionDelay = `${index * 0.12}s`;
    });
  }
  
  initScrollReveal();
  
  // === EFEITO DE CURSOR DINÂMICO (COMENTADO) === //
  // function initDynamicCursor() {
  //   const cursor = document.createElement('div');
  //   cursor.className = 'dynamic-cursor';
  //   cursor.innerHTML = '<div class="cursor-dot"></div><div class="cursor-outline"></div>';
  //   document.body.appendChild(cursor);
  //   
  //   let mouseX = 0, mouseY = 0;
  //   let cursorX = 0, cursorY = 0;
  //   
  //   document.addEventListener('mousemove', (e) => {
  //     mouseX = e.clientX;
  //     mouseY = e.clientY;
  //   });
  //   
  //   function animateCursor() {
  //     cursorX += (mouseX - cursorX) * 0.1;
  //     cursorY += (mouseY - cursorY) * 0.1;
  //     cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
  //     requestAnimationFrame(animateCursor);
  //   }
  //   
  //   animateCursor();
  //   
  //   // Efeitos especiais em elementos interativos
  //   const interactiveElements = document.querySelectorAll('button, .line-card, .accordion-header, .diff-card-premium');
  //   interactiveElements.forEach(el => {
  //     el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
  //     el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
  //   });
  // }
  
  // initDynamicCursor(); // Comentado para não interferir em dispositivos touch
  
  // === EFEITO TILT NOS CARDS === //
  function initTiltEffect() {
    const cards = document.querySelectorAll('.line-card-premium');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        
        const rotateX = (mouseY / rect.height) * -10; // Máximo 10 graus
        const rotateY = (mouseX / rect.width) * 10;   // Máximo 10 graus
        
        card.style.transform = `translateY(-8px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
      });
      
      card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.1s ease-out';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transition = 'all 0.3s ease';
      });
    });
  }
  
  initTiltEffect();
});

// === FUNÇÕES GLOBAIS === //
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
