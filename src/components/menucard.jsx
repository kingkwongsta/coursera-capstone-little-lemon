import React from "react";

function MenuCard({ cardimg, menuitems, category }) {
  return (
    <div className="menu-card flex-auto bg-slate-200 max-w-[450px] p-5 mx-10 rounded-[20px] min-h-[580px] max-md:m-[10px] max-md:min-w-[450px]">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center font-[500] text-[25px] text-[#f4ce14] leading-[51px] mb-2">
          {category}
        </h2>
        <img
          className="rounded-[20px] max-h-[220px] min-w-[320px] max-w-[320px]"
          src={cardimg}
          alt="flight bgd"
        />
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
