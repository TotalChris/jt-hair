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
        <img src={Woman2} className="childImage" />
        <img src={Woman1} className="childImage" />
        <img src={WomensCut} className="childImage" />
      </div>
      <div className="wavy-circle">
        <div className="sticker-text emphasis">JT Body Care</div>
        <div className="sticker-text slant">Coming Soon!</div>
      </div>
    </div>
  </>
);
