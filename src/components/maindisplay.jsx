import { Link, Route, Routes } from "react-router-dom";
import { Dairy } from "./dairy";
import "./maindisplay.css";
import { Topup } from "./top-up";
import { Rate } from "./Rate";
import { Dash } from "./dash";
import { useState } from "react";
import { CircularProgress } from "./CircularProgress";

export function Maindisplay() {

  const [pyroxene, setPyroxene] = useState(0); // เพชรกาชา
  const [roll, setRoll] = useState(0); // โรลกาชา : เพชรกาชา/120
  const [quantityDay, setQuantityday] = useState(0);
  const pyroxeneGoat = roll*120;
  const [arenaReward, setArenaReward] = useState(45); // เพชรจาก Arena
  const [ishalfmonthpass, setishalfMonthpass] = useState(false);
  const [isfullmonthpass, setisfullMonthpass] = useState(false);
  // จำนวนวันในหน้า Dairy เอามาคูณกับเพชรที่ได้ต่อวัน
  const amountDay = quantityDay  * 180;
  // Battle Pass รายเดือน แบ่งเป็น 2 Pack
  // Halfmonth
  const halfmouthPyroxene = ishalfmonthpass ? 90 : 0;
  // Fullmonth
  const fullmouthPyroxene = isfullmonthpass ? 180 : 0;

  // เพชรรวมทั้งหมด (ในปัจจุบัน)
  const totalPyroxene = Number(pyroxene) + Number(amountDay) + Number(arenaReward * quantityDay);
;
  //////////////////////////////////////////////////////////////////

  const percentage = pyroxeneGoat > 0 ? (Number(totalPyroxene) / pyroxeneGoat) * 100 : 0;


  return (
    // ส่วนหน้าจอหลัก
    <div className="main-dis">
      {/* ช่วงบน */}
      <div id="amount">
        <div className="flex flex-col items-center">
          <p className="thai">ปัจจุบัน</p>
            <input type="number" placeholder="กรอกจำนวน..." value={pyroxene} onChange={(e)=>setPyroxene(Number(e.target.value))}
            className="eng rounded-2xl w-20 mt-2"/>
        </div>
        <div className="flex flex-col items-center">
          <p className="thai">เป้าหมาย</p>
          <input type="number" placeholder="กรอกจำนวน..." value={roll} onChange={(e)=>setRoll(Number(e.target.value))}
            className="eng rounded-2xl w-20 mt-2"/>
        </div>
      </div>
      {/* <button className="eng bg-slate-500 rounded-2xl px-2 py-1 text-yellow-200" type="submit">Save</button> */}
      <div className="progress-bg bg-white shadow-md shadow-black-500">
        <p className="thai pt-[3%] pl-[3%]">ความคืบหน้า : ปัจจุบัน {totalPyroxene}</p>
        <div className="rounded-xl w-[90%] h-[65%] mx-[5%] flex items-center justify-center">
          <CircularProgress 
            percentage={percentage} 
            size={150} // คุณสามารถปรับขนาดได้ตามต้องการ
            strokeWidth={14} // ปรับความหนาเส้นได้
            thaiFontClass="thai" // ส่งชื่อคลาสฟอนต์ (จาก CSS) เข้าไป
          />
        </div>
        <p className="thai text-center pb-[3%] pt-[2%] my-[3%]">เป้าหมายเท่ากับ <strong><mark>{roll} roll หรือ {pyroxeneGoat} {fullmouthPyroxene} {halfmouthPyroxene}</mark></strong></p>
      </div>
      <div className="bg-white mt-4 h-[80%] w-[90%] rounded-[6px] flex flex-col justify-center">
        {/* ส่วนหัวข้อเลือก Page */}
        <div className="section h-[20%] w-[95%] mt-4 flex justify-center">
          <Link to="/" className="section-text">Daily</Link>
          <Link to="/topup" className="section-text">Top-Up</Link>
          <Link to="/rate" className="section-text">Rate</Link>
          <Link to="/dash" className="section-text">Dash</Link>    
        </div>    
        {/* พื้นที่ Page */}
        <Routes>
          {/* ไปยังหน้า Dairy วืดๆ */}
          <Route path="/*" element={<Dairy 
          arenaReward={arenaReward} 
          setArenaReward={setArenaReward} 
          ishalfmonthpass={ishalfmonthpass} 
          setishalfMonthpass={setishalfMonthpass} 
          quantityDay={quantityDay} 
          setQuantityday={setQuantityday} 
          isfullmonthpass={isfullmonthpass} 
          setisfullMonthpass={setisfullMonthpass} />}/>

          {/* ไปยังหน้า Top-up วืดๆ */}
          <Route path="/topup" element={<Topup />} />

          {/* ไปยังหน้า Rate วืดๆ */}
          <Route path="/rate" element={<Rate />} />

          {/* ไปยังหน้า Dash วืดๆ */}
          <Route path="/dash" element={<Dash pyroxene={pyroxene}/>} />
        </Routes>
      </div>     
    </div>
  );
}
