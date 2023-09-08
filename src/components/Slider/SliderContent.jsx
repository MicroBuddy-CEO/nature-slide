/* eslint-disable react/prop-types */
import img2 from "../../assets/singleleaf1.png";
import img3 from "../../assets/singleleaf2.png";
import img4 from "../../assets/singleleaf3.png";

const SliderContent = ({ item }) => {
  return (
    <div className="relative">
      <img src={item.img} alt="" className="h-screen w-screen" />
      <h1 className="text-[250px] font-[900] text-white absolute top-[28%] left-[35%] text-opacity-[60%]">
        URE
      </h1>
      <img
        src={img2}
        alt=""
        className="absolute top-[9%] left-[27%] w-[112px] h-[83px] rotate-[-20deg]"
      />
      <img
        src={img4}
        alt=""
        className="absolute top-[70%] left-[22%] w-[70px] h-[52px] "
      />
      <img
        src={img3}
        alt=""
        className="absolute top-[80%] left-[4%] w-[70px] h-[52px] "
      />
    </div>
  );
};

export default SliderContent;
