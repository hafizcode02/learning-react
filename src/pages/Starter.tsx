import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import CountButton from "../components/CountButton";
import NavButton from "../components/NavButton";

function Starter() {
  const [count, setCount] = useState(0); // State for the counter

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Logo Section */}
      <div className="flex space-x-4 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="hover:opacity-80 transition"
        >
          <img src={reactLogo} className="h-16 w-16" alt="React logo" />
        </a>
      </div>

      {/* Title Section */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Vite + React + Tailwind
      </h1>

      {/* Card Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center">
          <CountButton
            onClick={() => setCount(() => count + 1)}
            count={count}
          />{" "}
          {/* <button
            onClick={() => setCount((count) => count + 1)}
            className={`px-4 py-2 rounded-lg transition ${
              count >= 20
                ? "bg-green-500 hover:bg-green-600"
                : count >= 10
                ? "bg-red-500 hover:bg-red-600"
                : "bg-blue-500 hover:bg-blue-600"
            } text-white`}
          >
            Click Me
          </button> */}
          <p className="content-center">Counter: {count}</p>
        </div>

        <p className="text-gray-600 mt-4 mb-2">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
        <hr />
        <div className="flex mt-2">
          <NavButton urlTo="/Game" placeholder="Tic-Tac-Toe" />
          <NavButton urlTo="/" placeholder="Simple Card Generator" />
          <NavButton urlTo="/" placeholder="To-Do List" />
        </div>
      </div>

      {/* Footer Section */}
      <p className="text-sm text-gray-500">
        Click on the Vite and React logos to learn more,{" "}
      </p>
    </div>
  );
}

export default Starter;
