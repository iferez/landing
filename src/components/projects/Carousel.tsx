import { Project } from "./project";

interface Props {
  data: Array<Project>;
}

function Carousel({ data }: Props) {
  return (
    <div
      id="carousel"
      className="carousel carousel-dark slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner shadow-lg">
        {data.map((el) => (
          <div
            key={el.id}
            className={`carousel-item ${el.id === 1 ? "active" : ""}`}
          >
            <a href={el.link} target="_blank">
              <img src={el.image} className="d-block w-100" alt={el.name} />
            </a>
            <div className="info-project">
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
