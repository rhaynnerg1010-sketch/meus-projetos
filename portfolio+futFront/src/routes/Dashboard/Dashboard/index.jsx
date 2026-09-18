const Dashboard = () => {
  return (
    <>
      <style>{`
        .arena-bg {
          background: radial-gradient(circle at center, #0a192f 0%, #020617 100%);
          min-height: 100vh;
          color: #f8fafc;
        }
        .card-arena {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
          border: 2px solid #1e293b !important;
          color: #f8fafc !important;
          box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.5) !important;
        }
        .placeholder-box {
          background-color: #020617 !important;
          border: 1px solid #334155 !important;
        }
        .list-group-item-arena {
          background-color: transparent !important;
          color: #e2e8f0 !important;
          border-color: #334155 !important;
        }
      `}</style>

      <div className="container-fluid arena-bg px-4 px-lg-5 py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <p className="text-info fw-semibold mb-2">FutRhaynner / Painel</p>
            <h1 className="display-6 fw-bold mb-1 text-white" style={{ textShadow: "0 2px 10px rgba(56,189,248,0.2)" }}>Visão geral</h1>
            <p className="text-light opacity-75 mb-0">Acompanhe seu time, sua pontuação e sua posição na liga.</p>
          </div>
          <span className="badge bg-info bg-opacity-10 border border-info text-info fs-6 px-3 py-2 fw-bold">Rodada atual</span>
        </div>

        <div className="row g-4 mb-4">
          {[
            ["Pontuação", "0,0", "Nesta rodada", "text-info"],
            ["Posição", "--", "Ranking da liga", "text-light opacity-50"],
            ["Jogadores", "0/11", "Escalação montada", "text-light opacity-50"],
            ["Liga", "Principal", "Liga padrão", "text-light opacity-50"],
          ].map(([label, value, detail, detailClass]) => (
            <div className="col-sm-6 col-xl-3" key={label}>
              <div className="card card-arena h-100 p-4">
                <p className="text-light opacity-75 mb-2">{label}</p>
                <p className={`${value === "Principal" ? "h3" : "display-6"} fw-bold mb-0 text-white`}>{value}</p>
                <small className={detailClass}>{detail}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <div className="card card-arena p-4 h-100">
              <h2 className="h4 fw-bold text-white">Minha escalação</h2>
              <p className="text-light opacity-75 mb-4">Monte seu time para começar a competir.</p>
              <div className="placeholder-box rounded p-4 text-center">
                <p className="mb-0 text-light opacity-75">Nenhum jogador escalado ainda.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card card-arena p-4 h-100">
              <h2 className="h4 fw-bold text-white">Próximos passos</h2>
              <ul className="list-group list-group-flush mt-2">
                <li className="list-group-item list-group-item-arena px-0">Escolher jogadores</li>
                <li className="list-group-item list-group-item-arena px-0">Definir capitão</li>
                <li className="list-group-item list-group-item-arena px-0 border-bottom-0">Acompanhar o ranking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;