import * as React from "react";
import "../globals.css"
function LeaveGroupButton({ imageSrc, text }) {
  return (
    <div className="flex gap-1.5 px-2.5 py-2 text-base font-medium bg-white rounded border border-solid border-neutral-400 text-neutral-500">
      <img loading="lazy" src={imageSrc} alt="" className="shrink-0 aspect-square w-[22px]" />
      <div>{text}</div>
    </div>
  );
}

function MyComponent() {
  const buttonData = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ec80e6a917804eac891a06369757fff4349368825af9fc7d10481a0db7735a4?apiKey=7255d85a71e84b389c79f8c733a77483&",
      text: "Leave Group"
    }
  ];

  return (
    <>
      {buttonData.map((button, index) => (
        <LeaveGroupButton key={index} imageSrc={button.imageSrc} text={button.text} />
      ))}
    </>
  );
}

export default MyComponent;