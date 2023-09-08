import logo from "../assets/logo.png";
import { LuSearch } from 'react-icons/lu';


const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[100px] mt-8">
      {/* Logo */}
      <div className="flex flex-col items-center">
        <img src={logo} alt="" className="w-[157ox] h-[81px]" />
        <h1 className="text-[30px] font-[900] uppercase text-white leading-[40px]">
          Micro <span className="text-[#2AFF07]">Leaf</span>
        </h1>
        <p className="text-[20px] text-white uppercase">Tagline</p>
      </div>

      {/* menu */}
      <div className="flex items-center h-[60px] px-[50px] rounded-[48px] gap-[81px] bg-gradient-to-r from-[#71717166] from-22% via-[#4242421a] via-90%" style={{boxShadow:" 0px 0px 25px 0px rgba(64, 255, 83, 0.10)"}}>
        <ul className="flex text-[15px] font-[600] text-white gap-[81px]">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>FAQ</li>
        </ul>

        <div className="h-[34px] w-[290px] rounded-[48px] bg-[#71717166] border border-[#B8FFC3] flex items-center">
            <input type="text" className="h-[34px] w-[260px] bg-transparent focus:outline-none" />
            <LuSearch className="text-white text-lg"/>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
