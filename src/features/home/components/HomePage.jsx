import { MetaContent } from "../../shared/components/utility/MetaContent";
import { isMobile } from "../../shared/util/isMobile";
import { MainCarousel } from "./MainCarousel";

const HomePage = () => {
  return (
    <div className="min-h-screen max-w-100 overflow-x-hidden">
      <MetaContent
        title="JT Hair Care of Brighton"
        description="With luxury hair care at modest prices, JT Hair is a high-end hair salon serving Brighton, Howell, and the Livingston county area."
      />
      <div className="w-full rounded-xl">
        <div className="flex flex-col mt-2">
          <MainCarousel />
          <div className="z-10">
            <div className="w-full flex flex-col md:flex-row gap-2 justify-center mx-auto text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl text-black font-medium my-2 md:my-10 mx-0 z--10">
              <div className="text-center">
                <span className="font-bold bg-jt-grad-text jt-headpiece-1">
                  Luxury{" "}
                </span>
                <span className="jt-headpiece-2">Hair Care,</span>
              </div>
              <div className="text-center">
                <span className="font-bold bg-jt-grad-text jt-headpiece-3">
                  Modest{" "}
                </span>
                <span className="jt-headpiece-4">Prices.</span>
              </div>
            </div>
            <hr className="my-8 mx-16 xl:mx-auto lg:max-w-5xl border-black" />
            <p className="text-xl text-center text-gray-500 italic jt-headpiece-5">
              Walk-Ins and Appointments Welcome
            </p>
            <div className="flex flex-row gap-2 justify-center w-full mt-5 mb-10 jt-headpiece-5">
              <a
                href={isMobile() ? "tel:8105225028" : "/contact"}
                id="buttonRoot"
                className="btn btn-ghost text-black bg-jt-grad hover:cursor-pointer normal-case text-lg"
              >
                <i className="bi bi-telephone"></i>&nbsp;&nbsp;Call Now
              </a>
              <a
                href="https://goo.gl/maps/xXWNyKnYBn2aoVSKA"
                className="btn btn-ghost text-black bg-gray-200 hover:bg-gray-300 normal-case text-lg"
              >
                <i className="bi bi-pin-map"></i>&nbsp;&nbsp;Visit Us
              </a>
            </div>
            <div className="flex flex-col xl:flex-row w-full lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto">
              <div className="hero w-full lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto text-black">
                <div className="hero-content flex-col md:flex-row xl:flex-col xl:justify-start xl:h-full">
                  <div
                    className="w-full rounded-lg shadow-xl h-96 md:w-1/3 md:h-72 xl:w-full drop-shadow-2xl"
                    style={{
                      backgroundImage:
                        "url('/assets/interior-washchairs.webp')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h1
                      className="visible md:invisible xl:visible flex rounded-lg p-2 items-end content-start h-full w-full text-5xl font-medium text-white"
                      style={{
                        backgroundImage:
                          "radial-gradient(ellipse farthest-corner at 0px 100%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0) 100%)",
                        backgroundPositionX: "left",
                        backgroundPositionY: "bottom",
                      }}
                    >
                      What we&nbsp;
                      <span className="font-bold bg-jt-grad-text">do</span>:
                    </h1>
                  </div>
                  <div className="w-full md:w-2/3 xl:w-full xl:h-52 h-auto md:h-72 flex flex-col justify-between">
                    <h1 className="hidden md:block xl:hidden text-5xl font-medium">
                      What we{" "}
                      <span className="font-bold bg-jt-grad-text">do</span>:
                    </h1>
                    <p className="lg:py-6 mb-4">
                      We are an upscale facility for hair care without an
                      outrageous price tag. Our clients are pampered by the best
                      hair stylists in the area while enjoying complementary
                      drinks, snacks, and bakery items.
                    </p>
                    <a
                      href="/services"
                      className="inner-navlink btn btn-ghost bg-jt-grad hover:bg-yellow-200 normal-case text-lg drop-shadow-xl"
                    >
                      <i className="bi bi-scissors"></i>&nbsp;&nbsp;Our Services
                    </a>
                  </div>
                </div>
              </div>
              <div className="hero w-full lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto text-black">
                <div className="hero-content flex-col md:flex-row xl:flex-col xl:justify-start xl:h-full">
                  <div
                    className="w-full rounded-lg shadow-xl h-96 md:w-1/3 md:h-72 xl:w-full drop-shadow-2xl"
                    style={{
                      backgroundImage: "url('/assets/location.webp')",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <h1
                      className="visible md:invisible xl:visible flex rounded-lg p-2 items-end content-start h-full w-full text-5xl font-medium text-white"
                      style={{
                        backgroundImage:
                          "radial-gradient(ellipse farthest-corner at 0px 100%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0) 100%)",
                        backgroundPositionX: "left",
                        backgroundPositionY: "bottom",
                      }}
                      // background-image: radial-gradient(
                      // 	ellipse farthest-corner at 0px 100%,
                      // 	rgba(0, 0, 0, 1) 0%,
                      // 	rgba(0, 0, 0, 0.25) 50%,
                      // 	rgba(0, 0, 0, 0) 100%
                      // );
                      // background-position-x: left;
                      // background-position-y: bottom;
                    >
                      Who we&nbsp;
                      <span className="font-bold bg-jt-grad-text">are</span>:
                    </h1>
                  </div>
                  <div className="w-full md:w-2/3 xl:w-full xl:h-52 h-auto md:h-72 flex flex-col justify-between">
                    <h1 className="hidden md:block xl:hidden text-5xl font-medium">
                      Who we{" "}
                      <span className="font-bold bg-jt-grad-text">are</span>:
                    </h1>
                    <p className="lg:py-6 mb-4">
                      JT Hair in Brighton offers a luxury experience with
                      top-notch stylists at fair prices. Our stylists are here
                      to help you look your best, for less. We can't wait to
                      meet you too!
                    </p>
                    <a
                      href="/our-team"
                      className="inner-navlink btn btn-ghost text-black bg-jt-grad hover:bg-yellow-200 normal-case text-lg drop-shadow-xl"
                    >
                      <i className="bi bi-person"></i>&nbsp;&nbsp;Our Staff
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
