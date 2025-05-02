import React, { useState } from "react";

import { IoIosArrowForward } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";

import SelectTabel from "../Tabs/SelectTabel";
import TimeBtn from "../Tabs/TimeBtn";
import DataBtn from "../Tabs/DataBtn";
import { Link } from "react-router-dom";

import logoEnghlab from "../../assets/logoEnghlab.svg";
import logo from "../../assets/logo-product.svg";
const Product = ({ loc }) => {
  const [activeBtn, setActiveBtn] = useState("data");
  const [activeLocationId, setActiveLocationId] = useState(1);
  const Elements = [
    { id: 1, name: "data", label: "داده‌ها" },
    { id: 2, name: "time", label: "ساعت و روز" },
    { id: 3, name: "table", label: "انتخاب میز" },
  ];
  return (
    <div className="bg-white">
      <div className=" mx-6">
        <div className="flex gap-4  justify-between items-center mt-[80px]">
          <Link to="/map">
            {" "}
            <IoIosArrowForward className="text-[#F87A08] w-6 h-6 font-bold" />
          </Link>
          <img src={activeLocationId === 1 ? logo : logoEnghlab} />
          <CiShoppingCart className="text-[#F87A08] font-bold w-6 h-6" />
        </div>
        <div className="bg-[#E6E6EA]  p-1 rounded-[40px] mt-8 flex justify-between gap-[14px]">
          {Elements.map((element) => {
            return (
              <button
                key={element.id}
                className={`px-4 py-1 rounded-full font-bold text-[14px] leading-6 text-nowrap ${
                  activeBtn === element.name
                    ? "text-white bg-[#F87A08]"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveBtn(element.name)}
                eventHandlers={{
                  click: () => setActiveLocationId(loc.id),
                }}
              >
                {element.label}
              </button>
            );
          })}
        </div>
        <div className="mt-6">
          {activeBtn === "data" && <DataBtn locationId={activeLocationId} />}
          {activeBtn === "time" && <TimeBtn locationId={activeLocationId} />}
          {activeBtn === "table" && (
            <SelectTabel locationId={activeLocationId} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
