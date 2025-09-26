import React from "react";

function LinkIcon({ link, children, className }) {
  return (
    <a
      href={link}
      target="_blank"
      className={`w-9 h-9 border-slate-300 border justify-center items-center flex rounded-md bg-white text-slate-300 hover:bg-primary hover:border-primary hover:text-white mx-2 ${className}`}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default LinkIcon;
