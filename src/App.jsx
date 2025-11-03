import { Routes, Route } from "react-router-dom";
import "./Stylesheet/Mystyle-1.css"; /* ดึงเอา CSS มาใช้งาน */
import Icon from "./assets/BlueArchiveIcon.png";
import { Maindisplay } from "./components/maindisplay";
import { FaExchangeAlt } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";


export default function App() {
  return (
    <div id="Screen">
      {/* Inner Embed CSS */}
      <style></style>

      {/* Top Bar */}
      <header className="topbar h-20">
          <div className="head-content flex p-4 items-center justify-between">
          <div className="leftside flex items-center"><img src={Icon} alt="Gameicon" width="40rem" height="auto"
          className="rounded-md"/>
          <p className="eng ml-2 opacity-55"><FaExchangeAlt />BlueArchive</p></div>
          <div className="rightside flex items-center"><input type="text" className="rounded-xl w-24"/>
          <p className="opacity-80 ml-2"><LuPencilLine /></p>
          </div>
          </div>
      </header>
      {/* หน้าจอหลัก */}
      <main>
        <Routes>
          <Route path="/*" element={<Maindisplay />} />
        </Routes>   
      </main>
    </div>
  );
}
