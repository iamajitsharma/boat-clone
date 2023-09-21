import Container from "../Common/Container";

const Hero = () => {
  return (
    <Container>
      <div className="flex items-center justify-between w-full h-full">
        <div>
          <div className="text-[5.25rem]">
            <h1 className="font-metropolis_light">True Wireless</h1>
            <h2 className="font-metropolis_bold">Earbuds</h2>
          </div>
          <h4 className="py-2 font-metropolis text-3xl">
            Starting from <span className="font-metropolis_bold">₹999*</span>
          </h4>
        </div>
        <div className="w-1/2">
          <img
            src="./assets/image/cover.png"
            alt=""
            className="w-full h-full object-fill"
          />
        </div>
      </div>
    </Container>
  );
};

export default Hero;
