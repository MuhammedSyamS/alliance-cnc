import React, { useState, useEffect } from 'react';

export default function QuoteContact({ initialQuoteData }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Residential Interior');
  const [dimensions, setDimensions] = useState('');
  const [description, setDescription] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  useEffect(() => {
    if (initialQuoteData) {
      if (initialQuoteData.service) setService(initialQuoteData.service);
      if (initialQuoteData.dimensions) setDimensions(initialQuoteData.dimensions);
      if (initialQuoteData.description) setDescription(initialQuoteData.description);
    }
  }, [initialQuoteData]);

  const handleFileDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files.length > 0) {
      const f = e.dataTransfer.files[0];
      setSelectedFile({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`
      });
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const f = e.target.files[0];
      setSelectedFile({
        name: f.name,
        size: `${(f.size / (1024 * 1024)).toFixed(2)} MB`
      });
    }
  };

  const handleLoadSample = () => {
    setSelectedFile({
      name: 'alliance_sample_kerala_jali_design.dxf',
      size: '4.25 MB (Sample CAD File)'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name || 'Customer'}! Your quote request for "${service}" has been received by our Kerala factory team. We will contact you at ${phone} shortly.`);
    setName('');
    setPhone('');
    setDimensions('');
    setDescription('');
    setSelectedFile(null);
  };

  const handleWhatsApp = () => {
    const custName = name || 'Customer';
    const msg = `Hi Alliance Kerala Team, my name is ${custName}. I need a price quote for ${service} in Kerala (Size/Scope: ${dimensions || 'Custom Size'}). Please help me.`;
    window.open(`https://wa.me/919847012345?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section className="section-padding quote-section" id="quote">
      <div className="container">
        <div className="section-header">
          <span className="arch-index">06. KERALA INQUIRY & CAD REVIEW</span>
          <h2 className="heading-md">
            Get a Free Quote & <span className="text-crimson">Drawing Review</span>
          </h2>
          <p className="subheading">
            Send us your project details, room sizes, or CAD drawing files for a fast factory price quote in Indian Rupees (₹).
          </p>
        </div>

        <div className="quote-grid">
          <div className="quote-form-card">
            <form onSubmit={handleSubmit}>
              <div className="form-grid-2">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input type="text" className="custom-input" placeholder="e.g. Ramesh Kumar" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>

                <div className="form-group">
                  <label className="form-label">Mobile / WhatsApp Number (India) *</label>
                  <input type="tel" className="custom-input" placeholder="+91 98470 12345" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
              </div>

              <div className="form-grid-2" style={{ marginTop: '1.25rem' }}>
                <div className="form-group">
                  <label className="form-label">Select Service *</label>
                  <select className="custom-select" value={service} onChange={(e) => setService(e.target.value)} required>
                    <option value="Kerala Home Interior">Kerala Home & Villa Interior Design</option>
                    <option value="Commercial Shop Fitout">Shop & Commercial Fit-out</option>
                    <option value="Custom CNC Jali Cutting">Custom CNC Jali & Wood Cutting Only</option>
                    <option value="Exterior Building Facade">Exterior ACP & Elevation Facade</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Room Size / Dimensions</label>
                  <input type="text" className="custom-input" placeholder="e.g. 4ft x 8ft panel or 3 BHK Villa in Kochi" value={dimensions} onChange={(e) => setDimensions(e.target.value)} />
                </div>
              </div>

              {/* CAD File Uploader Dropzone */}
              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <label className="form-label">Upload CAD / DXF / PDF Drawing File (Optional):</label>
                
                {!selectedFile ? (
                  <div 
                    className={`dropzone ${dragOver ? 'dragover' : ''}`}
                    onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={handleFileDrop}
                    onClick={() => document.getElementById('cad-file-input-react').click()}
                  >
                    <div className="dropzone-text">
                      Drag & drop CAD drawing (.dxf, .dwg, .pdf) here, or <span className="text-crimson">Browse File</span>
                    </div>
                    <div className="dropzone-hint">Supports DXF, DWG, PDF, AI vector files up to 50MB</div>
                    <input type="file" id="cad-file-input-react" style={{ display: 'none' }} onChange={handleFileChange} accept=".dxf,.dwg,.pdf,.ai,.zip,.png,.jpg" />
                  </div>
                ) : (
                  <div className="file-preview">
                    <div>
                      <span style={{ fontWeight: 700, color: 'var(--crimson-primary)' }}>ATTACHED FILE: </span>
                      <span>{selectedFile.name}</span>
                      <span style={{ color: 'var(--text-dim)', fontSize: '0.75rem', marginLeft: '0.4rem' }}>({selectedFile.size})</span>
                    </div>
                    <span style={{ cursor: 'pointer', fontWeight: 700, color: 'var(--crimson-primary)' }} onClick={() => setSelectedFile(null)}>REMOVE</span>
                  </div>
                )}

                <button type="button" onClick={handleLoadSample} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontSize: '0.78rem', textDecoration: 'underline', marginTop: '0.4rem', cursor: 'pointer' }}>
                  Click here to test loading a sample CAD drawing file
                </button>
              </div>

              <div className="form-group" style={{ marginTop: '1.25rem' }}>
                <label className="form-label">Project Notes & Material Preference:</label>
                <textarea className="custom-input" rows="3" placeholder="Tell us about your project, material choice (Teak Wood, WPC Waterproof, Marine Plywood, MDF, ACP, Brass), or location in Kerala..." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Request for Free Price Quote
                </button>

                <button type="button" className="btn btn-whatsapp" onClick={handleWhatsApp} style={{ width: '100%' }}>
                  Chat Instantly on WhatsApp (+91 98470 12345)
                </button>
              </div>
            </form>
          </div>

          <div className="contact-info-card">
            <div className="info-box">
              <div style={{ marginBottom: '1.5rem' }}>
                <img 
                  src="/assets/logo/alliance_new_logo.png" 
                  alt="Alliance Workshop Kerala Logo" 
                  style={{ height: '38px', width: 'auto' }}
                />
              </div>

              <div className="info-item">
                <div className="info-text">
                  <span className="arch-index">KERALA FACTORY ADDRESS</span>
                  <h4>Factory & Main Office</h4>
                  <p>Industrial Zone, Kalamassery, Ernakulam<br />Kochi, Kerala - 683104, India</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-text">
                  <span className="arch-index">CONTACT LINES</span>
                  <h4>Call or WhatsApp Us</h4>
                  <p>Direct Phone: +91 98470 12345 / 0484 2345678<br />WhatsApp: +91 98470 12345</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-text">
                  <span className="arch-index">COVERAGE DISTRICTS</span>
                  <h4>All Kerala Delivery & Fitting</h4>
                  <p>Ernakulam, Calicut, Trivandrum, Thrissur, Kottayam, Malappuram, Kannur & All Kerala Districts</p>
                </div>
              </div>
            </div>

            <div className="map-simulation">
              <div className="map-sim-bg"></div>
              <div className="map-pin-box">
                <span className="arch-index">LOCATION MAP</span>
                <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>ALLIANCE CNC Factory - Kalamassery, Kochi</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Kerala - Visitors Welcome to See Materials</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
