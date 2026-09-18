import { useState } from "react";

const storageKey = "futrhaynner-configuracoes";
const defaultSettings = [
  { id: 1, name: "Nome do time", value: "Rhaynner FC", category: "Perfil" },
  { id: 2, name: "Liga principal", value: "Liga Nacional", category: "Competição" },
];

const projectStorageKey = "futrhaynner-projetos";
const defaultProjects = [
  {
    id: 1,
    title: "FutRhaynner - Gestão",
    text: "Sistema completo para cadastro de atletas e controle de elenco.",
    imageSrc: "imagem6.jpeg",
    linkUrl: "https://github.com",
    linkText: "Ver Sistema JS",
    category: "Gestão esportiva",
    status: "Publicado",
  },
  {
    id: 2,
    title: "Painel do Atacante",
    text: "Análise de desempenho ofensivo, finalizações e estatísticas de jogo.",
    imageSrc: "imagem4.jpeg",
    linkUrl: "https://github.com",
    linkText: "Ver Estatísticas",
    category: "Performance",
    status: "Rascunho",
  },
];

const getStoredSettings = () => {
  const storedSettings = localStorage.getItem(storageKey);
  return storedSettings ? JSON.parse(storedSettings) : defaultSettings;
};

const getStoredProjects = () => {
  const storedProjects = localStorage.getItem(projectStorageKey);
  return storedProjects ? JSON.parse(storedProjects) : defaultProjects;
};

const emptyForm = { name: "", value: "", category: "Perfil" };
const emptyProjectForm = {
  title: "",
  text: "",
  imageSrc: "",
  linkUrl: "",
  linkText: "",
  category: "Aplicação web",
  status: "Rascunho",
};

