import React from "react";

import { CiLocationOn } from "react-icons/ci";
import star from "../../assets/Star.svg";
import imgData from "../../assets/hammmizimage.png";
import subwayIcon from "../../assets/metroicon.svg";
import parking from "../../assets/Parking.svg";
import phone from "../../assets/phone.svg";

import data from "../../data/fakeData";

import time from "../../assets/openingicon.svg";
const DataBtn = () => {
  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <div className="flex gap-4 flex-col">
              <div className="flex gap-1">
                <CiLocationOn className="text-[#F87A08] font-dana w-6 h-6 font-bold" />
                <p className="text-[#525252] text-[14px] font-medium ">
                  {item.address}
                </p>
                <div className="flex items-center justify-center gap-1 ml-6 mt-5 font-medium">
                  <span className="text-[#525252] text-[14px] font-medium leading-6 ">
                    {Number(item.score)
                      .toLocaleString("fa-IR")
                      .replace("٫", ".")}
                  </span>
                  <img src={star} alt="star icon" />
                </div>
              </div>
              <div className="flex flex-row gap-[72px] text-nowrap">
                <div className="flex gap-1">
                  <img src={subwayIcon} alt="" />
                  <span className="text-[#525252] text-[14px] font-medium leading-6">
                    2 دقیقه از مترو انقلاب
                  </span>
                </div>
                <div className="flex gap-1">
                  <img src={time} alt="time of work" />
                  <span className="text-[#525252] text-[14px] font-medium leading-6">
                    8 صبح تا 12 شب
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-[72px] text-nowrap">
                <div className="flex gap-1">
                  <img src={parking} alt="" />
                  <span className="text-[#525252] text-[14px] font-medium leading-6">
                    8 دقیقه از پارکینگ حافظ
                  </span>
                </div>
                <div className="flex gap-2">
                  <img
                    src={phone}
                    alt="time of work"
                    className="w-5 h-5 -mr-3"
                  />
                  <span className="text-[#525252] text-[14px] font-medium leading-6">
                    0218852202
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img src={imgData} alt="" className="mt-8" />
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
};

export default DataBtn;
