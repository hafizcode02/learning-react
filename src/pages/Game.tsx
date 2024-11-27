import React, { useState } from "react";

const Square = ({ ...props }: React.HTMLAttributes<HTMLButtonElement>) => {
  const [value, setValue] = useState(String);

  const clickHandler = () => {
    setValue("X");
  };

  return (
    <button
      className="w-12 h-12 m-1 shadow-md rounded-lg transition bg-gray-300"
      {...props}
      onClick={clickHandler}
    >
      {value}
    </button>
  );
};
function Game() {
  return (
    <div className="min-h-screen bg-gray-100 flex gap-10 items-center justify-center">
      <div className="flex flex-col"></div>
      <div className="flex flex-col">
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
        <div>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
}

export default Game;
