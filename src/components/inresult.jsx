// src/components/Inresult.jsx
// (นี่คือไฟล์ที่สร้างขึ้นใหม่ โดยอิงจาก cartitem.jsx เดิม)

// เราจะใช้ text (+, -, x) แทน Icons ที่ไม่ได้ import มาในโปรเจกต์นี้
export function Inresult({ item, onAdd, onRemove, onClear }) {
  return (
    <div className="flex items-center gap-3 group p-2 bg-white rounded-lg shadow-sm">
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-md object-cover flex-shrink-0"
        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100'; }}
      />
      <div className="flex-grow min-w-0">
        <h4 className="font-semibold text-gray-800 truncate text-sm thai">
          {item.name}
        </h4>
        <p className="text-xs text-gray-600 eng">
          {item.pyroxene} Pyroxene
        </p>
      </div>
      
      {/* ส่วนควบคุมจำนวน (เหมือนใน cartitem.jsx) */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <button 
          onClick={() => onRemove(item)}
          className="p-1 w-5 h-5 flex items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-200"
          aria-label="ลบ 1 ชิ้น"
        >
          -
        </button>
        <span className="font-medium w-6 text-center text-gray-800" aria-label="จำนวน">
          {item.quantity}
        </span>
        <button 
          onClick={() => onAdd(item)}
          className="p-1 w-5 h-5 flex items-center justify-center rounded-full text-gray-600 transition-colors hover:bg-gray-200"
          aria-label="เพิ่ม 1 ชิ้น"
        >
          +
        </button>
      </div>
      
      {/* ปุ่มลบทั้งหมด (เหมือนใน cartitem.jsx) */}
      <button 
        onClick={() => onClear(item)} 
        className="text-gray-400 transition-colors hover:text-red-500 text-lg font-bold"
        title="ลบทั้งหมดออกจากตะกร้า"
        aria-label="ลบทั้งหมดออกจากตะกร้า"
      >
        ×
      </button>
    </div>
  );
}