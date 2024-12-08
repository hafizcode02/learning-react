import React from "react";

const GameButton = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="w-16 h-16 shadow-md rounded-lg transition bg-gray-300 flex items-center justify-center text-2xl font-bold"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default GameButton;
