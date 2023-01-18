import { useEffect, useState } from "react";

function Scroll() {
  const [showScroll, setShowScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setShowScroll(true) : setShowScroll(false);
    });
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {showScroll && (
        <button className="btn btn-dark float" onClick={scrollTop}>
          <i className="bi bi-arrow-up-circle"></i>
        </button>
      )}
    </div>
  );
}

export default Scroll;
