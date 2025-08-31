import "../styles/carousel.css";
import Woman2 from "/assets/woman2.webp";
import Woman1 from "/assets/woman1.webp";
import WomensCut from "/assets/womenscut.webp";
import MensCut from "/assets/menscut.webp";
import Tools from "/assets/tools.webp";

export const MainCarousel = () => (
  <>
    <div id="carouselScaffold">
      <div id="carousel">
        <img src={Woman2} className="childImage" />
        <img src={Woman1} className="childImage" />
        <img src={WomensCut} className="childImage" />
        <img src={MensCut} className="childImage" />
        <img src={Tools} className="childImage" />
        <img src={Woman2} className="childImage" />
        <img src={Woman1} className="childImage" />
        <img src={WomensCut} className="childImage" />
        <img src={MensCut} className="childImage" />
        <img src={Tools} className="childImage" />
      </div>
      <div className="wavy-circle">
        <div className="sticker-text emphasis">JT Body Care</div>
        <div className="sticker-text slant">Now Open!</div>
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute w-32 sticker-rim"
        >
          <path
            id="circlePath"
            d="
    M 1, 44
    a 55,55 0 1,0 110,0
    55,55 0 1,0 -110,0
  "
            className="invisible"
          />
          <text>
            <textPath href="#circlePath" className="disclaimer">
              By appt. only
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  </>
);