const Configuracoes = () => {
  const [settings, setSettings] = useState(getStoredSettings);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [projects, setProjects] = useState(getStoredProjects);
  const [projectForm, setProjectForm] = useState(emptyProjectForm);
  const [editingProjectId, setEditingProjectId] = useState(null);

  const updateSettings = (nextSettings) => {
    setSettings(nextSettings);
    localStorage.setItem(storageKey, JSON.stringify(nextSettings));
  };

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.value.trim()) return;

    if (editingId) {
      updateSettings(settings.map((setting) => (
        setting.id === editingId ? { ...setting, ...form } : setting
      )));
    } else {
      updateSettings([...settings, { ...form, id: Date.now() }]);
    }

    resetForm();
  };

  const handleEdit = (setting) => {
    setForm({ name: setting.name, value: setting.value, category: setting.category });
    setEditingId(setting.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = (id) => {
    updateSettings(settings.filter((setting) => setting.id !== id));
    if (editingId === id) resetForm();
  };

  const updateProjects = (nextProjects) => {
    setProjects(nextProjects);
    localStorage.setItem(projectStorageKey, JSON.stringify(nextProjects));
  };

  const handleProjectChange = (event) => {
    setProjectForm({ ...projectForm, [event.target.name]: event.target.value });
  };

  const resetProjectForm = () => {
    setProjectForm(emptyProjectForm);
    setEditingProjectId(null);
  };

  const handleProjectSubmit = (event) => {
    event.preventDefault();
    if (!projectForm.title.trim() || !projectForm.text.trim()) return;

    if (editingProjectId) {
      updateProjects(projects.map((project) => (
        project.id === editingProjectId ? { ...project, ...projectForm } : project
      )));
    } else {
      updateProjects([...projects, { ...projectForm, id: Date.now() }]);
    }

    resetProjectForm();
  };

  const handleProjectEdit = (project) => {
    setProjectForm({
      title: project.title,
      text: project.text,
      imageSrc: project.imageSrc,
      linkUrl: project.linkUrl,
      linkText: project.linkText,
      category: project.category,
      status: project.status,
    });
    setEditingProjectId(project.id);
    document.getElementById("projetos-formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectDelete = (id) => {
    updateProjects(projects.filter((project) => project.id !== id));
    if (editingProjectId === id) resetProjectForm();
  };

  return (
    <>
      <style>{`
        .arena-bg {
          background: radial-gradient(circle at center, #0a192f 0%, #020617 100%);
          min-height: 100vh;
        }
        .card-arena {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%) !important;
          border: 2px solid #1e293b !important;
          color: #f8fafc !important;
          box-shadow: 0 1rem 2.5rem rgba(0, 0, 0, 0.5) !important;
        }
        .form-control-arena, .form-select-arena {
          background-color: #020617 !important;
          border: 1px solid #334155 !important;
          color: #f8fafc !important;
        }
        /* Placeholders (sugestões) em azul claro visível (#38bdf8) */
        .form-control-arena::placeholder, 
        .form-select-arena::placeholder {
          color: #38bdf8 !important;
          opacity: 0.85 !important;
        }
        .form-control-arena:focus, .form-select-arena:focus {
          border-color: #38bdf8 !important;
          box-shadow: 0 0 0 0.25rem rgba(56, 189, 248, 0.25) !important;
          color: #f8fafc !important;
          background-color: #020617 !important;
        }
        .table-arena {
          color: #f8fafc !important;
          border-color: #1e293b !important;
        }
        .table-arena th {
          color: #38bdf8 !important;
          background-color: transparent !important;
          border-bottom: 2px solid #334155 !important;
        }
        .table-arena td {
          background-color: transparent !important;
          border-color: #1e293b !important;
          color: #e2e8f0 !important;
        }
      `}</style>

      <div className="container-fluid arena-bg px-4 px-lg-5 py-4">
        <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
          <div>
            <p className="text-info fw-semibold mb-2">FutRhaynner / Administração</p>
            <h1 className="display-6 fw-bold mb-1 text-white" style={{ textShadow: "0 2px 10px rgba(56,189,248,0.2)" }}>Configurações</h1>
            <p className="text-light opacity-75 mb-0">Visualize, cadastre, edite e exclua as configurações do jogo.</p>
          </div>
          <span className="badge bg-info bg-opacity-10 border border-info text-info fs-6 px-3 py-2 fw-bold">{settings.length} registros</span>
        </div>

        <section className="card card-arena border-0 shadow-sm p-4 mb-4 rounded-4">
          <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
            <div>
              <h2 className="h4 fw-bold mb-1 text-white">{editingId ? "Editar configuração" : "Cadastrar configuração"}</h2>
              <p className="text-light opacity-75 mb-0 small">Preencha os dados abaixo para manter suas preferências.</p>
            </div>
            {editingId && (
              <button type="button" className="btn btn-outline-light btn-sm" onClick={resetForm}>
                Cancelar edição
              </button>
            )}
          </div>

          <form className="row g-3" onSubmit={handleSubmit}>
            <div className="col-md-4">
              <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="setting-name">Nome</label>
              <input id="setting-name" name="name" className="form-control form-control-arena" value={form.name} onChange={handleChange} placeholder="Ex.: Nome do time" required />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="setting-value">Valor</label>
              <input id="setting-value" name="value" className="form-control form-control-arena" value={form.value} onChange={handleChange} placeholder="Digite um valor" required />
            </div>
            <div className="col-md-3">
              <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="setting-category">Categoria</label>
              <select id="setting-category" name="category" className="form-select form-select-arena" value={form.category} onChange={handleChange}>
                <option>Perfil</option>
                <option>Competição</option>
                <option>Privacidade</option>
              </select>
            </div>
            <div className="col-md-1 d-flex align-items-end">
              <button type="submit" className="btn btn-info text-dark w-100 fw-bold shadow-sm" title={editingId ? "Salvar edição" : "Cadastrar configuração"}>
                <i className={`bi ${editingId ? "bi-check-lg" : "bi-plus-lg"}`} aria-hidden="true" />
              </button>
            </div>
          </form>
        </section>

        <section className="card card-arena border-0 shadow-sm p-4 rounded-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <h2 className="h4 fw-bold mb-1 text-white">Configurações cadastradas</h2>
              <p className="text-light opacity-75 mb-0 small">Gerencie os registros existentes.</p>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-arena align-middle mb-0">
              <thead>
                <tr><th>Configuração</th><th>Valor</th><th>Categoria</th><th className="text-end">Ações</th></tr>
              </thead>
              <tbody>
                {settings.length === 0 ? (
                  <tr><td colSpan="4" className="text-center text-muted py-4">Nenhuma configuração cadastrada.</td></tr>
                ) : settings.map((setting) => (
                  <tr key={setting.id}>
                    <td className="fw-semibold text-white">{setting.name}</td>
                    <td>{setting.value}</td>
                    <td><span className="badge bg-dark border border-secondary text-light">{setting.category}</span></td>
                    <td className="text-end text-nowrap">
                      <button type="button" className="btn btn-sm btn-outline-info me-2" onClick={() => handleEdit(setting)} title="Editar configuração">
                        <i className="bi bi-pencil" aria-hidden="true" />
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(setting.id)} title="Excluir configuração">
                        <i className="bi bi-trash" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="card card-arena border-0 shadow-sm p-4 mt-4 rounded-4" id="projetos">
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
            <div>
              <p className="text-info fw-semibold mb-1">Portfólio</p>
              <h2 className="h4 fw-bold mb-1 text-white">Projetos</h2>
              <p className="text-light opacity-75 mb-0 small">Gerencie os projetos exibidos futuramente no seu portfólio.</p>
            </div>
            <span className="badge bg-dark border border-secondary fs-6 px-3 py-2 text-white">{projects.length} projetos</span>
          </div>

          <div id="projetos-formulario" className="border border-secondary border-opacity-25 rounded-3 p-3 p-lg-4 mb-4" style={{ backgroundColor: "#020617" }}>
            <div className="d-flex justify-content-between align-items-center gap-2 mb-3">
              <div>
                <h3 className="h5 fw-bold mb-1 text-white">{editingProjectId ? "Editar projeto" : "Cadastrar projeto"}</h3>
                <p className="text-light opacity-50 small mb-0">Esta interface ainda não está conectada ao backend.</p>
              </div>
              {editingProjectId && (
                <button type="button" className="btn btn-outline-light btn-sm" onClick={resetProjectForm}>
                  Cancelar edição
                </button>
              )}
            </div>

            <form className="row g-3" onSubmit={handleProjectSubmit}>
              <div className="col-md-6">
                <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="project-title">Título</label>
                <input id="project-title" name="title" className="form-control form-control-arena" value={projectForm.title} onChange={handleProjectChange} placeholder="Nome do projeto" required />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="project-category">Categoria</label>
                <input id="project-category" name="category" className="form-control form-control-arena" value={projectForm.category} onChange={handleProjectChange} placeholder="Ex.: Aplicação web" required />
              </div>
              <div className="col-md-3">
                <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="project-status">Status</label>
                <select id="project-status" name="status" className="form-select form-select-arena" value={projectForm.status} onChange={handleProjectChange}>
                  <option>Rascunho</option>
                  <option>Publicado</option>
                  <option>Arquivado</option>
                </select>
              </div>
              <div className="col-12">
                <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="project-text">Descrição</label>
                <textarea id="project-text" name="text" className="form-control form-control-arena" rows="3" value={projectForm.text} onChange={handleProjectChange} placeholder="Descreva o projeto" required />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="project-image">Imagem</label>
                <input id="project-image" name="imageSrc" type="text" className="form-control form-control-arena" value={projectForm.imageSrc} onChange={handleProjectChange} placeholder="https://... ou caminho da imagem" />
              </div>
              <div className="col-md-6">
                <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="project-url">URL do projeto</label>
                <input id="project-url" name="linkUrl" type="url" className="form-control form-control-arena" value={projectForm.linkUrl} onChange={handleProjectChange} placeholder="https://github.com/..." />
              </div>
              <div className="col-md-9">
                <label className="form-label fw-semibold text-light small uppercase tracking-wider" htmlFor="project-link-text">Texto do botão</label>
                <input id="project-link-text" name="linkText" className="form-control form-control-arena" value={projectForm.linkText} onChange={handleProjectChange} placeholder="Ver projeto" />
              </div>
              <div className="col-md-3 d-flex align-items-end">
                <button type="submit" className="btn btn-info text-dark w-100 fw-bold shadow-sm">
                  <i className={`bi ${editingProjectId ? "bi-check-lg" : "bi-plus-lg"} me-2`} aria-hidden="true" />
                  {editingProjectId ? "Salvar projeto" : "Adicionar projeto"}
                </button>
              </div>
            </form>
          </div>

          <div className="table-responsive">
            <table className="table table-arena align-middle mb-0">
              <thead>
                <tr><th>Projeto</th><th>Categoria</th><th>Status</th><th>Link</th><th className="text-end">Ações</th></tr>
              </thead>
              <tbody>
                {projects.length === 0 ? (
                  <tr><td colSpan="5" className="text-center text-muted py-4">Nenhum projeto cadastrado.</td></tr>
                ) : projects.map((project) => (
                  <tr key={project.id}>
                    <td>
                      <strong className="d-block text-white">{project.title}</strong>
                      <small className="text-light opacity-75">{project.text}</small>
                    </td>
                    <td>{project.category}</td>
                    <td><span className={`badge ${project.status === "Publicado" ? "bg-info bg-opacity-20 border border-info text-info" : "bg-secondary bg-opacity-20 border border-secondary text-light"}`}>{project.status}</span></td>
                    <td>{project.linkUrl ? <a href={project.linkUrl} target="_blank" rel="noreferrer" className="text-info text-decoration-none fw-semibold">{project.linkText || "Abrir"}</a> : "-"}</td>
                    <td className="text-end text-nowrap">
                      <button type="button" className="btn btn-sm btn-outline-info me-2" onClick={() => handleProjectEdit(project)} title="Editar projeto">
                        <i className="bi bi-pencil" aria-hidden="true" />
                      </button>
                      <button type="button" className="btn btn-sm btn-outline-danger" onClick={() => handleProjectDelete(project.id)} title="Excluir projeto">
                        <i className="bi bi-trash" aria-hidden="true" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Configuracoes;