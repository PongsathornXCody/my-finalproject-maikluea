import { useState } from "react";
import { BossTaskItem } from "./BossTaskItem"; 

// รายชื่อบอส
const bossOptions = [
  "Binah", "Chesed", "Shiro&Kuro", "Hieronymus",
  "KaitenFXMk.0", "Perorodzilla", "HOD", "Goz",
  "Gregorius", "Wakamo"
];


export function Rate({ tasks, onAddTask, onRemoveTask, onToggleTask }) {
  
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedBoss, setSelectedBoss] = useState(bossOptions[0]); // Binah เป็นค่าเริ่มต้น

  const handleAddClick = () => {
    //ถ้าไม่ได้เลือกวัน...ไมไม่เลือกว่ะมันก็เห็นๆอยู่
    if (!selectedDate) {
      alert("กรุณาดู...เอ่ยกรุณาเลือกวันที่ O_o");
      return;
    }
    
    onAddTask({
      date: selectedDate,
      boss: selectedBoss,
    });
    setSelectedDate(""); //เคลียร์วัน
  };

  return (
    <div className="rounded-xl w-[90%] h-full mx-[5%] my-[5%] shadow-lg shadow-teal-200 p-4">
      <div className="flex flex-col">
      <p className="eng text-xl font-bold">Boss Task</p>
      <span className="thai text-sm font-light  text-slate-300">*หมายเหตุจำนวน Pyroxene เป็นค่าจากแรงค์เฉลี่ย = Gold Rank</span>
      </div>
      
      
      <div className="eng bg-slate-100 shadow-md rounded-lg my-4 p-2 flex items-center gap-2 w-[100%] ">
        <label htmlFor="boss-date" className="eng font-semibold">Date:</label>
        <input 
          id="boss-date"
          type="date" 
          className="thai bg-white shadow-sm rounded-lg p-2 w-[10vh]"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
        {/* <label htmlFor="boss-select" className="eng font-semibold">Boss:</label> */}
        <select 
          id="boss-select"
          className="eng shadow-sm rounded-lg p-2 w-[10vh]"
          value={selectedBoss}
          onChange={(e) => setSelectedBoss(e.target.value)}
        >
          {bossOptions.map((bossName) => (
            <option key={bossName} value={bossName}>{bossName}</option>
          ))}
        </select>
        <button
          onClick={handleAddClick}
          className="flex ml-auto bg-green-500 hover:bg-green-600 p-2 rounded-lg items-center text-white text-sm mr-2"
        >
          Add
        </button>
      </div>

      {/* --- Boss List --- */}
      <div className="mt-6 space-y-4">
        {tasks.length === 0 ? (
          <p className="thai text-center text-gray-500">เพิ่ม Date และ Boss ได้ที่ด้านบท</p>
        ) : (
          tasks.map((task) => (
            <BossTaskItem
              key={task.id}
              task={task}
              onRemove={onRemoveTask}
              onToggle={onToggleTask}
            />
          ))
        )}
      </div>
    </div>
  );
}