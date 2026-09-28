const fs = require('fs');

let lines = fs.readFileSync('src/pages/index.astro', 'utf8').split('\n');

// Encontrar HTML do Hero
const htmlStartIndex = lines.findIndex(l => l.includes('<!-- ═══════════════ HERO ═══════════════ -->'));
const htmlEndIndex = lines.findIndex(l => l.includes('<!-- ═══════════════ DIFERENCIAIS ═══════════════ -->'));

const newHeroHtml = `      <!-- ═══════════════ HERO MODERN ═══════════════ -->
      <section class="modern-hero" id="hero">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="hero-badge">⭐ Referência em São Paulo</div>
            <h1>Forro de Isopor <span>Instalado e Garantido</span></h1>
            <p class="hero-subtitle">Esqueça o calor excessivo e o barulho. Tenha o melhor custo-benefício para sua obra com material de alta densidade e mão de obra especializada. <strong>A partir de R$ 49/m²</strong>.</p>
            
            <div class="hero-actions">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener" class="btn btn-whatsapp hero-btn">
                <i class="fab fa-whatsapp"></i> Fazer Orçamento Agora
              </a>
              <div class="hero-trust-badges">
                <span><i class="fas fa-check-circle"></i> Visita Grátis</span>
                <span><i class="fas fa-check-circle"></i> Laudo e ART</span>
              </div>
            </div>
          </div>
          
          <div class="hero-image-wrapper">
            <img src="/hero-forro-isopor.webp" alt="Instalação de Forro de Isopor" class="hero-modern-img" />
            <div class="hero-price-tag">
              <span>Instalação Completa</span>
              <strong>R$ 49/m²</strong>
            </div>
          </div>
        </div>
      </section>

`;

if (htmlStartIndex !== -1 && htmlEndIndex !== -1) {
  lines.splice(htmlStartIndex, htmlEndIndex - htmlStartIndex, newHeroHtml);
}

// Encontrar CSS do Hero
const cssStartIndex = lines.findIndex(l => l.includes('/* ═══ HERO ═══ */'));
const cssEndIndex = lines.findIndex(l => l.includes('/* ═══ DIFERENCIAIS BAR ═══ */'));

const newHeroCss = `  /* ═══ HERO MODERN ═══ */
  .modern-hero {
    padding: 6rem 0 4rem;
    background: linear-gradient(135deg, var(--bg-light) 0%, #ffffff 100%);
    position: relative;
    overflow: hidden;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 4rem;
    align-items: center;
  }

  .hero-badge {
    display: inline-block;
    background: rgba(22, 83, 173, 0.1);
    color: var(--primary);
    padding: 0.5rem 1.25rem;
    border-radius: 50px;
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  .hero-content h1 {
    font-size: clamp(2.5rem, 4vw, 4rem);
    line-height: 1.1;
    color: var(--dark);
    margin-bottom: 1.25rem;
    letter-spacing: -1px;
  }

  .hero-content h1 span {
    display: block;
    color: var(--primary);
  }

  .hero-subtitle {
    font-size: 1.15rem;
    color: var(--text-muted);
    line-height: 1.6;
    margin-bottom: 2.5rem;
    max-width: 90%;
  }

  .hero-actions {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .hero-btn {
    padding: 1.25rem 2rem;
    font-size: 1.15rem;
    border-radius: var(--radius-lg);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
    width: fit-content;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .hero-trust-badges {
    display: flex;
    gap: 1.5rem;
    color: var(--text-muted);
    font-size: 0.95rem;
    font-weight: 600;
  }

  .hero-trust-badges i {
    color: var(--success);
  }

  .hero-image-wrapper {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
  }

  .hero-modern-img {
    width: 100%;
    height: auto;
    display: block;
    aspect-ratio: 4/3;
    object-fit: cover;
  }

  .hero-price-tag {
    position: absolute;
    bottom: 0;
    left: 0;
    background: var(--dark);
    color: white;
    padding: 1.25rem 2rem;
    border-radius: 0 24px 0 0;
    display: flex;
    flex-direction: column;
  }

  .hero-price-tag span {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: rgba(255,255,255,0.7);
  }

  .hero-price-tag strong {
    font-size: 2rem;
    line-height: 1;
    color: var(--secondary);
  }

  @media (max-width: 1024px) {
    .hero-grid {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
    .modern-hero {
      padding: 4rem 0 2rem;
    }
    .hero-subtitle {
      max-width: 100%;
    }
  }

  @media (max-width: 768px) {
    .modern-hero {
      padding: 3rem 0;
      text-align: center;
    }
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .hero-content h1 {
      font-size: 2.3rem;
    }
    .hero-subtitle {
      text-align: center;
    }
    .hero-btn {
      width: 100%;
    }
    .hero-trust-badges {
      justify-content: center;
      flex-wrap: wrap;
    }
    .hero-price-tag {
      padding: 1rem 1.5rem;
    }
    .hero-price-tag strong {
      font-size: 1.5rem;
    }
  }
`;

if (cssStartIndex !== -1 && cssEndIndex !== -1) {
  lines.splice(cssStartIndex, cssEndIndex - cssStartIndex, newHeroCss);
}

fs.writeFileSync('src/pages/index.astro', lines.join('\n'));
console.log('Hero modernizado com ARRAY SPLICE (COM CENTRALIZACAO NO MOBILE)!');
