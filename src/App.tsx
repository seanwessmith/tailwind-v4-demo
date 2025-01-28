import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-screen-xl mx-auto p-8 text-center">
      {/* Logo links */}
      <div className="flex justify-center gap-4">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="
              h-[6em]
              p-6
              will-change-[filter]
              transition-[filter]
              duration-300
              hover:[filter:drop-shadow(0_0_2em_#646cffaa)]
            "
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            alt="React logo"
            className="
              h-[6em]
              p-6
              will-change-[filter]
              transition-[filter]
              duration-300
              hover:[filter:drop-shadow(0_0_2em_#61dafbaa)]
              motion-safe:animate-[spin_20s_linear_infinite]
            "
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold mt-8">Vite + React</h1>

      {/* Card-like section */}
      <div className="p-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="py-2 px-4 bg-gray-200 rounded hover:bg-gray-300"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit{" "}
          <code className="bg-gray-100 text-slate-800 rounded px-1">
            src/App.tsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>

      {/* Info text */}
      <p className="text-blue-300">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
