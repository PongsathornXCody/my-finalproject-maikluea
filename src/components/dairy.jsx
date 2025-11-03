import picPyronxene from "../assets/Pyroxene.png";
import arenaIcon from "../assets/BlueArchive-ArenaIcon.png";
import { useState } from "react";

export function Dairy({arenaReward, setArenaReward, ismonthPass, setisMonthpass}) {

  const handleArenaChange = (e) => {
    setArenaReward(parseInt(e.target.value, 10));
  };

  const handleMonthPass = (e) => {
    setisMonthpass(e.target.checked);
  };

  return (
    <div className="rounded-xl w-[90%] h-[100%] mx-[5%] my-[5%] shadow-lg shadow-teal-200 flex flex-col items-start">
      <div className="flex">
        <img
          src={picPyronxene}
          alt="picPyroxene"
          width="60rem"
          height="auto"
          className="transform rotate-[-25deg]"
        />
        <p className="thai mt-3">จำนวน</p>
        <input
          type="number"
          className="eng rounded-2xl w-[70px] h-6 mt-3 ml-3 p-4 bg-slate-500 text-yellow-400 text-center"
        />
        <p className="thai mt-3 ml-3">วัน</p>
      </div>
      <div className="flex w-[100%] mx-auto">
        <img src={arenaIcon} alt="arenaIcon" width="60rem" height="auto" />
        <p className="thai mt-4 mr-3">อารีน่า</p>
        <select
          className="eng bg-slate-500 mt-4 text-white rounded-2xl text-center"
          value={arenaReward}
          onChange={handleArenaChange}
        >
          <option value={45} className="text-yellow-400">
            Daily Rank 1
          </option>
          <option value={40}>Daily Rank 2</option>
          <option value={35}>Daily Rank 3-10</option>
          <option value={30}>Daily Rank 11-100</option>
          <option value={25}>Daily Rank 101-200</option>
          <option value={20}>Daily Rank 201-500</option>
        </select>
      </div>
      <div className="flex mt-4 ml-[18%]">
        <p className="thai text-black">ได้รับ:</p>
        <p className="eng mx-2 text-black font-bold">{arenaReward}</p>
        <p className="eng text-black">pyroxene</p>
      </div>
      <div className="flex mt-2">
        <img src={arenaIcon} alt="arenaIcon" width="60rem" height="auto" />
        <p className="thai text-black mt-4">รายเดือน: ครึ่งเดือน</p>
        <input className="ml-2 mt-2" type="checkbox" checked={ismonthPass} onChange={handleMonthPass}/>
      </div>
    </div>
  );
}
