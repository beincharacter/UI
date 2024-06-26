import React from "react";
import Button from "../components/Button";
import Image from "../components/Image";
import MenuItem from "../components/MenuItem"; // Adjust the import path as necessary

const Hero: React.FC = () => {
  return (
    <>
    
    <main className="flex gap-5 max-md:flex-col max-md:gap-0 h-screen">
      <section className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full pl-24">
        <div className="flex z-10 flex-col max-md:max-w-full">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/09e9f15371209988874335adc2f170d46ac9887e83dd7f44bf3ede1e9d60f2a8?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
            alt="Decorative image"
            className="max-w-full aspect-square w-[165px]"
          />
          <div className="flex flex-col px-5 mt-20 max-md:mt-10 max-md:max-w-full">
            <h1 className="text-7xl leading-[83px] text-stone-700 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] text-left">
              Bite The World of Cheesecake Wonders
            </h1>
            <p className="mt-14 text-lg leading-7 text-stone-950 text-opacity-80 max-md:mt-10 max-md:max-w-full text-left">
              We always make our customer happy by providing
              <br />
              as many choices as possible
            </p>
            <div className="flex gap-3 self-start mt-11 max-md:mt-10">
              <Button variant="primary">Get Started</Button>
              <Button variant="secondary">
                <div className="flex gap-1.5">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4817b140a2710e95f61cfe56c41e2147ee0fd3c08a8e1d02a494fddb1311af9?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
                    alt="Play icon"
                    className="shrink-0 w-5 aspect-square fill-stone-600"
                  />
                  <span>Watch Demo</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex overflow-hidden relative flex-col grow items-center px-16 pt-11 pb-20 mt-3.5 text-base font-medium min-h-[743px] text-stone-700 max-md:px-5 max-md:max-w-full">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e1bdffb1aa8eedaca6f01b6355023bafb70214678a6b6ccfe33402c849c4382?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
            alt="Background image"
            className="object-cover absolute inset-0 size-full"
          />
          <form>
            <label htmlFor="signUpButton" className="sr-only">Sign up</label>
            <button
              id="signUpButton"
              className="relative justify-center px-6 py-2 ml-24 border-2 border-solid border-stone-700 rounded-[38px] max-md:px-5"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    </main>
    <About />
    <Menu />
    </>
  );
};

type CheesecakeInfoProps = {
    title: string;
    subtitle: string;
    description: string;
  };
  
  const CheesecakeInfo: React.FC<CheesecakeInfoProps> = ({ title, subtitle, description }) => (
    <section className="flex flex-col grow px-5 mt-32 max-md:mt-10 max-md:max-w-full text-left">
      <h1 className="text-6xl text-stone-950 max-md:max-w-full max-md:text-4xl">{title}</h1>
      <h2 className="mt-5 text-2xl text-stone-950 text-opacity-80 max-md:max-w-full">{subtitle}</h2>
      <p className="mt-8 text-xl text-black text-opacity-70 max-md:max-w-full">{description}</p>
      <button className="justify-center items-start px-10 py-6 mt-9 max-w-full text-base font-semibold leading-5 text-white bg-yellow-900 shadow-xl rounded-[100px] w-[178px] max-md:px-5">
        Read More
      </button>
    </section>
  );
  
  const About: React.FC = () => {
    return (
      <main>
        <article className="flex gap-5 max-md:flex-col max-md:gap-0">
          <section className="flex justify-center items-center flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d6e65a650fff6b1c608a0797ca7cedcad58444998da5a6a532fc71c55bdb12a?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
              alt="Cheesecake illustration"
              className="w-1/2 aspect-[1.03] max-md:mt-10 max-md:max-w-full flex justify-center items-center"
            />
          </section>
          <section className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full h-screen">
            <CheesecakeInfo
              title="We Love Cheesecake"
              subtitle="Discover Our Cheesecake Story"
              description="At Cheesecake Love, quality is our cornerstone. Each cheesecake is crafted with the finest ingredients, meticulous attention to detail, and a dash of creativity. We believe in delivering not just desserts but moments of sheer indulgence."
            />
          </section>
        </article>
      </main>
    );
  };


const menuItems = [
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b1790636995064afc1d2abb7eb468ec3d4a386238c0ce6d9f537eaab74283f1?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
    title: "Blueberry Cheesecake",
    description: "Blueberry love, cheesecake delight!",
    price: "9.00",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc4891371a13cc3e797fb1e0b922da0df41d17e1e6a86fdc37d594e58a84f608?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/17371f667ae02923036b90b4ecaa9548f6f4d7d14ec79e80762d353d6a6b7967?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
    title: "Biscoff Cheesecake",
    description: "Biscoff adores cheesecake magic",
    price: "11.00",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/8435bbabc867bb398e4d01398458bcc769c5a7cefaaaa93a57cfa6d8014a7bdb?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
  },
  {
    imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/b8135ce38963bcdd36116a1966ec041be65540fd4dc9e769e5c8f705dbd76ea5?apiKey=9930d1395d354fadb15c776dbd7b25f4&",
    title: "Chocolate Cheesecake",
    description: "Cherish Chocolate, relish cheesecake magic!",
    price: "10.00",
    rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/3fbf6dabf1420568fbeccc80dae2290d866337530ffff997e8198b6b25a699cf?apiKey=9930d1395d354fadb15c776dbd7b25f4&"
  }
];

const Menu: React.FC = () => {
  return (
    <main className="flex justify-center flex-col items-center py-16 pr-8 pl-20 bg-yellow-900 bg-opacity-90 max-md:px-5 h-screen">
      <h1 className="mt-1.5 text-6xl text-yellow-50 max-md:text-4xl">Our Menu</h1>
      <section className="flex flex-col mt-11 w-full max-w-[1287px] max-md:mt-10 max-md:max-w-full">
        <div className="max-md:pr-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            {menuItems.map((item, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <MenuItem {...item} />
              </div>
            ))}
          </div>
        </div>
        <button className="flex gap-5 self-end mt-14 text-2xl font-medium text-yellow-50 max-md:mt-10">
          <span className="flex-auto">View More</span>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/878fc51d42cbc71ce04c1524dc6e97adad3c7568309357954f9271b87f80d6b5?apiKey=9930d1395d354fadb15c776dbd7b25f4&" alt="" className="shrink-0 self-start aspect-[0.53] w-[9px]" />
        </button>
      </section>
    </main>
  );
};


export default Hero;