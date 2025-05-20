import Slider from "rc-slider";
import "rc-slider/assets/index.css";

export const hours = Array.from({ length: 16 }, (_, i) => i + 10);

const TimeSlider = ({ value, onChange }) => {
  return (
    <div className="h-[200px] my-5 mx-10">
      <Slider
        vertical
        range
        value={value}
        onChange={onChange}
        min={0}
        max={hours.length - 1}
        marks={hours.reduce((acc, h, i) => {
          if (i % 2 === 0) acc[i] = `${h}:00`;
          return acc;
        }, {})}
        step={1}
        trackStyle={{
          backgroundColor: "#F87A08",
          width: "15px",
          left: 13,
        }}
        railStyle={{
          backgroundColor: "#ccc",
          opacity: "20%",
          width: "15px",
          height: "250px",
          left: 13,
          border: "0.3px solid #000",
          boxShadow: "-4px 4px 4px 3px #00000040 inset",
        }}
        handleStyle={[
          {
            height: 30,
            width: 30,
            boxShadow: "none",
            outline: "none",
            border: "3px solid #F87A08",
            background: "linear-gradient(180deg, #FFFBF8 100%, #B0A6A5 0%)",
            borderRadius: "9999px",
            color: "white",
            position: "absolute",
            right: "-20px",
            fontSize: 10,
            textAlign: "center",
          },
          {
            height: 30,
            width: 30,
            boxShadow: "none",
            outline: "none",
            border: "3px solid #F87A08",
            background: "linear-gradient(180deg, #FFFBF8 100%, #B0A6A5 0%)",
            borderRadius: "9999px",
            color: "white",
            position: "absolute",
            right: "-20px",
            fontSize: 10,
            textAlign: "center",
          },
        ]}
      />
    </div>
  );
};

export default TimeSlider;
