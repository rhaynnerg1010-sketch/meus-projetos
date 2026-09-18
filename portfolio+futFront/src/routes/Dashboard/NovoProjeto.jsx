import { useState } from "react";

const NovoProjeto = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        .new-project-page {
          background: radial-gradient(circle at center, #0a192f 0%, #020617 100%);
          min-height: 100vh;
          color: #f8fafc;
        }
        .new-project-card {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
          border: 2px solid #1e293b !important;
          color: #f8fafc !important;
          box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.5) !important;
        }
        .new-project-control {
          background-color: #020617 !important;
          border: 1px solid #334155 !important;
          color: #f8fafc !important;
        }
        .new-project-control::placeholder {
          color: #38bdf8 !important;
          opacity: 0.85;
        }
        .new-project-control:focus {
          border-color: #38bdf8 !important;
          box-shadow: 0 0 0 0.25rem rgba(56, 189, 248, 0.25) !important;
        }
      `}</style>

      <div className="container-fluid new-project-page px-4 px-lg-5 py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <p className="text-info fw-semibold mb-2">FutRhaynner / Projetos</p>
            <h1 className="display-6 fw-bold text-white mb-1">Novo projeto</h1>
            <p className="text-light opacity-75 mb-0">Cadastre um projeto para exibi-lo no portfólio.</p>
          </div>
          <span className="badge bg-info bg-opacity-10 border border-info text-info fs-6 px-3 py-2 fw-bold">Portfólio</span>
        </div>

      <form className="card new-project-card rounded-4 p-4" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label text-light" htmlFor="project-title">Título</label>
            <input id="project-title" className="form-control new-project-control" placeholder="Nome do projeto" required />
          </div>
          <div className="col-md-6">
            <label className="form-label text-light" htmlFor="project-link">Link</label>
            <input id="project-link" type="url" className="form-control new-project-control" placeholder="https://..." />
          </div>
          <div className="col-12">
            <label className="form-label text-light" htmlFor="project-description">Descrição</label>
            <textarea id="project-description" className="form-control new-project-control" rows="4" placeholder="Descreva o projeto" required />
          </div>
        </div>
        <div className="d-flex align-items-center gap-3 mt-4">
          <button type="submit" className="btn btn-info fw-bold">Salvar projeto</button>
          {submitted && <span className="text-success">Projeto preparado para publicação.</span>}
        </div>
      </form>
      </div>
    </>
  );
};

export default NovoProjeto;