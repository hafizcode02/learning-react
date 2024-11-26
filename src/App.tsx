import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

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
        <button
          onClick={() => setCount((count) => count + 1)}
          className={`px-4 py-2 rounded-lg transition ${
            count >= 20
              ? "bg-green-500 hover:bg-green-600"
              : count >= 10
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
        >
          Count is {count}
        </button>
        <p className="text-gray-600 mt-4">
          Edit <code className="bg-gray-200 px-1 rounded">src/App.tsx</code> and
          save to test HMR
        </p>
      </div>

      {/* Footer Section */}
      <p className="text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
