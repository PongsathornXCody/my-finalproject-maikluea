// src/components/topupitems.jsx (อัปเดต)

import { useState } from "react";
import { BsCartCheckFill } from "react-icons/bs";
import { Inresult } from "./inresult"; // <-- ตรวจสอบว่า import ถูกต้อง

export function Toupitems({packProducts, totalPrice, totalItems, onAddToCart, onRemoveFromCart, onClearItem}){

    return(
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-3 thai">
          <BsCartCheckFill size={20} />
          ไอเทมที่เลือก ({totalItems} ชิ้น)
        </h2>
        
      {packProducts.length === 0 ? (
        <div className="text-center py-4">
          <p className="thai text-gray-500 text-md mt-4">ยังไม่มีไอเทม</p>
          <p className="thai text-gray-400 text-sm">เพิ่มไอเทมจากหน้า Top-Up</p>
        </div>
      ) : (
        <>
          <div className="space-y-3 max-h-[200px] overflow-y-auto pr-2">
            {packProducts.map((item) => (
              <Inresult 
                key={item.id}
                item={item}
                onAdd={onAddToCart}
                onRemove={onRemoveFromCart}
                onClear={onClearItem}
              />
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-lg font-bold text-gray-900">
              <span className="thai">Pyroxene รวมจาก Top-Up</span>
              <span className="eng">+{totalPrice.toFixed(0)}</span>
            </div>
          </div>
        </>
      )}
      </div>
    );
}