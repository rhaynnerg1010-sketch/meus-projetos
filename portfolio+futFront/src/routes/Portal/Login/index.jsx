const Login = () => {
  return (
    <div className="container-fluid vh-100 bg-secondary d-flex align-items-center justify-content-center">
      <div className="row w-100 justify-content-center">
        <div className="col-md-5 col-lg-4">
          <div className="card shadow-lg p-4 border-0 rounded-4 bg-white">
            <div className="text-center mb-4">
              <h2 className="fw-bold text-dark">Portal do Cartola</h2>
              <p className="text-muted small">Faça login para gerenciar seu time</p>
            </div>
            
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">E-mail</label>
                <input type="email" className="form-control" id="email" placeholder="seu.email@exemplo.com" required />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">Senha</label>
                <input type="password" className="form-control" id="password" placeholder="Sua senha" required />
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="remember" />
                  <label className="form-check-label small" htmlFor="remember">Lembrar-me</label>
                </div>
                <a href="#recuperar" className="small text-decoration-none text-primary">Esqueceu a senha?</a>
              </div>

              <button type="submit" className="btn btn-warning w-100 fw-bold py-2">Entrar no Jogo</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;