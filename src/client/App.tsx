import React from "react";

export const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-indigo-500 text-white font-bold rounded-md border shadow-md p-10 text-center">
        <div className="text-6xl">👋</div>
        <div> TypeScript, React, Tailwind</div>

        <div className="text-sm">
          <a href="https://github.com/drieaugu" className="underline">
            Dries Augustyns
          </a>
        </div>
      </div>
    </div>
  );
};
