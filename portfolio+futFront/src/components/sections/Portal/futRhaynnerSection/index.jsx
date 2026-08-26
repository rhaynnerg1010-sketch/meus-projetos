const FutRhaynnerSection = () => {
  return (
    <div className="container-fluid min-vh-100 bg-dark text-white d-flex flex-column justify-content-between p-0">
      {/* Hero Section */}
      <section className="container py-5 my-auto">
        <div className="row align-items-center justify-content-center text-center text-lg-start g-4">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold text-success mb-3">
              Rhaynner's Fantasy Arena
            </h1>
            <p className="text-light opacity-75 mb-1 small">
              Projeto por: Rhaynner
            </p>
            <p className="text-secondary mb-4 small">
              Tecnologia em Desenvolvimento de Sistemas
            </p>
            <h2 className="h3 fw-semibold mb-3">
              Crie sua Escalação dos Sonhos e Domine a Liga!
            </h2>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              src="https://placehold.co/600x400/102030/00FF88?text=Fantasy+Arena+Interface" 
              alt="Interface do Fantasy Arena" 
              className="img-fluid rounded-4 shadow-lg border border-secondary"
            />
          </div>
        </div>

        {/* Features / Highlights */}
        <div className="row text-center mt-5 g-4">
          <div className="col-md-4">
            <div className="p-3">
              <img 
                src="https://placehold.co/80/102030/00FF88?text=Icon" 
                alt="Gestão de Elenco" 
                className="rounded-circle mb-3 border border-success p-2"
              />
              <h3 className="h5 fw-bold">Gestão de Elenco</h3>
              <p className="text-muted small">Monte seu time com facilidade.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <img 
                src="https://placehold.co/80/102030/00FF88?text=Icon" 
                alt="Pontuação em Tempo Real" 
                className="rounded-circle mb-3 border border-success p-2"
              />
              <h3 className="h5 fw-bold">Pontuação em Tempo Real</h3>
              <p className="text-muted small">Acompanhe as estatísticas ao vivo.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="p-3">
              <img 
                src="https://placehold.co/80/102030/00FF88?text=Icon" 
                alt="Competição e Rankings" 
                className="rounded-circle mb-3 border border-success p-2"
              />
              <h3 className="h5 fw-bold">Competição e Rankings</h3>
              <p className="text-muted small">Suba na tabela da liga</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="row text-center mt-5">
          <div className="col">
            <a href="#iniciar" className="btn btn-success btn-lg fw-bold px-5 py-3 rounded-pill shadow">
              Iniciar Próximo Nível &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-3 text-muted small border-top border-secondary">
        <p className="mb-0">&copy; 2026 Rhaynner's Fantasy Arena. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default FutRhaynnerSection;