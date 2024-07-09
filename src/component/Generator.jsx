import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { WORKOUTS } from "./utils/swoldier";
import { SCHEMES } from "./utils/swoldier";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-5 p-auto">
      <div className="flex items-center justify-center gap-2">
        <p className="text-xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-lg sm:text-2xl md:text-3xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator() {
  const [showmodal, setshowmodal] = useState(false);
  const [poison, setPoison] = useState("individual");
  const [muscles, setMuscles] = useState([]);
  const [goal, setGoal] = useState("strength_power");
  function modalToggle() {
    setshowmodal(!showmodal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }
    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      return;
    }
    
    setMuscles([...muscles, muscleGroup]);
  }
  return (
    <SectionWrapper
      header={"generate your workout"}
      title={["It's", "huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your poison"}
        description={"Select the workout you wish to enjoy."}
      />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setPoison(type);
              }}
              className={
                "bg-slate-950 border  py-3 duration-200 hover:border-blue-600 rounded-lg " +
                (type === poison ? "border-blue-600" : "border-blue-400")
              }
              key={typeIndex}
            >
              <p className="capitalize">{type.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock on targets"}
        description={"Select the muscles judged for annhilation."}
      />
      <div className="bg-slate-950 border border-solid border-blue flex flex-col rounded-lg m-4">
        <button
          onClick={modalToggle}
          className="relative flex flex-col p-3 justify-center items-center"
        >
          <p>Select muscle groups</p>
          <i className="fa-solid absolute fa-caret-down absolute top-1/2 -translate-1/2 right-3"></i>
        </button>
        {showmodal && (
          <div className="flex flex-col px-3 pb-3">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {updateMuscles(muscleGroup)}}
                  className={"hover:text-blue-400 duration-200 "+ (muscles.includes(muscleGroup)? 'text-blue-400': '')}
                  key={muscleGroupIndex}
                >
                  <p className="uppercase">
                    {muscleGroup.replaceAll("_", " ")}
                  </p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Jaggernaut"}
        description={"Select your ultimate objective."}
      />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoal(scheme);
              }}
              className={
                "bg-slate-950 border  py-3 duration-200 hover:border-blue-600 rounded-lg " +
                (scheme === goal ? "border-blue-600" : "border-blue-400")
              }
              key={schemeIndex}
            >
              <p className="capitalize">{scheme.replaceAll("_", " ")}</p>
            </button>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
