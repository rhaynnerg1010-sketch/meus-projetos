const ContactSection = () => {
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
        .btn-neon {
          background: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%);
          border: 2px solid #38bdf8;
          color: #ffffff;
          font-weight: 700;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
        }
        .btn-neon:hover {
          transform: translateY(-3px);
          background: linear-gradient(135deg, #22d3ee 0%, #0284c7 100%);
        }
      `}</style>

      <section id="contato" className="container-fluid text-light py-5 section-cartola">
        <div className="container py-4">
          <div className="text-center mb-5">
            <span className="text-info fw-bold text-uppercase small" style={{ letterSpacing: "3px", fontFamily: 'Orbitron, sans-serif' }}>
              Central de Propostas
            </span>
            <h2 className="text-white fw-bold display-6 titulo-neon mt-2">
              Faça sua <span style={{ color: "#06b6d4" }}>Jogada</span>
            </h2>
          </div>
          
          <div className="row align-items-center justify-content-center g-5">
            
            {/* Coluna da Imagem */}
            <div className="col-lg-5 text-center">
              <div className="p-3 card-tatico rounded-4 shadow-lg">
                <div className="overflow-hidden rounded-3">
                  <img 
                    className="img-fluid rounded-2 w-100" 
                    src="imagem4.jpeg" 
                    alt="Contato" 
                    style={{ height: "420px", objectFit: "cover" }} 
                  />
                </div>
                <p className="text-light mt-3 mb-0 small fw-semibold opacity-75">Pronto para fechar novas parcerias e projetos.</p>
              </div>
            </div>

            {/* Coluna do Formulário */}
            <div className="col-lg-7">
              <div className="card-tatico p-4 rounded-4 shadow-lg text-white">
                <h4 className="fw-bold mb-3 titulo-neon text-info fs-5">Mande uma mensagem</h4>
                
                <form>
                  <div className="mb-3">
                    <label htmlFor="InputEmail" className="form-label text-light small fw-semibold">
                      Seu E-mail
                    </label>
                    <input
                      type="email"
                      className="form-control bg-dark text-white border-secondary"
                      id="InputEmail"
                      placeholder="nome@exemplo.com"
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="InputMessage" className="form-label text-light small fw-semibold">
                      Sua Mensagem
                    </label>
                    <textarea
                      className="form-control bg-dark text-white border-secondary"
                      id="InputMessage"
                      rows="3"
                      placeholder="Escreva sua mensagem aqui..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-neon w-100 py-3 mb-4 rounded-pill shadow">
                    Enviar Proposta
                  </button>
                </form>

                {/* Redes Sociais */}
                <div className="border-top border-secondary pt-3 text-center">
                  <p className="text-muted small mb-2 fw-semibold">Ou chame diretamente nas redes:</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a 
                      href="https://wa.me/5531972087899?text=Olá,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar!" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn btn-success fw-bold px-4 py-2 hover-btn d-flex align-items-center gap-2 shadow rounded-pill"
                    >
                      <span>💬</span> WhatsApp
                    </a>

                    <a 
                      href="https://instagram.com/rhaynner__09" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="btn fw-bold px-4 py-2 hover-btn d-flex align-items-center gap-2 shadow text-white rounded-pill"
                      style={{ backgroundColor: "#833ab4" }}
                    >
                      <span>📸</span> Instagram
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="bg-black text-light py-4 text-center border-top border-secondary">
        <div className="container">
          <p className="mb-1 text-secondary small">&copy; 2026 FutRhaynner. Todos os direitos reservados.</p>
          <p className="mb-0 fw-semibold small text-info" style={{ fontFamily: 'Orbitron, sans-serif' }}>Desenvolvido com visão tática e tecnologia.</p>
        </div>
      </footer>
    </>
  );
};

export default ContactSection;