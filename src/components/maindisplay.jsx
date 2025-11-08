import { Link, Route, Routes } from "react-router-dom";
import { Dairy } from "./dairy";
import "./maindisplay.css";
import { Topup } from "./top-up";
import { Rate } from "./Rate";
import { Dash } from "./dash";
import { useState, useEffect, useMemo } from "react";
import { CircularProgress } from "./CircularProgress";
import { Toupitems } from "./topupitems"; 

const myProducts = [
  {
    id: 1,
    name: "แพ็กเกจ AP 2 สัปดาห์",
    price: 99,
    image: "PackageAP2week.png",
    pyroxene: 176,
  },
    {
    id: 2,
    name: "เพชรฟ้า x 60",
    price: 35,
    image: "Pyroxenex60.png",
    pyroxene: 60,
  },
  {
    id: 3,
    name: "เพชรฟ้า x 179",
    price: 99,
    image: "Pyroxenex179.png",
    pyroxene: 179,
  },
  {
    id: 4,
    name: "เพชรฟ้า x 420",
    price: 249,
    image: "Pyroxenex420.png",
    pyroxene: 420,
  },
  {
    id: 5,
    name: "เพชรฟ้า x 660",
    price: 349,
    image: "Pyroxenex660.png",
    pyroxene: 660,
  },
  {
    id: 6,
    name: "เพชรฟ้า x 1,350",
    price: 699,
    image: "Pyroxenex1,350.png",
    pyroxene: 1350,
  },
  {
    id: 7,
    name: "เพชรฟ้า x 2,300",
    price: 1150,
    image: "Pyroxenex2,300.png",
    pyroxene: 2300,
  },

  {
    id: 8,
    name: "เพชรฟ้า x 4,800",
    price: 2300,
    image: "Pyroxenex4,800.png",
    pyroxene: 4800,
  },
  {
    id: 9,
    name: "เพชรฟ้า x 6,600",
    price: 2300,
    image: "Pyroxenex6,600.png",
    pyroxene: 6600,
  },
  {
    id: 10,
    name: "แพ็กเกจอุปกรณ์รายสัปดาห์ VII",
    price: 429,
    image: "PackageEquipmentVII.png",
    pyroxene: 784,
  },
  {
    id: 11,
    name: "แพ็กรายงานสำหรับคุณครูมือใหม่ II",
    price: 99,
    image: "NewsenseiII.png",
    pyroxene: 192,
  },
    {
    id: 12,
    name: "แพ็กรายงานรายสัปดาห์ II",
    price: 429,
    image: "NewsenseiII.png",
    pyroxene: 784,
  },
  {
    id: 13,
    name: "แพ็กรายงานรายสัปดาห์ VI",
    price: 429,
    image: "PackageEquipmentVI.png",
    pyroxene: 784,
  },
  {
    id: 14,
    name: "แพ็กรายงานรายสัปดาห์ V",
    price: 429,
    image: "PackageEquipmentV.png",
    pyroxene: 784,
  },
  {
    id: 15,
    name: "แพ็กเกจสร้างเฟอร์นิเจอร์รายเดือน",
    price: 429,
    image: "Package_Ferniture_Month.png",
    pyroxene: 890,
  },
  {
    id: 16,
    name: "แพ็กเกจสร้างของขวัญรายเดือน",
    price: 349,
    image: "Package_Gift_Month.png",
    pyroxene: 660,
  },
  {
    id: 17,
    name: "แพ็กรายงานรายสัปดาห์ IV",
    price: 429,
    image: "PackageEquipmentIV.png",
    pyroxene: 784,
  },
  {
    id: 18,
    name: "แพ็กรายงานรายสัปดาห์ III",
    price: 429,
    image: "PackageEquipmentIII.png",
    pyroxene: 784,
  },
  {
    id: 19,
    name: "แพ็กรายงานรายสัปดาห์ I",
    price: 249,
    image: "PackageEquipmentI.png",
    pyroxene: 392,
  },
];

// -----------------------------------------------------------------
// Localstorage Zone
// -----------------------------------------------------------------
const getInitialState = () => {

  const savedData = localStorage.getItem('blueArchivePlannerData');
  
  // 2. ถ้าเจอ (ไม่ใช่ null)
  if (savedData) {
    console.log("พบข้อมูลที่บันทึกไว้! กำลังโหลด...");
    return JSON.parse(savedData);
  }
  

  console.log("ไม่พบข้อมูล... เริ่มต้นใหม่");
  return {
    pyroxene: 0,
    roll: 0,
    quantityDay: 0,
    arenaReward: 45,
    ishalfmonthpass: false,
    isfullmonthpass: false,
    cart: [],
    bossTasks: [],
  };
};

