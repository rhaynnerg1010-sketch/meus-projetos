const AboutSection = () => {
  return (
   <section id="sobre" className="container py-5">
    <h2 className="mb-4 f-prata f-g text-center text-md-start">
        Olá!
    </h2>
    <p className="f-p text-center text-md-start">
        Sou um desenvolvedor de sistemas em formação, concluindo meus estudos na Escola Estadual Professora Sebastiana de Almeida e Silva.
        Participando do curso de Desenvolvimento e Analise de sistemas , no ensino integral.
    </p>
    <img className="img-fluid rounded-2 shadow" src="imagem2.jpeg" alt="" style={{ maxHeight: "500px", objectFit:"cover"}} />
   </section>
  );
};

export default AboutSection;