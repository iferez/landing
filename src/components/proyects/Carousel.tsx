import { Proyect } from "./proyect";

interface Props {
  data: Array<Proyect>;
}

function Carousel({ data }: Props) {
  return (
    <div id="carousel" className="carousel carousel-dark slide carousel-fade w-75 m-auto" data-bs-ride="carousel">
      <div className="carousel-inner shadow-lg">
        {data.map((el) => (
          <div
            key={el.id}
            className={`carousel-item ${el.id === 1 ? "active" : ""}`}
          >
            <img
              src={el.image}
              className="d-block w-100"
              alt={el.name}
            />
            <div className="mt-4">
            <h5>{el.name}</h5>
            <p>{el.description}</p>
            </div>
          </div>
          
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
}

export default Carousel;
