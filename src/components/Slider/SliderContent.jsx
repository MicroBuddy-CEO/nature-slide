import img1 from "../../assets/img1.png";
// import img2 from "../../assets/img2.png";
// import img3 from "../../assets/img3.png";
// import img4 from "../../assets/NAT.png";

const SliderContent = () => {
  return (
    <div className="relative">
      <img src={img1} alt="" className="h-screen w-screen" />
      <h1 className="text-[250px] font-[900] text-white absolute top-[28%] left-[35%]">USE</h1>
    </div>
  );
};

export default SliderContent;
