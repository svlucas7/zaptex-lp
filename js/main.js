// Menu mobile toggle
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!open));
    mobileMenu.classList.toggle('hidden');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

// Hero background rotator (simple fade via opacity)
const heroSlidesRoot = document.getElementById('heroSlides');
if (heroSlidesRoot) {
  const slideData = [
    { title: 'ZapTex - Soluções Têxteis Personalizadas', image: 'assets/images/hero-section-banner.jpg' }
  ];
  heroSlidesRoot.className = 'absolute inset-0';
  slideData.forEach((s,i) => {
    const div = document.createElement('div');
    div.className = 'absolute inset-0 origin-center transition-opacity duration-[1600ms] ease-out opacity-0';
    div.style.backgroundImage = `url(${s.image})`;
    div.style.backgroundSize = 'cover';
    div.style.backgroundPosition = 'center';
    div.style.backgroundRepeat = 'no-repeat';
    div.setAttribute('data-title', s.title);
    heroSlidesRoot.appendChild(div);
  });
  const slides = [...heroSlidesRoot.children];
  let idx = 0; let timer;
  function show(i){ slides.forEach((el,j)=> el.style.opacity = j===i? '0.4':'0'); }
  function start(){ show(0); } 
  start();
}

// Dynamic year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Form submit mock
const form = document.getElementById('orcamentoForm');
const formStatus = document.getElementById('formStatus');
if (form) {
  // Adicionar validação de telefone brasileiro
  const telefoneInput = document.getElementById('telefone');
  if (telefoneInput) {
    telefoneInput.addEventListener('input', function(e) {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length <= 11) {
        if (value.length <= 2) {
          value = value.replace(/(\d{0,2})/, '($1');
        } else if (value.length <= 7) {
          value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else {
          value = value.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
        }
      }
      e.target.value = value;
    });
  }

  // Adicionar validação e feedback visual
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (this.value.trim() === '') {
        this.style.borderColor = '#ef4444';
        this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
      } else {
        this.style.borderColor = '#22c55e';
        this.style.boxShadow = '0 0 0 3px rgba(34, 197, 94, 0.1)';
      }
    });

    input.addEventListener('focus', function() {
      this.style.borderColor = '#1b26c4';
      this.style.boxShadow = '0 0 0 3px rgba(27, 38, 196, 0.1)';
    });
  });

  form.addEventListener('submit', async e => {
    e.preventDefault();
    
    // Validação adicional
    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const briefing = document.getElementById('briefing').value.trim();
    
    if (!nome || !telefone || !email || !briefing) {
      if (formStatus) {
        formStatus.innerHTML = '<span style="color:#ef4444;">⚠️ Por favor, preencha todos os campos obrigatórios.</span>';
      }
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      if (formStatus) {
        formStatus.innerHTML = '<span style="color:#ef4444;">⚠️ Por favor, insira um e-mail válido.</span>';
      }
      return;
    }

    // Feedback de envio
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span style="font-size:1.1rem;">⏳</span> Enviando...';
    
    if (formStatus) {
      formStatus.innerHTML = '<span style="color:#1b26c4;">📤 Enviando orçamento...</span>';
    }

    const data = new FormData(form);
    
    // Simular envio (substituir por integração real)
    await new Promise(r => setTimeout(r, 2000));
    
    console.log('Dados do orçamento:', Object.fromEntries(data.entries()));
    
    // Feedback de sucesso
    if (formStatus) {
      formStatus.innerHTML = `
        <div style="color:#22c55e;text-align:center;padding:1rem;background:#f0fdf4;border-radius:.5rem;border:1px solid #bbf7d0;">
          <strong>✅ Orçamento enviado com sucesso!</strong><br>
          <span style="font-size:.85rem;">Nossa equipe entrará em contato em até 24h.</span>
        </div>
      `;
    }
    
    // Resetar formulário após 3 segundos
    setTimeout(() => {
      form.reset();
      inputs.forEach(input => {
        input.style.borderColor = '#c9d2db';
        input.style.boxShadow = 'none';
      });
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalText;
      if (formStatus) formStatus.innerHTML = '';
    }, 4000);
  });
}
