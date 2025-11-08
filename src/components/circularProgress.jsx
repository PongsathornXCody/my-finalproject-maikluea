import React from 'react';

/**
 * Component วงกลมแสดงความคืบหน้า
 * @param {number} percentage - ค่าเปอร์เซ็นต์ (เช่น 80)
 * @param {number} size - ขนาดของวงกลม (กว้าง x สูง)
 * @param {number} strokeWidth - ความหนาของเส้น
 * @param {string} thaiFontClass - (Optional) ชื่อคลาส CSS สำหรับฟอนต์ไทย (ถ้ามี)
 */
export function CircularProgress({ percentage = 0, size = 120, strokeWidth = 12, thaiFontClass = "thai" }) {
  // ค่า percentage ที่ปลอดภัย (ไม่เกิน 100% สำหรับการแสดงผล, แต่คำนวณจากค่าจริง)
  const displayPercentage = Math.round(percentage);
  // ค่า percentage สำหรับวาดเส้น (ไม่ให้เกิน 100)
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  // คำนวณคณิตศาสตร์ของ SVG
  const center = size / 2;
  const radius = center - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  
  // คำนวณส่วนของเส้นที่จะแสดง
  const offset = circumference - (clampedPercentage / 100) * circumference;

  return (
    // ใช้ relative เพื่อให้ text ลอยอยู่ตรงกลางได้
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      
      {/* SVG Container */}
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="transform -rotate-90 lg:size-auto">
        
        {/* 1. เส้นวงกลมพื้นหลัง (สีเทา) */}
        <circle
          className="text-gray-200" // ใช้สีเทาอ่อนจาก Tailwind
          stroke="currentColor"
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
        />
        
        {/* 2. เส้นวงกลมความคืบหน้า (สีเขียว/น้ำเงิน) */}
        <circle
          className="text-teal-500" // ใช้สี teal-500 จาก Tailwind (เข้ากับ shadow-teal-200)
          stroke="currentColor"
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset} // นี่คือหัวใจสำคัญที่ทำให้เส้นขยับตาม %
          strokeLinecap="round" // ทำให้ปลายเส้นมน
          style={{ transition: 'stroke-dashoffset 0.3s ease-out' }} // เพิ่ม animation
        />
      </svg>

      {/* 3. Text เปอร์เซ็นต์ตรงกลาง */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className={`${thaiFontClass} text-2xl font-bold text-teal-700`}>
          {`${displayPercentage}%`}
        </span>
      </div>
    </div>
  );
}