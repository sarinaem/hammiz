import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { toJalaali } from "jalaali-js";

const months = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export const getJalaliDays = () => {
  const today = new Date();
  const days = [];

  const todayJalali = toJalaali(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate()
  );
  const todayLabel = `${todayJalali.jd} ${months[todayJalali.jm - 1]}`;

  let todayIndex = 0;

  for (let i = 0; i < 31; i++) {
    const next = new Date();
    next.setDate(today.getDate() + i);
    const { jm, jd } = toJalaali(
      next.getFullYear(),
      next.getMonth() + 1,
      next.getDate()
    );
    const label = `${jd} ${months[jm - 1]}`;
    days.push(label);
    if (label === todayLabel) todayIndex = i;
  }

  return { days, todayIndex };
};

const DateLabels = ({ selectedIndex, days }) => {
  return (
    <div className="flex flex-col justify-center items-center h-[268px]  text-xs font-dana font-bold leading-[18px]">
      {days.map((date, i) => {
        const distance = Math.abs(i - selectedIndex);
        const isVisible = distance <= 1 || i === 0 || i === days.length - 1;

        return (
          <div
            key={i}
            className={`h-[calc(268px/31)] flex items-center justify-end transition-all duration-300 ${
              i === selectedIndex
                ? "text-[#525252]"
                : isVisible
                ? "text-[#525252] opacity-40"
                : "invisible"
            }`}
          >
            {date}
          </div>
        );
      })}
    </div>
  );
};

export default function DateSlider() {
  const { days, todayIndex } = getJalaliDays();
  const [selectedDate, setSelectedDate] = useState(todayIndex);

  return (
    <div className="flex items-center justify-between">
      <div className="h-[268px] relative">
        <Slider
          vertical
          min={0}
          max={days.length - 1}
          value={selectedDate}
          onChange={(val) => setSelectedDate(val)}
          // handle={(props) => <CustomHandle {...props} days={days} />}
          step={1}
          trackStyle={[
            {
              backgroundColor: "#F87A08",
              width: 14,
              left: "50%",
              transform: "translateX(-50%)",
            },
          ]}
          railStyle={{
            backgroundColor: "#fff",
            width: 14,
            left: "50%",
            transform: "translateX(-50%)",
            border: "0.3px solid #000",
            boxShadow: "-4px 4px 3px #00000040 inset",
          }}
          handleStyle={[
            {
              height: 30,
              width: 30,
              border: "3px solid #F87A08",
              marginBottom: "-6px",
              background:
                "linear-gradient(159.66deg, #B0A6A5 -6.86%, #FFFBF8 111.54%)",
              boxShadow:
                "1px 1px 1px 0px #0000001A inset, -1px -1px 1px 0px #FFFFFF",
              // background:
              //   "linear-gradient(to bottom, white, rgba(200, 200, 200, 0.9), #B8B8B8)",
              borderRadius: "50%",
              left: "-4px",
              transform: "none",
            },
          ]}
        />
      </div>
      <DateLabels selectedIndex={selectedDate} days={days} />
    </div>
  );
}
