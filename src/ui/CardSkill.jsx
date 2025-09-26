import React from "react";
import LinkIcon from "./LinkIcon";

function CardSkill({ title, children }) {
  return (
    <div
      data-aos="fade-up"
      className="w-full px-4 p-5 mb-5 bg-white rounded-br-lg rounded-tl-lg hover:shadow-lg hover:scale-105 transition duration-300 group hover:animate__animated hover:animate__bounce border border-secondary/20 hover:border-white"
    >
      <div className="flex items-center ">
        <LinkIcon
          className={
            "group-hover:bg-primary group-hover:text-white group-hover:border-white "
          }
        >
          {children}
        </LinkIcon>
        <p className="font-medium text-base text-secondary group-hover:text-primary">
          {title}
        </p>
      </div>
    </div>
  );
}

export default CardSkill;
