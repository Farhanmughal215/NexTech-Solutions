import Image from "next/image";
import ProfileImg from "https://containers.moonfuzz.net/wp-content/uploads/2024/10/Farhan-Zafar-SQUAARE.png";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      {/* Image */}
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      {/* Description */}
      <div className="w-3/4 flex flex-col items-center md:items-start    gap-2">
        <h1 className="text-5xl font-bold text-white">Farhan Z.</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
        Web Developer & AI Specialist
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
        With 7+ years in web development, I specialize in WordPress and AI-powered solutions, creating responsive sites and streamlining business processes for success.


        </p>
      </div>
    </div>
  );
};

export default Banner;
