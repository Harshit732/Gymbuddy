import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-h-[800px] mx-auto w-full p-4">
    
      <div className="flex flex-col gap-4">
      <p className="uppercase font-semibold text-4xl sm"> IT'S TIME TO GET</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
        Swole<span className="text-blue-400">normous</span>
      </h1>
      </div>
      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I may become{' '}
        <span className="text-blue-400 font-medium">
          unbelievably swolenormous{' '}
        </span>
        and accept all risks of becoming the local{' '}
        <span className="text-blue-400 font-medium">mass montrosity</span>,
        afflicted with severe body dismorphia, unable to fit through doors.
      </p>
      <button className="b1 rounded-md boder-blue-400 "><p>Accept and Begin</p></button>
    </div>
  );
}
