const activities = [
  { title: "Escalação atualizada", detail: "Você ainda não escalou jogadores.", time: "Agora" },
  { title: "Liga principal criada", detail: "A Liga Nacional está pronta para receber seu time.", time: "Hoje" },
  { title: "Perfil configurado", detail: "Rhaynner FC foi definido como seu time.", time: "Hoje" },
];

const Atividades = () => (
  <>
    <style>{`
      .activities-page {
        background: radial-gradient(circle at center, #0a192f 0%, #020617 100%);
        min-height: 100vh;
        color: #f8fafc;
      }
      .activities-card {
        background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
        border: 2px solid #1e293b;
        color: #f8fafc;
        box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.5);
      }
    `}</style>

    <div className="container-fluid activities-page px-4 px-lg-5 py-4">
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <div>
          <p className="text-info fw-semibold mb-2">FutRhaynner / Histórico</p>
          <h1 className="display-6 fw-bold text-white mb-1">Atividades</h1>
          <p className="text-light opacity-75 mb-0">Acompanhe os últimos movimentos do seu painel.</p>
        </div>
        <span className="badge bg-info bg-opacity-10 border border-info text-info fs-6 px-3 py-2 fw-bold">{activities.length} registros</span>
      </div>

      <div className="row g-4">
        {activities.map((activity) => (
          <div className="col-12" key={activity.title}>
            <div className="activities-card rounded-4 p-4">
              <div className="d-flex justify-content-between gap-3">
                <div>
                  <h2 className="h5 mb-1">{activity.title}</h2>
                  <p className="text-light opacity-75 mb-0">{activity.detail}</p>
                </div>
                <small className="text-info text-nowrap">{activity.time}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default Atividades;