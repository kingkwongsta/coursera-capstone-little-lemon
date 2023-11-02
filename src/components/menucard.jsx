import React from "react";

function MenuCard({ cardimg, menuitems, category }) {
  return (
    <div className="apps flex-auto bg-slate-200 max-w-[450px] p-5 mx-10 rounded-[20px] min-h-[580px]">
      <div className="flex flex-col justify-center">
        <h2 className="text-center font-[500] text-[25px] text-[#f4ce14] leading-[51px] mb-2">
          {category}
        </h2>
        <img
          className="rounded-[20px] flex-shrink-0 max-h-[300px]"
          src={cardimg}
          alt="flight bgd"
        />
        {/* <h2 className="absolute bottom-[110px] w-full text-center font-[500] text-[25px] leading-[51px] text-[#FFFFFF] z-10">
          {category}
        </h2> */}
      </div>
      <div className="menu-items flex justify-center text-center">
        <ul className="mt-5">
          {menuitems.map((item, index) => {
            return (
              <li key={index} className="text-[18px] my-[15px]">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MenuCard;
