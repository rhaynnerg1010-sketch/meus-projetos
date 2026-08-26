const ContactSection = () => {
  return (
    <section id="Input1" className="container py-5">
        <h2 className="text-center mb-4"> Seção de Contato</h2>
      <div className="row align-items-center">
        
        <div className="col-lg-6 mb-4 mb-lg-0 text-center">
          <img className="img-fluid rounded-2 shadow" src="imagem5.jpeg" alt="" style={{ maxHeight: "200px", objectFit:"cover"}} />
        </div>

        <div className="col-lg-6">
          <div className="mb-3">
            <label htmlFor="Input1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="Input1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;