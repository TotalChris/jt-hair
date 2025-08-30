import { MetaContent } from "../../shared/components/utility/MetaContent";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <MetaContent
        title="JT Hair Care of Brighton | About Us"
        description="JT Hair is a high-end hair salon serving Brighton, Howell, and the Livingston county area."
      />
      <div className="flex flex-col lg:flex-row w-full lg:max-w-5xl 2xl:max-w-7xl lg:mx-auto px-4 lg:px-0 self-center gap-4">
        <div
          className="w-auto h-72 sm:h-96 lg:w-1/2 lg:h-auto lg:mt-20 lg:mb-40 rounded-2xl bg-black mx-4"
          style={{
            backgroundImage: "url(../assets/ginger.webp)",
            backgroundRepeat: "none",
            backgroundPosition: "70%",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="flex flex-col w-full lg:w-1/2 lg:pt-20 px-4">
          <div className="px-8">
            <h1 className="font-bold text-center text-5xl md:text-6xl text-black my-2">
              About <span className="bg-jt-grad-text">JT Hair</span>
            </h1>
          </div>
          <div className="text-neutral-600">
            <p className="font-bold text-center text-2xl italic">
              We Provide Luxury Hair Care at a Modest Price
            </p>
            <div className="flex flex-col gap-4 my-8 lg:my-0 lg:mb-8">
              <div className="w-auto">
                <div className="divider pb-6 pt-10 divider-vertical after:bg-black before:bg-black text-black text-2xl font-medium">
                  Spend Less for Your Look
                </div>
                <p>
                  Prior to opening our business we asked ourselves one simple
                  question. Why is it that people only have two choices when it
                  comes to hair care?
                  <br />
                  <br />
                  A) Visit a chain and be pushed through like cattle at modest
                  pricing.
                  <br />
                  B) Visit an upscale salon and pay enormous prices.
                  <br />
                  <br />
                  That's when we decided to create JT Hair.
                  <br />
                </p>
              </div>
              <div className="w-auto">
                <div className="divider pb-6 pt-10 divider-vertical after:bg-black before:bg-black text-black text-2xl font-medium">
                  Come See The Difference!
                </div>
                <p>
                  Whether or not you can afford the outrageous prices of a
                  high-end salon, everyone wants to get more value for their
                  hard-earned money, and that's what you'll get at JT Hair in
                  Brighton. Our clients enjoy our modern and upscale facility
                  while we offer them complementary drinks, snacks, and even the
                  occasional bakery goods. All while being pampered by some of
                  the best hair stylists in the area.
                </p>
                <br />
                <p>
                  We look forward to your visit, and we promise you'll be glad
                  you came in!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