// -----------------------------------------------------------------

export function Maindisplay() {

  const initialState = getInitialState();

  // ดึงมาจาก initialState ที่โหลดมา
  const [products] = useState(myProducts);
  const [cart, setCart] = useState(initialState.cart);

  // const [products] = useState(myProducts);
  // const [cart, setCart] = useState([]);

    const addToCart = (product) =>
    {
        setCart((prevCart) => 
            {
        const existItem = prevCart.find((item) => item.id === product.id);

        if(existItem) //Updated item
          {
            console.log("เพิ่มจากเดิม");
            return prevCart.map((item) =>
              item.id === product.id ? {...item, quantity: item.quantity + 1} : item );
          }
        else //New item
          {
            
            console.log("มาใหม่");
            return [...prevCart, {...product, quantity: 1}];
          }
    });
}
  const removeFromCart = (product) => 
    {
      setCart((prevCart) => 
      {
        const existItem = prevCart.find((item) => item.id === product.id);

        if(existItem.quantity === 1)
          {
            return prevCart.filter((item) => item.id === product.id)
          }
        else
          {
            return prevCart.map((item) => item.id === product.id ? {...item, quantity: item.quantity -1} : item)
          }
      });
    }
    const clearItemFromCart = (product) => 
      {
        setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
      }
      const totalPrice = useMemo(() => {
      return cart.reduce((total, item) => total + item.pyroxene * item.quantity, 0);
    });
    const totalItems = useMemo(() => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [bossTasks, setBossTasks] = useState(initialState.bossTasks);

  // const [bossTasks, setBossTasks] = useState([]);

  const addBossTask = (taskData) => {
    const newTask = {
      id: Date.now(), 
      ...taskData,
      isChecked: false, 
    };
    setBossTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const removeBossTask = (taskId) => {
    setBossTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleBossTaskCheck = (taskId) => {
    setBossTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
      )
    );
  };

  // [ใหม่!] คำนวณ Pyroxene โบนัสจากบอส (1,600 ต่องาน)
  const bossTaskBonus = useMemo(() => {
    const checkedTasks = bossTasks.filter((task) => task.isChecked).length;
    return checkedTasks * 1600;
  }, [bossTasks]); // คำนวณใหม่ทุกครั้งที่ bossTasks เปลี่ยน

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [pyroxene, setPyroxene] = useState(initialState.pyroxene);
  const [roll, setRoll] = useState(initialState.roll);
  const [quantityDay, setQuantityday] = useState(initialState.quantityDay);
  const pyroxeneGoat = roll*120;
  const [arenaReward, setArenaReward] = useState(initialState.arenaReward);
  const [ishalfmonthpass, setishalfMonthpass] = useState(initialState.ishalfmonthpass);
  const [isfullmonthpass, setisfullMonthpass] = useState(initialState.isfullmonthpass);

  // const [pyroxene, setPyroxene] = useState(0); // เพชรกาชา
  // const [roll, setRoll] = useState(0); // โรลกาชา : เพชรกาชา/120
  // const [quantityDay, setQuantityday] = useState(0);
  // const pyroxeneGoat = roll*120;
  // const [arenaReward, setArenaReward] = useState(45); // เพชรจาก Arena
  // const [ishalfmonthpass, setishalfMonthpass] = useState(false);
  // const [isfullmonthpass, setisfullMonthpass] = useState(false);
  // จำนวนวันในหน้า Dairy เอามาคูณกับเพชรที่ได้ต่อวัน
  const amountDay = quantityDay  * 180;
  // Battle Pass รายเดือน แบ่งเป็น 2 Pack
  // Halfmonth 
  const halfmouthPyroxene = ishalfmonthpass ? 20 : 0;
  const halfmouthPyroxene_OneTime = ishalfmonthpass ? 176 : 0;
  // Fullmonth
  const fullmouthPyroxene = isfullmonthpass ? 40 : 0;
  const fullmouthPyroxene_OneTime = isfullmonthpass ? 352 : 0;

  // เพชรรวมทั้งหมด (ในปัจจุบัน)
  const totalPyroxene = 
      Number(pyroxene) +                         // 1. เพชรตอนนี้
      Number(amountDay) +                         // 2. เพชรจากประจำวัน 180 ต่อวัน
      Number(arenaReward * quantityDay) +         // 3. เพชรจากอารีหัว...น่าเว่ย (x * วัน)
      Number(quantityDay * halfmouthPyroxene) +   // 4. พาสแพ็กเล็ก 20 ต่อวัน
      Number(quantityDay * fullmouthPyroxene) +   // 5. พาสแพ็กใหญ่ 40 ต่อวัน
      Number(totalPrice) +                        // 6. เพชรจากตะกร้า (Top-up)
      Number(halfmouthPyroxene_OneTime) +         // 7. แรกเข้าแพ็กเล็ก (176)
      Number(fullmouthPyroxene_OneTime) +          // 8. แรกเข้าแพ็กใหญ่ (352)
      Number(bossTaskBonus);
;
  //////////////////////////////////////////////////////////////////

  const percentage = pyroxeneGoat > 0 ? (Number(totalPyroxene) / pyroxeneGoat) * 100 : 0;

  // -----------------------------------------------------------------
  // ส่วนบันทึกข้อมูล
  // -----------------------------------------------------------------
  useEffect(() => {
    
    // 2. จับข้อมูลสำคัญ 8 อย่าง
    const saveData = {
      pyroxene,
      roll,
      quantityDay,
      arenaReward,
      ishalfmonthpass,
      isfullmonthpass,
      cart,
      bossTasks,
    };
    
    localStorage.setItem('blueArchivePlannerData', JSON.stringify(saveData));
    console.log("บันทึกลง LocalStorage");

  }, [ //ข้อมูลสำคัญ 8 อย่าง
    pyroxene,
    roll,
    quantityDay,
    arenaReward,
    ishalfmonthpass,
    isfullmonthpass,
    cart,
    bossTasks
  ]);

  return (
    // ส่วนหน้าจอหลัก
    <div className="main-dis">
      {/* ช่วงบน */}
      <div id="amount">
        <div className="flex flex-col items-center">
          <p className="thai">เพชรปัจจุบัน</p>
            <input type="number" placeholder="กรอกจำนวน..." value={pyroxene} onChange={(e)=>setPyroxene(Number(e.target.value))}
            className="eng rounded-2xl w-20 mt-2"/>
        </div>
        <div className="flex flex-col items-center">
          <p className="thai">โรลเป้าหมาย</p>
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
        <p className="thai text-center pb-3 pt-2 my-3">เป้าหมายเท่ากับ <strong><mark>{roll} roll หรือ {pyroxeneGoat} </mark></strong></p>
      </div>
      <div className="bg-white mt-4 h-[100%] w-[90%] rounded-[6px] flex flex-col justify-center">
        {/* ส่วนหัวข้อเลือก Page */}
        <div className="section h-[1.8%] w-[95%] mt-1 flex justify-center">
          <Link to="/" className="section-text">Daily</Link>
          <Link to="/topup" className="section-text">Top-Up</Link>
          <Link to="/rate" className="section-text">Rate</Link>
          <Link to="/dash" className="section-text">Dash</Link>    
        </div>         
        <Toupitems packProducts={cart}
                   totalPrice={totalPrice}
                   totalItems={totalItems}
                   onAddToCart={addToCart}
                   onRemoveFromCart={removeFromCart}
                   onClearItem={clearItemFromCart}/>
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
          <Route path="/topup" element={<Topup products={products} onAddToCart = {addToCart}/>} />

          {/* ไปยังหน้า Rate วืดๆ */}
          <Route path="/rate" 
          element={<Rate tasks={bossTasks}
          onAddTask={addBossTask}
          onRemoveTask={removeBossTask}
          onToggleTask={toggleBossTaskCheck}/>} />

          {/* ไปยังหน้า Dash วืดๆ */}
          <Route path="/dash" element={<Dash 
          totalPyroxene={totalPyroxene}
          pyroxeneGoat={pyroxeneGoat}
          percentage={percentage}
  
          basePyroxene={pyroxene}
          dailyBonus={amountDay + (arenaReward * quantityDay)}
          passBonus={(quantityDay * halfmouthPyroxene) + (quantityDay * fullmouthPyroxene) + halfmouthPyroxene_OneTime + fullmouthPyroxene_OneTime}
          topUpBonus={totalPrice}
          bossBonus={bossTaskBonus}
/>} />
        </Routes>
      </div>     
    </div>
  );
}
