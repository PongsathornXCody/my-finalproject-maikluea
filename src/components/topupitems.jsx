import { useState } from "react";



const myProducts = [
  {
    id: 1,
    name: "แพ็กเกจ AP 2 สัปดาห์",
    price: 99,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 176,
  },
  {
    id: 2,
    name: "เพชรฟ้า x 60",
    price: 35,
    image: "https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-6/480909501_1167112814772952_7156737523084061059_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HKnzlyCZIJkQ7kNvwHT99RI&_nc_oc=AdkftuYOk5X9MUfuhmaVGEjspsygxntONc8QleI3fB_j2oTxmzJHXt3KpOGtqOXKCHI&_nc_zt=23&_nc_ht=scontent.fbkk15-1.fna&_nc_gid=42X-G-ZoTYsqAWS3N8qECw&oh=00_AffueonkUSMLDWdtKTd4Xj9VjgyJaXgYzooS8J0hY_ISMA&oe=6905066B",
    pyroxene: 60,
  },
  {
    id: 3,
    name: "เพชรฟ้า x 179",
    price: 99,
    image: "https://cdn-ildplgb.nitrocdn.com/IsDIEVbKqjLKLwSjgUBetWWfJLAUdaLp/assets/images/optimized/rev-f28e55d/www.thammculture.com/wp-content/uploads/2022/03/Untitled-177.jpg",
    pyroxene: 179,
  },
  {
    id: 4,
    name: "เพชรฟ้า x 420",
    price: 249,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 420,
  },
  {
    id: 5,
    name: "เพชรฟ้า x 660",
    price: 349,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 660,
  },
  {
    id: 6,
    name: "เพชรฟ้า x 1,350",
    price: 699,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 1350,
  },
  {
    id: 7,
    name: "เพชรฟ้า x 2,300",
    price: 1150,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 2300,
  },

  {
    id: 8,
    name: "เพชรฟ้า x 4,800",
    price: 2300,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 4800,
  },
  {
    id: 9,
    name: "เพชรฟ้า x 6,600",
    price: 2300,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 6600,
  },
  {
    id: 10,
    name: "แพ็กเกจอุปกรณ์รายสัปดาห์ VII",
    price: 429,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 784,
  },
  {
    id: 11,
    name: "แพ็กรายงานสำหรับคุณครูมือใหม่ II",
    price: 99,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 192,
  },
    {
    id: 12,
    name: "แพ็กรายงานรายสัปดาห์ II",
    price: 429,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 784,
  },
  {
    id: 13,
    name: "แพ็กรายงานรายสัปดาห์ VI",
    price: 429,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 784,
  },
  {
    id: 14,
    name: "แพ็กรายงานรายสัปดาห์ V",
    price: 429,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 784,
  },
  {
    id: 15,
    name: "แพ็กเกจสร้างของขวัญรายเดือน",
    price: 349,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 660,
  },
  {
    id: 16,
    name: "แพ็กรายงานรายสัปดาห์ IV",
    price: 429,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 784,
  },
  {
    id: 17,
    name: "แพ็กรายงานรายสัปดาห์ III",
    price: 429,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 784,
  },
  {
    id: 18,
    name: "แพ็กรายงานรายสัปดาห์ II",
    price: 429,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 784,
  },
  {
    id: 19,
    name: "แพ็กรายงานรายสัปดาห์ I",
    price: 249,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
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