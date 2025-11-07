import { useState } from "react";

const myProducts = [
  {
    id: 1,
    name: "แพ็กเกจ AP 2 สัปดาห์",
    price: 99,
    image: "Package AP 2 week.png",
    pyroxene: 176,
  },
  {
    id: 2,
    name: "เพชรฟ้า x 60",
    price: 35,
    image: "Pyroxene x 60.png",
    pyroxene: 60,
  },
  {
    id: 3,
    name: "เพชรฟ้า x 179",
    price: 99,
    image: "Pyroxene x 179.png",
    pyroxene: 179,
  },
  {
    id: 4,
    name: "เพชรฟ้า x 420",
    price: 249,
    image: "Pyroxene x 420.png",
    pyroxene: 420,
  },
  {
    id: 5,
    name: "เพชรฟ้า x 660",
    price: 349,
    image: "Pyroxene x 660.png",
    pyroxene: 660,
  },
  {
    id: 6,
    name: "เพชรฟ้า x 1,350",
    price: 699,
    image: "Pyroxene x 1,350.png",
    pyroxene: 1350,
  },
  {
    id: 7,
    name: "เพชรฟ้า x 2,300",
    price: 1150,
    image: "Pyroxene x 2,300.png",
    pyroxene: 2300,
  },

  {
    id: 8,
    name: "เพชรฟ้า x 4,800",
    price: 2300,
    image: "Pyroxene x 4,800.png",
    pyroxene: 4800,
  },
  {
    id: 9,
    name: "เพชรฟ้า x 6,600",
    price: 2300,
    image: "Pyroxene x 6,600.png",
    pyroxene: 6600,
  },
  {
    id: 10,
    name: "แพ็กเกจอุปกรณ์รายสัปดาห์ VII",
    price: 429,
    image: "Package Equipment VII.png",
    pyroxene: 784,
  },
  {
    id: 11,
    name: "แพ็กรายงานสำหรับคุณครูมือใหม่ II",
    price: 99,
    image: "Newsensei II.png",
    pyroxene: 192,
  },
    {
    id: 12,
    name: "แพ็กรายงานรายสัปดาห์ II",
    price: 429,
    image: "Newsensei II.png",
    pyroxene: 784,
  },
  {
    id: 13,
    name: "แพ็กรายงานรายสัปดาห์ VI",
    price: 429,
    image: "Package Equipment VI.png",
    pyroxene: 784,
  },
  {
    id: 14,
    name: "แพ็กรายงานรายสัปดาห์ V",
    price: 429,
    image: "Package Equipment V.png",
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
    image: "Package Equipment IV.png",
    pyroxene: 784,
  },
  {
    id: 18,
    name: "แพ็กรายงานรายสัปดาห์ III",
    price: 429,
    image: "Package Equipment III.png",
    pyroxene: 784,
  },
  {
    id: 19,
    name: "แพ็กรายงานรายสัปดาห์ I",
    price: 249,
    image: "Package Equipment I.png",
    pyroxene: 392,
  },
];





export function Toupitems(){
    
    const [products] = useState(myProducts);
    const [cart, setCart] = useState([]);

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














    
    return(
        <></>
    );
}