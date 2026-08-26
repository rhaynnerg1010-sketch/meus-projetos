const CardProject = ({cardWidth, ...props}) => {
  return (
    <div className="card" style={{width: cardWidth || "18rem"}}>
        <img
        src={props.imageSrc || "https://placehold.co/250x250"  }
        className="card-img-top"
        alt={props.title || "Card image"}
     />
     
     <div className="card-body">
     <h5 className="card-title"> {props.title || "Card title"}</h5>

    <p className="card-text">
        {props.text ||
        "Some quick example text to build on the card title and make up the bulk of the card's content."}
    </p>

    <a href={props.linkUrl || "#"} className="btn- btn-primary" target="_blank"> {props.linkText || "Go somewhere"}</a>


     </div>
     </div>

  );
};

export default CardProject;