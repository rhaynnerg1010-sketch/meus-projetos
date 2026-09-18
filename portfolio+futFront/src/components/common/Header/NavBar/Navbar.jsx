import "./Navbar.styles.css";
import { Link } from "react-router";

export const Navbar = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Inter:wght@400;600;700&display=swap');

        .navbar-cartola {
          background: rgba(3, 7, 18, 0.95) !important;
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(6, 182, 212, 0.2);
          font-family: 'Inter', sans-serif;
        }
        .brand-neon {
          font-family: 'Orbitron', sans-serif;
          letter-spacing: -1px;
          color: #ffffff !important;
        }
        .nav-link-custom {
          color: #94a3b8 !important;
          font-weight: 600;
          transition: color 0.3s ease;
        }
        .nav-link-custom:hover {
          color: #06b6d4 !important;
        }
        .dropdown-menu-cartola {
          background-color: #0f172a !important;
          border: 1px solid rgba(6, 182, 212, 0.3) !important;
        }
        .dropdown-item-custom {
          color: #cbd5e1 !important;
          transition: all 0.2s ease;
        }
        .dropdown-item-custom:hover {
          background-color: rgba(6, 182, 212, 0.15) !important;
          color: #38bdf8 !important;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-dark navbar-cartola shadow sticky-top">
          <div className="container">
              <Link className="navbar-brand fw-bold fs-4 brand-neon" to="/">
                Fut<span style={{ color: "#06b6d4", textShadow: "0 0 15px rgba(6, 182, 212, 0.6)" }}>Rhaynner</span>
              </Link>
              
              <button 
                  className="navbar-toggler border-secondary" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#n" 
                  aria-controls="n" 
                  aria-expanded="false" 
                  aria-label="Toggle navigation"
              >
                  <span 
                      className="navbar-toggler-icon" 
                      style={{ filter: "invert(1) grayscale(100%) brightness(200%)" }}
                  ></span>
              </button>
              
              <div className="collapse navbar-collapse" id="n">
                  <ul className="navbar-nav ms-auto align-items-center gap-3">

                      <li className="nav-item">
                          <Link className="nav-link nav-link-custom" to="/">Meu portifólio</Link>
                      </li>

                      <li className="nav-item">
                          <Link className="nav-link nav-link-custom" to="/fut-Rhaynner">FutRhaynner</Link>
                      </li>

                      <li className="nav-item dropdown">
                          <a 
                              className="nav-link dropdown-toggle fw-semibold" 
                              href="#" 
                              id="secoesDropdown" 
                              role="button" 
                              data-bs-toggle="dropdown" 
                              aria-expanded="false"
                              style={{ color: "#38bdf8" }}
                          >
                              Ir para a Seção
                          </a>
                          <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end shadow dropdown-menu-cartola rounded-3 p-2" aria-labelledby="secoesDropdown">
                              <li><a className="dropdown-item dropdown-item-custom rounded py-2" href="#hero">Início / Topo</a></li>
                              <li><a className="dropdown-item dropdown-item-custom rounded py-2" href="#sobre">Sobre Mim</a></li>
                              <li><a className="dropdown-item dropdown-item-custom rounded py-2" href="#projeto">Painel Tático</a></li>
                              <li><hr className="dropdown-divider border-secondary my-1" /></li>
                              <li><a className="dropdown-item dropdown-item-custom rounded py-2 text-info" href="#contato">Contato & Propostas</a></li>
                          </ul>
                      </li>

                  </ul>
              </div>
          </div>
      </nav>
    </>
  );
};

export default Navbar;