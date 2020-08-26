import React from 'react';

export const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="bg-indigo-500 text-white font-bold rounded-md border shadow-md p-10 text-center">
        <div className="text-6xl">👋</div>
        <div> TypeScript, React, Tailwind</div>

        <div className="text-sm pt-2">
          <a href="https://github.com/drieaugu" className="underline row-auto">
            Dries Augustyns
          </a>
        </div>
        <div className="text-sm pt-2">
          <a href="https://github.com/drieaugu/ts-react-tailwind" className="underline row-auto">
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};
