import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/dashboard");
  };

  return (
    <>
      <style>{`
        .login-bg {
          background: radial-gradient(circle at center, #0a192f 0%, #020617 100%);
        }
        .card-login-arena {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
          border: 2px solid #334155 !important;
          box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.7) !important;
        }
        .form-control-arena {
          background-color: #020617 !important;
          border: 1px solid #334155 !important;
          color: #f8fafc !important;
          transition: all 0.3s ease;
        }
        .form-control-arena:focus {
          border-color: #facc15 !important;
          box-shadow: 0 0 0 0.25rem rgba(250, 204, 21, 0.25) !important;
        }
        .btn-login-glow {
          background: linear-gradient(135deg, #facc15 0%, #eab308 100%) !important;
          border: none;
          color: #0f172a !important;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(250, 204, 21, 0.3);
        }
        .btn-login-glow:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(250, 204, 21, 0.5);
          filter: brightness(1.1);
        }
      `}</style>

      <div className="container-fluid vh-100 login-bg d-flex align-items-center justify-content-center">
        <div className="row w-100 justify-content-center px-3">
          <div className="col-md-5 col-lg-4">
            
            <div className="card card-login-arena p-4 rounded-4 text-white">
              <div className="text-center mb-4">
                <div className="d-inline-block p-2 rounded-circle bg-warning bg-opacity-10 border border-warning mb-2">
                  <span className="fs-4">🛡️</span>
                </div>
                <h2 className="fw-bold text-warning mb-1">Portal do Cartola</h2>
                <p className="text-light opacity-75 small">Faça login para gerenciar seu time</p>
              </div>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold text-light small uppercase tracking-wider">E-mail</label>
                  <input type="email" className="form-control form-control-arena py-2" id="email" placeholder="@e-mail.com"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label fw-semibold text-light small uppercase tracking-wider">Senha</label>
                  <input type="password" className="form-control form-control-arena py-2" id="password" placeholder="Sua senha" />
                </div>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div className="form-check">
                    <input type="checkbox" className="form-check-input border-secondary bg-dark" id="remember" />
                    <label className="form-check-label small text-light opacity-75" htmlFor="remember">Lembrar-me</label>
                  </div>
                  <a href="#recuperar" className="small text-decoration-none text-warning fw-semibold">Esqueceu a senha?</a>
                </div>

                <button type="submit" className="btn btn-login-glow w-100 fw-bold py-3 text-uppercase tracking-wider">Entrar no Jogo</button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Login;