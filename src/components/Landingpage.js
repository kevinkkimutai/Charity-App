import Carousel from "react-bootstrap/Carousel";
import charity6 from "../img/charity6.jpeg";
import charity7 from "../img/charity7.jpeg";
import charity8 from "../img/charity8.jpeg";
import charity9 from "../img/charity9.jpeg";

function Slides() {
  return (
    <div
      className="pt-5 bg-dark"
      style={{ height: "200px" }}
      data-bs-theme="dark"
    >
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100 "
            style={{ height: "350px" }}
            src={charity6}
            alt="First slide"
          />
          <Carousel.Caption>
            <p>Those who are happiest are those who do the most for others.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            style={{ height: "350px" }}
            src={charity7}
            alt="Second slide"
          />
          <Carousel.Caption>
            <p>
              Remember that the happiest people are not those getting more, but
              those giving more.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "350px" }}
            src={charity8}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>
              We make a living by what we get. We make a life by what we give.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "350px" }}
            src={charity9}
            alt="Third slide"
          />
          <Carousel.Caption>
            <p>
              Happiness doesn’t result from what we get, but from what we give.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="bg-dark" style={{ height: "190%", }}>
      <div className="container name pt-5">
        <p style={{ width: "700px", marginLeft: 220 }}>
          <p>Welcome to the Charity Application</p>
          While actions are always to be judged by the immutable standard
          of right and wrong, and judgments we pass upon men must be qualified
          by considerations of age, country, station and other accidental
          circumstances; and it will then be found that he who is most
          charitable in his judgment is generally th .....   
          <a
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
            href="main"
          >
            MAINPAGE
          </a>
        </p>
      </div>
    </div>
    </div>
  );
}

export default Slides;
