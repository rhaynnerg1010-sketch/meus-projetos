import { Link } from "react-router";

const FutRhaynnerSection = () => {
  return (
    <>
      <style>{`
        /* Estilos customizados exclusivos do Fantasy Arena */
        .arena-bg {
          background: radial-gradient(circle at center, #0a192f 0%, #020617 100%);
        }
        .card-atleta-arena {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border: 2px solid #1e293b;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-atleta-arena:hover {
          transform: translateY(-6px);
          box-shadow: 0 1rem 2.5rem rgba(0, 255, 136, 0.15) !important;
          border-color: #00FF88 !important;
        }
        .feature-icon-box {
          transition: transform 0.3s ease;
        }
        .feature-icon-box:hover {
          transform: scale(1.05);
        }
        .btn-arena-glow {
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(0, 255, 136, 0.3);
        }
        .btn-arena-glow:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 25px rgba(0, 255, 136, 0.5);
        }
      `}</style>

      <div className="container-fluid min-vh-100 arena-bg text-white d-flex flex-column justify-content-between p-0">
        
        {/* Hero Section */}
        <section className="container py-5 my-auto">
          <div className="row align-items-center justify-content-center text-center text-lg-start g-5">
            
            <div className="col-lg-6">
              <div className="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill bg-success bg-opacity-10 border border-success text-success fw-bold small mb-3">
                <span>⚽</span> MERCADO ATIVO •
              </div>
              <h1 className="display-4 fw-bold text-success mb-3" style={{ textShadow: "0 2px 10px rgba(0,255,136,0.2)" }}>
                Rhaynner's Fantasy Arena
              </h1>
              <p className="text-light opacity-75 mb-1 fw-semibold">
                Projeto por: <span className="text-warning">Rhaynner</span>
              </p>
              <p className="text-secondary mb-4 small text-uppercase tracking-wider">
                Tecnologia em Desenvolvimento de Sistemas
              </p>
              <h2 className="h3 fw-bold mb-4 text-white lh-base">
                Crie sua Escalação dos Sonhos e Domine a Liga!
              </h2>
            </div>

            <div className="col-lg-6 text-center">
              <div className="p-2 rounded-4 card-atleta-arena shadow-lg position-relative">
                <div className="position-absolute top-0 start-0 m-4 badge bg-danger fs-6 fw-bold shadow z-1">
                  ATA • 99
                </div>
                <img 
                  src="dybalaXcristiano.jpeg" 
                  alt="Interface do Fantasy Arena" 
                  className="img-fluid rounded-3 shadow w-100 border border-success border-opacity-25"
                />
              </div>
            </div>

          </div>

          {/* Features / Highlights */}
          <div className="row text-center mt-5 g-4">
            
  <div className="col-md-4">
    <div className="p-4 rounded-4 card-atleta-arena feature-icon-box h-100 shadow">
      <div className="d-flex justify-content-center">
        <img 
          src="neymar.jpeg" 
          alt="Gestão de Elenco" 
          className="rounded-circle mb-3 border border-success border-2 shadow-sm"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>
      <h3 className="h5 fw-bold text-success mb-2">Gestão de Elenco</h3>
      <p className="text-muted small mb-0">Monte seu time com facilidade.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="p-4 rounded-4 card-atleta-arena feature-icon-box h-100 shadow">
      <div className="d-flex justify-content-center">
        <img 
          src="images.jpg" 
          alt="Pontuação em Tempo Real" 
          className="rounded-circle mb-3 border border-success border-2 shadow-sm"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>
      <h3 className="h5 fw-bold text-success mb-2">Pontuação em Tempo Real</h3>
      <p className="text-muted small mb-0">Acompanhe as estatísticas ao vivo.</p>
    </div>
  </div>

  <div className="col-md-4">
    <div className="p-4 rounded-4 card-atleta-arena feature-icon-box h-100 shadow">
      <div className="d-flex justify-content-center">
        <img 
          src="brazill.jpeg" 
          alt="Competição e Rankings" 
          className="rounded-circle mb-3 border border-success border-2 shadow-sm"
          style={{ width: "150px", height: "150px", objectFit: "cover" }}
        />
      </div>
      <h3 className="h5 fw-bold text-success mb-2">Competição e Rankings</h3>
      <p className="text-muted small mb-0">Suba na tabela da liga</p>
    </div>
  </div>

</div>

          {/* Call to Action */}
          <div className="row text-center mt-5 pt-3">
            <div className="col">
              <Link to="/login" className="btn btn-success btn-lg fw-bold px-5 py-3 rounded-pill btn-arena-glow text-uppercase tracking-wider">
                Iniciar Próximo Nível &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-center py-4 text-muted small border-top border-secondary border-opacity-50">
          <div className="container">
            <p className="mb-1">&copy; 2026 Rhaynner's Fantasy Arena. Todos os direitos reservados.</p>
            <p className="mb-0 text-success fw-semibold" style={{ fontSize: "0.8rem" }}>⚡ Desenvolvido com visão de jogo e tecnologia.</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default FutRhaynnerSection;