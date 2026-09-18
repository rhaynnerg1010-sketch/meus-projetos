const AboutSection = () => {
  return (
    <>
      <style>{`
        .section-cartola {
          background: radial-gradient(circle at center, #0a1128 0%, #030712 100%);
          font-family: 'Inter', sans-serif;
        }
        .titulo-neon {
          font-family: 'Orbitron', sans-serif;
          letter-spacing: -1px;
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

      <section id="sobre" className="container-fluid text-light py-5 section-cartola">
        <div className="container py-4">
          <div className="row align-items-center g-5">
            
            <div className="col-lg-6">
              <span className="text-info fw-bold text-uppercase small" style={{ letterSpacing: "3px", fontFamily: 'Orbitron, sans-serif' }}>
                Prancheta Técnica
              </span>
              <h2 className="mb-4 display-5 fw-bold text-white titulo-neon mt-2">
                Visão de Jogo & <span style={{ color: "#06b6d4" }}>Código</span>
              </h2>
              <p className="fs-5 lh-base text-light mb-4 opacity-75">
                Sou um desenvolvedor em formação, focado em criar soluções robustas com JavaScript e PHP. 
                Combinando a disciplina do estudo integral em Desenvolvimento de Sistemas com a garra de quem atua como atacante em campo.
              </p>
              
              <div className="d-flex gap-3 text-start">
                <div className="p-3 card-tatico rounded-3 flex-fill">
                  <span className="text-info fw-bold small d-block">POSIÇÃO</span>
                  <span className="text-white fw-bold fs-5" style={{ fontFamily: 'Orbitron, sans-serif' }}>Atacante</span>
                </div>
                <div className="p-3 card-tatico rounded-3 flex-fill">
                  <span className="text-info fw-bold small d-block">FOCO</span>
                  <span className="text-white fw-bold fs-5" style={{ fontFamily: 'Orbitron, sans-serif' }}>Sistemas Web</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <div className="p-3 card-tatico rounded-4 shadow-lg d-inline-block w-100 overflow-hidden">
                <img 
                  className="img-fluid rounded-3 shadow w-100" 
                  src="imagem2.jpeg" 
                  alt="Perfil Rhaynner" 
                  style={{ height: "350px", objectFit: "cover"}} 
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;