import bgImage from "../../assets/png/bgImage.png";

const Hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url("${bgImage}")`,
  };
  return (
    <div>
      <div
        className="pt-24 pb-20 md:pt-28 md:pb-32 bg-cover "
        style={backgroundImageStyle}
      >
        <div className=" h-full w-screen text-center lg:text-left">
          <h1 className=" text-white font-bold mx-auto lg:mx-0 leading-[2.2788rem] text-[1.75rem] w-60 md:w-96 md:text-[4.5rem] md:leading-[5.8587rem] lg:pl-[4.8125rem]">
            Watch something incredible
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
