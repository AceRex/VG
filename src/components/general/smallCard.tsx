import React from "react";

function SmallCard({
  bgcolor,
  btnColor,
  textColor,
  heading,
  btnText,
  btnTextColor,
}: {
  bgcolor: string;
  btnColor: string;
  textColor: string;
  heading: string;
  btnText: string;
  btnTextColor?: string;
}) {
  return (
    <div className={`my-2 rounded-md p-4 px-4 ${bgcolor} ${textColor}`}>
      <div className="h-24">
        <h2 className="text-sm font-semibold capitalize">{heading}</h2>
        <p className="text-xs font-light my-2">
          Build, personalize, and optimize your itineraries with our trip
          planner.
        </p>
      </div>

      <button
        className={`w-full text-xs rounded-md capitalize p-3 ${btnTextColor} ${btnColor}`}
      >
        {btnText}
      </button>
    </div>
  );
}

export default SmallCard;
