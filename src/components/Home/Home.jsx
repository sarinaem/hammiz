import logo from "../../assets/Logotype.svg";
import nameSite from "../../assets/Onboarding-logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#f87A08] flex flex-col justify-between py-8 items-center h-screen">
      <div className="flex gap-[39px] flex-col justify-center items-center">
        <img src={nameSite} alt="name of site" className="" />
        <img src={logo} alt="logo website" />
      </div>

      <p className="font-normal font-dana leading-8 text-lg text-[#FFF7F7] ml-[26px] mr-5 text- text-center mt-[64px]">
        با همممیز، میز و غذاهای دلخواهت رو هماهنگ کن
      </p>
      <Link
        to="/map"
        className="text-[#f87A08] mb-8 text-center font-bold mt-[70px] text-lg w-[90%] bg-white px-6 py-2 rounded-[50px] mx-6"
      >
        آغاز
      </Link>
    </div>
  );
};

export default Home;
