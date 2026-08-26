import CardProjeto from "../../../ui/CardProject";

// Lista com projetos reais e variados baseados no seu perfil
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
    <div className="container py-5">
      <div className="row g-4 align-items-center">
        {/* Coluna Esquerda: Textos personalizados */}
        <div className="col-lg-4">
          <section id="projeto">
            <h3 className="fw-bold mb-3">Sistemas & Futebol</h3>
            <p className="text-muted mb-4">
              Desenvolvendo soluções em JavaScript e PHP com foco na gestão esportiva e performance em campo.
            </p>
            <h4 className="h5 fw-semibold mb-2">Visão de Jogo</h4>
            <p className="text-muted">
              Projetos estruturados para unir a minha paixão pelo futebol e com a tecnologia.
            </p>
          </section>
        </div>

        {/* Coluna Direita: Grid dinâmico com .map() */}
        <div className="col-lg-8">
          <div className="row g-3">
            {projetos.map((projeto, index) => (
              <div className="col-md-6" key={index}>
                <CardProjeto {...projeto} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;