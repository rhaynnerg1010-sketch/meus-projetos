const HeroSection = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;600;700&display=swap');

        .hero-cartola {
          background: radial-gradient(circle at center, #0a1128 0%, #030712 100%);
          font-family: 'Inter', sans-serif;
        }
        .titulo-neon {
          font-family: 'Orbitron', sans-serif;
          letter-spacing: -1px;
        }
        .badge-neon {
          background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
          color: #030712;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          letter-spacing: 1px;
          text-transform: uppercase;
          box-shadow: 0 0 20px rgba(6, 182, 212, 0.4);
        }
        .btn-neon {
          background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
          border: 2px solid #38bdf8;
          color: #ffffff;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
        }
        .btn-neon:hover {
          transform: translateY(-4px) scale(1.02);
          background: linear-gradient(135deg, #22d3ee 0%, #0284c7 100%);
          box-shadow: 0 0 30px rgba(6, 182, 212, 0.7);
        }
        .card-tatico {
          background: rgba(15, 23, 42, 0.85);
          border: 1px solid rgba(6, 182, 212, 0.3);
          backdrop-filter: blur(10px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .card-tatico:hover {
          transform: translateY(-6px);
          border-color: #06b6d4;
        }
      `}</style>

      <section id="hero" className="vh-100 container-fluid hero-cartola text-white d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center g-5">
            
            {/* Coluna da Imagem / Prancheta Tática */}
            <div className="col-lg-5 text-center">
              <div className="p-3 card-tatico rounded-4 position-relative shadow-lg">
                <span className="position-absolute top-0 start-50 translate-middle badge badge-neon rounded-pill px-3 py-2">
                  ⚽ ATACANTE • CAMISA 10
                </span>
                <div className="overflow-hidden rounded-3 mt-3">
                  <img 
                    src="imagem1.jpeg" 
                    alt="Rhaynner em Ação" 
                    className="img-fluid w-100"
                    style={{ height: "360px", objectFit: "cover" }}
                  />
                </div>
                <div className="mt-3 text-start px-2">
                  <div className="d-flex justify-content-between text-muted small fw-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    <span style={{ color: "#38bdf8" }}>STATUS: TITULAR</span>
                    <span className="text-success">● EM CAMPO</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Coluna de Apresentação com Fontes Estilizadas */}
            <div className="col-lg-7">
              <span className="text-info fw-bold text-uppercase tracking-wider small" style={{ letterSpacing: "3px" }}>
                Portfólio Oficial & Gestão
              </span>
              <h1 className="fw-black mb-3 display-3 text-white mt-2 titulo-neon">
                Fut<span style={{ color: "#06b6d4", textShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}>Rhaynner</span>
              </h1>
              <p className="lead text-light mb-4 opacity-75" style={{ fontSize: "1.1rem" }}>
                Unindo a visão de jogo de um atacante decisivo com a precisão do desenvolvimento de sistemas em JavaScript e PHP. Onde a tática encontra o código.
              </p>
              
              <div className="d-flex flex-wrap gap-3">
                <a href="#projeto" className="btn btn-neon px-4 py-3 rounded-pill">
                  📊 Painel Tático (Projetos)
                </a>
                <a href="#contato" className="btn btn-outline-light px-4 py-3 rounded-pill fw-bold" style={{ borderColor: "#38bdf8", color: "#38bdf8" }}>
                  🤝 Fazer Proposta
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;