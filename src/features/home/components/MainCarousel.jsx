import "../styles/carousel.css";
export const MainCarousel = () => {
  return (
    <>
      <div id="carouselScaffold">
        <div id="carousel">
          <img src="/assets/woman2.webp" className="childImage" />
          <img src="/assets/woman1.webp" className="childImage" />
          <img src="/assets/womenscut.webp" className="childImage" />
          <img src="/assets/menscut.webp" className="childImage" />
          <img src="/assets/tools.webp" className="childImage" />
          <img src="/assets/woman2.webp" className="childImage" />
          <img src="/assets/woman1.webp" className="childImage" />
          <img src="/assets/womenscut.webp" className="childImage" />
          <img src="/assets/menscut.webp" className="childImage" />
          <img src="/assets/tools.webp" className="childImage" />
        </div>
        <div className="wavy-circle">
          <div className="sticker-text emphasis">JT Body Care</div>
          <div className="sticker-text slant">Coming Soon!</div>
        </div>
      </div>
    </>
  );
};
