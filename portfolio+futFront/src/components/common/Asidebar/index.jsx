import { NavLink } from "react-router";
import "./styles.css";

const Asidebar = () => {
  return (
    <aside className="dashboard-aside d-flex flex-column p-3">
      <NavLink to="/" className="dashboard-brand text-decoration-none mb-5">
        <span className="dashboard-brand-mark">F</span>
        <span>
          <strong>Fut</strong>Rhaynner
          <small>Fantasy Arena</small>
        </span>
      </NavLink>

      <p className="dashboard-nav-label text-uppercase mb-2">Menu principal</p>
      <nav className="nav flex-column gap-1" aria-label="Navegação da dashboard">
        <NavLink to="/dashboard" end className="dashboard-nav-link">
          <i className="bi bi-grid-1x2-fill" aria-hidden="true" />
          Visão geral
        </NavLink>
        <NavLink to="/configurações" className="dashboard-nav-link">
          <i className="bi bi-sliders2-vertical" aria-hidden="true" />
          Configurações
        </NavLink>
      </nav>

      <div className="dashboard-aside-footer mt-auto">
        <div className="dashboard-user d-flex align-items-center gap-2 mb-3">
          <span className="dashboard-avatar">R</span>
          <span className="small">
            <strong className="d-block">Rhaynner</strong>
            <span className="text-muted">Administrador</span>
          </span>
        </div>
        <NavLink to="/" className="dashboard-back-link">
          <i className="bi bi-box-arrow-left" aria-hidden="true" />
          Voltar ao portfólio
        </NavLink>
      </div>
    </aside>
  );
};

export default Asidebar;