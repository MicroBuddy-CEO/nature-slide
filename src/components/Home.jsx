import MainSlider from "./Slider/MainSlider";
import img from "../assets/NAT.png";

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute z-[999]">
        <img src={img} alt="" className="h-screen w-full" />
      </div>
      <div className="absolute z-[999] top-[36%] left-[10%]">
        <h1 className="primaryTitle text-[220px] font-Poppins leading-[200px]">NAT</h1>
        <p className="w-[400px] text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
        <button className="border px-5 my-6 border-[#89eb8894] rounded-[20px] text-white py-1">Learn More</button>
      </div>
      <MainSlider />
    </div>
  );
};

export default Home;
