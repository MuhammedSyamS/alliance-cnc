/* ==========================================================================
   ALLIANCE ARCHITECTURAL CNC & INTERIORS - INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------------------------------
     1. Mobile Navigation Menu Toggle
     ------------------------------------------------------------------------ */
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '80px';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
        navMenu.style.padding = '1.5rem';
        navMenu.style.borderBottom = '1px solid var(--border-muted)';
      }
    });
  }

  /* ------------------------------------------------------------------------
     2. Material Swatch Explorer Data & Logic
     ------------------------------------------------------------------------ */
  const materialData = {
    mdf: {
      title: 'HDHMR / High-Density MDF (8mm – 30mm)',
      desc: 'High-density moisture-resistant wood composite. Ideal for painted interior partition screens, 3D parametric wave walls, mandir backdrops, and furniture doors.',
      lead: 'Standard Turnaround: 24 – 48 Hours'
    },
    wpc: {
      title: 'Waterproof WPC Board (8mm – 25mm)',
      desc: 'Wood Polymer Composite 100% waterproof and termite-proof. Perfect for bathroom screens, semi-outdoor balustrades, and high-humidity interior zones.',
      lead: 'Standard Turnaround: 24 – 48 Hours'
    },
    acp: {
      title: 'Exterior ACP Aluminum Sheet (3mm – 4mm PVDF)',
      desc: 'Aluminum Composite Panel with weather-resistant PVDF coating. Designed for exterior building facades, modern architectural cladding, and outdoor sunshades.',
      lead: 'Standard Turnaround: 3 – 4 Working Days'
    },
    acrylic: {
      title: 'Cast Acrylic Sheets (3mm – 20mm Clear/Colored)',
      desc: 'High-gloss optical acrylic suitable for backlit LED jali partitions, modern retail signage, boutique ceiling drops, and illuminated art walls.',
      lead: 'Standard Turnaround: 24 – 48 Hours'
    },
    metal: {
      title: 'Brass & Stainless Steel Sheet (1.5mm – 6mm Metal Cut)',
      desc: 'Ultra-luxurious solid brass and SS 304 laser cutting. Provides a high-end metallic finish for luxury hotel lobbies, high-end villa screens, and hardware accents.',
      lead: 'Standard Turnaround: 3 – 5 Working Days'
    }
  };

  const matTags = document.querySelectorAll('#material-tags .mat-tag');
  const matTitle = document.getElementById('mat-title');
  const matDesc = document.getElementById('mat-desc');
  const matBadge = document.getElementById('mat-badge');

  matTags.forEach(tag => {
    tag.addEventListener('click', () => {
      matTags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      const key = tag.getAttribute('data-mat');
      if (materialData[key]) {
        matTitle.textContent = materialData[key].title;
        matDesc.textContent = materialData[key].desc;
        matBadge.textContent = materialData[key].lead;
      }
    });
  });

  /* ------------------------------------------------------------------------
     3. Interactive Jali Pattern Visualizer & Cost Estimator
     ------------------------------------------------------------------------ */
  const patternButtons = document.querySelectorAll('#pattern-options .pattern-btn');
  const selectMaterial = document.getElementById('est-material');
  const inputWidth = document.getElementById('input-width');
  const inputHeight = document.getElementById('input-height');
  const valWidth = document.getElementById('val-width');
  const valHeight = document.getElementById('val-height');
  const estSqft = document.getElementById('est-sqft');
  const estTotalCost = document.getElementById('est-total-cost');
  const jaliCanvas = document.getElementById('jali-canvas');

  let currentPattern = 'islamic';

  // SVG Pattern definitions
  const svgPatterns = {
    islamic: `
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pat-islamic" width="25" height="25" patternUnits="userSpaceOnUse">
            <path d="M12.5 0 L25 12.5 L12.5 25 L0 12.5 Z" fill="none" stroke="#E50914" stroke-width="1.5"/>
            <circle cx="12.5" cy="12.5" r="4" fill="none" stroke="#F4F4F5" stroke-width="1"/>
            <path d="M0 0 L25 25 M25 0 L0 25" stroke="#333333" stroke-width="0.75"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#pat-islamic)" />
      </svg>
    `,
    parametric: `
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pat-parametric" width="20" height="100" patternUnits="userSpaceOnUse">
            <path d="M0 10 Q 10 30 20 10 T 20 50 T 20 90" fill="none" stroke="#E50914" stroke-width="2"/>
            <path d="M0 30 Q 10 50 20 30 T 20 70 T 20 110" fill="none" stroke="#F4F4F5" stroke-width="1.2"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#pat-parametric)" />
      </svg>
    `,
    floral: `
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pat-floral" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="15" cy="15" r="10" fill="none" stroke="#E50914" stroke-width="1.5"/>
            <path d="M15 0 C20 10 20 20 15 30 C10 20 10 10 15 0 Z" fill="none" stroke="#F4F4F5" stroke-width="1"/>
            <path d="M0 15 C10 20 20 20 30 15 C20 10 10 10 0 15 Z" fill="none" stroke="#F4F4F5" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#pat-floral)" />
      </svg>
    `,
    grid: `
      <svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="pat-grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="2" y="2" width="16" height="16" fill="none" stroke="#E50914" stroke-width="1.5" rx="3"/>
            <line x1="10" y1="0" x2="10" y2="20" stroke="#F4F4F5" stroke-width="1"/>
            <line x1="0" y1="10" x2="20" y2="10" stroke="#F4F4F5" stroke-width="1"/>
          </pattern>
        </defs>
        <rect width="100" height="100" fill="url(#pat-grid)" />
      </svg>
    `
  };

  const materialRates = {
    'mdf-12': 12,
    'mdf-18': 16,
    'wpc-18': 22,
    'acp-3': 26,
    'acrylic-10': 34,
    'brass-3': 65
  };

  function updateEstimator() {
    const w = parseFloat(inputWidth.value);
    const h = parseFloat(inputHeight.value);
    valWidth.textContent = `${w.toFixed(1)} ft`;
    valHeight.textContent = `${h.toFixed(1)} ft`;

    const sqft = w * h;
    estSqft.textContent = `${sqft.toFixed(1)} Sq. Ft.`;

    const matKey = selectMaterial.value;
    const rate = materialRates[matKey] || 16;
    const total = Math.round(sqft * rate);

    estTotalCost.textContent = `$${total.toLocaleString()}`;

    // Render pattern SVG
    if (svgPatterns[currentPattern]) {
      jaliCanvas.innerHTML = svgPatterns[currentPattern];
    }
  }

  patternButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      patternButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentPattern = btn.getAttribute('data-pattern');
      updateEstimator();
    });
  });

  inputWidth.addEventListener('input', updateEstimator);
  inputHeight.addEventListener('input', updateEstimator);
  selectMaterial.addEventListener('change', updateEstimator);

  // Initial render call
  updateEstimator();

  // Button to transfer configuration to quote form
  const btnTransferQuote = document.getElementById('btn-transfer-quote');
  if (btnTransferQuote) {
    btnTransferQuote.addEventListener('click', () => {
      const quoteSection = document.getElementById('quote');
      const selectService = document.getElementById('quote-service');
      const inputDimensions = document.getElementById('quote-dimensions');
      const textareaDesc = document.getElementById('quote-description');

      if (selectService) selectService.value = 'Custom CNC Cutting Only';
      if (inputDimensions) inputDimensions.value = `${inputWidth.value}ft W x ${inputHeight.value}ft H (${estSqft.textContent})`;
      
      const selectedMatText = selectMaterial.options[selectMaterial.selectedIndex].text;
      if (textareaDesc) {
        textareaDesc.value = `Custom Jali Pattern: ${currentPattern.toUpperCase()}\nMaterial: ${selectedMatText}\nEstimated Quote: ${estTotalCost.textContent}`;
      }

      quoteSection.scrollIntoView({ behavior: 'smooth' });
    });
  }

  /* ------------------------------------------------------------------------
     4. Portfolio Filter Tabs Logic
     ------------------------------------------------------------------------ */
  const filterTabs = document.querySelectorAll('#portfolio-filters .filter-tab');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        const categories = item.getAttribute('data-category').split(' ');
        if (filterValue === 'all' || categories.includes(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  /* ------------------------------------------------------------------------
     5. Portfolio Lightbox Modal
     ------------------------------------------------------------------------ */
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxClose = document.getElementById('lightbox-close');

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const title = item.querySelector('.portfolio-title');
      const meta = item.querySelector('.portfolio-meta');

      if (img && title && lightboxModal) {
        lightboxImg.src = img.src;
        lightboxTitle.textContent = title.textContent;
        lightboxDesc.textContent = meta ? meta.textContent : '';
        lightboxModal.classList.add('active');
      }
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
  }

  /* ------------------------------------------------------------------------
     6. Service Details Modal Data & Handling
     ------------------------------------------------------------------------ */
  const serviceModalData = {
    residential: {
      title: 'Residential Interior Design & Fabrication',
      desc: 'Complete turnkey interior solutions for luxury villas, apartments, and modern homes. Alliance in-house factory cuts custom wall backdrops, modular kitchens, wardrobes, and living room media units.',
      specs: [
        '3D Concept Rendering & CAD Floor Planning',
        'Custom Parametric Headboard & Accent Wall CNC Milling',
        'Modular Kitchen Cabinetry with Soft-Close Hardware',
        'Custom Ceiling Drops and Lighting Slots'
      ]
    },
    commercial: {
      title: 'Commercial & Retail Shop Fit-outs',
      desc: 'High-impact retail shopfronts, luxury brand boutiques, and corporate office interiors designed to maximize customer footfall and brand identity.',
      specs: [
        'Parametric Louvered CNC Wooden Ceiling Ribs',
        'Custom Cash Counter Fronts with Brass / Acrylic Inlays',
        'High-Traffic Commercial Grade Polyurethane Coatings',
        '24-Hour Rapid Night-Time Installation Support'
      ]
    },
    jali: {
      title: 'Custom CNC Jali Screens & 3D Relief Panels',
      desc: 'Architectural partition screens, temple mandir backdrops, and relief wall panels milled on industrial multi-axis routers.',
      specs: [
        'Over 500+ Vector Pattern Libraries (Islamic, Parametric, Floral, Geometrical)',
        'Thickness options from 6mm up to 50mm Solid Stock',
        'Seamless Interlocking Finger-Joints for Large Wall Spans',
        'Factory PU Spray Polish / Metallic Powder Coating'
      ]
    },
    facade: {
      title: 'Architectural Exterior Facades & Ceilings',
      desc: 'Weather-proof exterior ACP perforated building envelopes, sunshades, and backlit ceiling panels engineered to withstand harsh wind loads.',
      specs: [
        'PVDF Coated Exterior Grade ACP / Aluminum Sheets',
        'Laser-Guided Cut Perforations for Thermal & Light Control',
        'Custom Structural Aluminum Sub-framing',
        'Integrated Crimson & RGB LED Light Tracking Channels'
      ]
    }
  };

  const serviceModal = document.getElementById('service-modal');
  const modalServiceTitle = document.getElementById('modal-service-title');
  const modalServiceDesc = document.getElementById('modal-service-desc');
  const modalServiceList = document.getElementById('modal-service-list');
  const serviceModalClose = document.getElementById('service-modal-close');

  document.querySelectorAll('.open-service-modal').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const serviceKey = btn.getAttribute('data-service');
      const data = serviceModalData[serviceKey];

      if (data && serviceModal) {
        modalServiceTitle.textContent = data.title;
        modalServiceDesc.textContent = data.desc;
        modalServiceList.innerHTML = data.specs.map(item => `<li><i class="fa-solid fa-check text-crimson"></i> ${item}</li>`).join('');
        serviceModal.classList.add('active');
      }
    });
  });

  if (serviceModalClose) {
    serviceModalClose.addEventListener('click', () => {
      serviceModal.classList.remove('active');
    });
  }

  // Close modals on clicking backdrop
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
      e.target.classList.remove('active');
    }
  });

  /* ------------------------------------------------------------------------
     7. CAD File Drag & Drop Uploader Simulation
     ------------------------------------------------------------------------ */
  const dropzone = document.getElementById('cad-dropzone');
  const fileInput = document.getElementById('cad-file-input');
  const filePreview = document.getElementById('file-preview');
  const fileName = document.getElementById('file-name');
  const fileSize = document.getElementById('file-size');
  const removeFile = document.getElementById('remove-file');
  const btnLoadSample = document.getElementById('btn-load-sample');

  if (dropzone && fileInput) {
    dropzone.addEventListener('click', () => fileInput.click());

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      dropzone.classList.add('dragover');
    });

    dropzone.addEventListener('dragleave', () => {
      dropzone.classList.remove('dragover');
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      dropzone.classList.remove('dragover');
      if (e.dataTransfer.files.length > 0) {
        handleFileSelect(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        handleFileSelect(e.target.files[0]);
      }
    });
  }

  function handleFileSelect(file) {
    if (fileName && fileSize && filePreview) {
      fileName.textContent = file.name;
      fileSize.textContent = `(${(file.size / (1024 * 1024)).toFixed(2)} MB)`;
      filePreview.style.display = 'flex';
      dropzone.style.display = 'none';
    }
  }

  if (removeFile) {
    removeFile.addEventListener('click', (e) => {
      e.stopPropagation();
      fileInput.value = '';
      filePreview.style.display = 'none';
      dropzone.style.display = 'block';
    });
  }

  if (btnLoadSample) {
    btnLoadSample.addEventListener('click', (e) => {
      e.stopPropagation();
      if (fileName && fileSize && filePreview) {
        fileName.textContent = 'alliance_sample_architectural_jali_screen_v2.dxf';
        fileSize.textContent = '(4.25 MB - CAD DXF File)';
        filePreview.style.display = 'flex';
        dropzone.style.display = 'none';
      }
    });
  }

  /* ------------------------------------------------------------------------
     8. Direct WhatsApp Link & Form Submission Handling
     ------------------------------------------------------------------------ */
  const btnDirectWhatsapp = document.getElementById('btn-direct-whatsapp');
  const projectQuoteForm = document.getElementById('project-quote-form');

  if (btnDirectWhatsapp) {
    btnDirectWhatsapp.addEventListener('click', () => {
      const name = document.getElementById('quote-name').value || 'Customer';
      const service = document.getElementById('quote-service').value || 'Interior Design / CNC';
      const dims = document.getElementById('quote-dimensions').value || 'Custom Dimensions';
      
      const message = `Hi ALLIANCE CNC & Interiors, my name is ${name}. I am interested in ${service} (Scope: ${dims}). Please provide a quote.`;
      const encodedMsg = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/15559028811?text=${encodedMsg}`;

      window.open(whatsappUrl, '_blank');
    });
  }

  if (projectQuoteForm) {
    projectQuoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('quote-name').value;
      const service = document.getElementById('quote-service').value;

      alert(`Thank you, ${name}! Your inquiry for "${service}" along with CAD specifications has been submitted to Alliance engineering team. We will review your CAD file and contact you within 2 business hours.`);
      
      projectQuoteForm.reset();
      if (filePreview) filePreview.style.display = 'none';
      if (dropzone) dropzone.style.display = 'block';
    });
  }

});
