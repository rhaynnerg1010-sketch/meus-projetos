import CardProjeto from "./ProjectCard";

const projetos = [
  {
    title: "FutRhaynner - Gestão",
    text: "Sistema completo para cadastro de atletas e controle de elenco.",
    linkUrl: "https://github.com",
    linkText: "Ver Sistema JS",
    imageSrc: "imagem6.jpeg",
  },
  {
    title: "Painel do Atacante",
    text: "Análise de desempenho ofensivo, finalizações e estatísticas de jogo.",
    linkUrl: "https://github.com",
    linkText: "Ver Estatísticas",
    imageSrc: "imagem4.jpeg",
  },
  {
    title: "Controle Tático PHP",
    text: "Banco de dados relacional para gerenciar posições e escalações.",
    linkUrl: "https://github.com",
    linkText: "Testar Código",
    imageSrc: "imagem3.jpeg",
  },
  {
    title: "Simulador de Partidas",
    text: "Lógica em JavaScript puro para simular placares e lances de ataque.",
    linkUrl: "https://github.com",
    linkText: "Acessar Projeto",
    imageSrc: "imagem7.jpeg",
  },
];

function ProjectSection() {
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
        .hover-card-wrapper {
          transition: transform 0.3s ease;
        }
        .hover-card-wrapper:hover {
          transform: translateY(-8px);
        }
        .badge-posse {
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid #06b6d4;
          color: #38bdf8;
          font-family: 'Orbitron', sans-serif;
        }
      `}</style>

      <div className="container-fluid text-light py-5 section-cartola">
        <div className="container py-4">
          <div className="row g-5 align-items-center">
            
            {/* Coluna de Destaque */}
            <div className="col-lg-4">
              <section id="projeto">
                <span className="text-info fw-bold text-uppercase small" style={{ letterSpacing: "3px", fontFamily: 'Orbitron, sans-serif' }}>
                  Escalação Oficial
                </span>
                <h3 className="fw-bold mb-3 display-6 text-white titulo-neon mt-2">
                  Painel <span style={{ color: "#06b6d4" }}>Tático</span>
                </h3>
                <p className="text-light mb-4 opacity-75">
                  Módulos de desenvolvimento desenvolvidos em JavaScript e PHP com foco em performance e gestão de dados.
                </p>
                <div className="p-3 badge-posse rounded-3">
                  <span className="d-block small fw-bold">ESTRATÉGIA DE JOGO</span>
                  <span className="fs-6 text-white">Sistemas eficientes e limpos.</span>
                </div>
              </section>
            </div>

            {/* Grid de Projetos */}
            <div className="col-lg-8">
              <div className="row g-4">
                {projetos.map((projeto, index) => (
                  <div className="col-md-6 hover-card-wrapper" key={index}>
                    <CardProjeto {...projeto} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectSection;