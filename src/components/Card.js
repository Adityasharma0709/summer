function Card({ src, title }) {
  return (
    <>
      <div className="temp">
        <div className="pic">
          <img src={src} alt={title} />
        </div>
        <div className="title">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}
export default Card;
