const HeroSection = () => {
  return (
    <section id="hero" className="vh-100 bg-secondary container-fluid">

        <div className="row h-100 align-items-center p-3">
          {/* Coluna da Imagem: Diminuída de col-lg-7 para col-lg-5. Adicionado estilo de borda. */}
          <div className="col-lg-5 col-12 h-100 d-flex align-items-center justify-content-center p-0">
            <img 
              src="imagem1.jpeg" 
              alt="" 
              className="img-fluid img-thumbnail w-75 h-auto" // w-75 reduz o tamanho dentro da coluna
            />
          </div>
          
          {/* Coluna do Texto: Aumentada de col-lg-5 para col-lg-7 para preencher o espaço */}
          <div className="col-lg-7 col-12 px-4 text-white">
            <h1>Bem-vindo ao meu site</h1>
            <p></p>
            <button className="btn btn-warning">Escalar Time</button>
          </div>
        </div>
        
    </section>
  );
};

export default HeroSection;