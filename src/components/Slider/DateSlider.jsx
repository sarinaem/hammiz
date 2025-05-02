// ✅ DateSlider.jsx
import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { toJalaali } from "jalaali-js";

export const getJalaliDays = () => {
  const today = new Date();
  const days = [];
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

  for (let i = 0; i < 31; i++) {
    const next = new Date();
    next.setDate(today.getDate() + i);
    const { jm, jd } = toJalaali(
      next.getFullYear(),
      next.getMonth() + 1,
      next.getDate()
    );
    days.push(`${jd} ${months[jm - 1]}`);
  }

  return days;
};

const DateSlider = ({ value, onChange }) => {
  const dates = getJalaliDays();

  return (
    <div className="h-[200px]">
      <Slider
        vertical
        min={0}
        max={dates.length - 1}
        value={value}
        onChange={onChange}
        marks={{ [value]: dates[value] }}
        // {dates.reduce((acc, d, i) => {
        //   if (i % 3 === 0) acc[i] = d;
        //   return acc;
        // }, {})}
        step={1}
        railStyle={{
          backgroundColor: "#ccc",
          opacity: "20%",
          width: "10px",
          height: "250px",
          left: 13,
          border: "0.3px solid #000",
          boxShadow: "-4px 4px 4px 3px #00000040 inset",
        }}
        included={false}
        handleStyle={{
          height: 30,
          width: 30,
          boxShadow: "none",
          outline: "none",
          border: "3px solid #F87A08",
          background: "linear-gradient(180deg, #FFFBF8 100%, #B0A6A5 0%)",
          borderRadius: "9999px",
          position: "absolute",
          right: "-20px",
        }}
      />
    </div>
  );
};

export default DateSlider;
