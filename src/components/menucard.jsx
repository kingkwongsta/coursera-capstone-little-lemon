import React from "react";

function MenuCard({ cardimg, menuitems, category }) {
  return (
    <div className="apps flex-auto bg-slate-200 max-w-[450px] p-5 mx-10 rounded-[20px] min-h-[566px]">
      <div className="relative flex justify-center">
        <img
          className="rounded-[20px] flex-shrink-0 max-h-[300px]"
          src={cardimg}
          alt="flight bgd"
        />
        <h2 className="absolute bottom-[110px] w-full text-center font-[500] text-[25px] leading-[51px] text-[#FFFFFF] z-10">
          {category}
        </h2>
      </div>
      <div className="menu-items flex justify-center">
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
