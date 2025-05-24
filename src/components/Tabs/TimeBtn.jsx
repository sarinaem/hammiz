import React, { useState } from "react";
import DateSlider, { getJalaliDays } from "../Slider/DateSlider";
import TimeSlider, { hours } from "../Slider/TimeSlider";
import { useNavigate } from "react-router-dom";

const TimeBtn = () => {
  const [selectedTime, setSelectedTime] = useState([4, 8]);
  const [selectedDate, setSelectedDate] = useState(1);
  const dates = getJalaliDays();
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-center flex-col mx-6">
      <p className="font-bold text-base leading-8  mb-[29px] text-center text-[#525252]">
        ساعت و روز دلخواهت رو هماهنگ کن:
      </p>

      <div className="flex flex-col border border-[#F87A08] mb-12 rounded-[40px] ">
        {/* <div className="flex justify-evenly items-center gap-10 mt-[29px] "> */}
        <fieldset className="relative h-[388px] rounded-2xl w-[345px] flex items-center justify-center">
          <legend className="absolute -top-3 right-2 bg-white px-2 text-sm text-gray-600">
            ساعت
          </legend>

          <div className="flex-1 flex justify-center items-center">
            <TimeSlider value={selectedTime} onChange={setSelectedTime} />
          </div>
          <div className="w-[1px] h-full border border-[#8F8F8F] opacity-30 absolute right-45"></div>

          <legend className="absolute -top-3 left-2 bg-white px-2 text-sm text-gray-600">
            روز
          </legend>
          <div className="flex-1 flex justify-center items-center">
            <DateSlider value={selectedDate} onChange={setSelectedDate} />
          </div>
        </fieldset>
        {/* </div> */}

        <div
          className="flex bg-[#D9D9D9] p-4 text-sm font-bold text-center
        border-t-[#8F8F8F] border-t-1 text-black rounded-b-[40px] relative "
        >
          <span className="border-l-[#000]">
            ساعت: {hours[selectedTime[0]]}:00 تا {hours[selectedTime[1]]}:00
          </span>
          <span>{dates[selectedDate]}</span>
        </div>
      </div>

      <button
        onClick={() => navigate("/selectTabel")}
        className="text-white bg-[#F87A08] border-2 rounded-[50px] px-6 py-3 w-[90%]"
      >
        برگزیدن
      </button>
    </div>
  );
};

export default TimeBtn;
