import { useState } from "react";



const myProducts = [
  {
    id: 1,
    name: "ส้มตำไทย",
    price: 45,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 100,
  },
  {
    id: 2,
    name: "ไก่ย่าง",
    price: 90,
    image: "https://scontent.fbkk15-1.fna.fbcdn.net/v/t39.30808-6/480909501_1167112814772952_7156737523084061059_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HKnzlyCZIJkQ7kNvwHT99RI&_nc_oc=AdkftuYOk5X9MUfuhmaVGEjspsygxntONc8QleI3fB_j2oTxmzJHXt3KpOGtqOXKCHI&_nc_zt=23&_nc_ht=scontent.fbkk15-1.fna&_nc_gid=42X-G-ZoTYsqAWS3N8qECw&oh=00_AffueonkUSMLDWdtKTd4Xj9VjgyJaXgYzooS8J0hY_ISMA&oe=6905066B",
    pyroxene: 100,
  },
  {
    id: 3,
    name: "ข้าวเหนียว",
    price: 10,
    image: "https://cdn-ildplgb.nitrocdn.com/IsDIEVbKqjLKLwSjgUBetWWfJLAUdaLp/assets/images/optimized/rev-f28e55d/www.thammculture.com/wp-content/uploads/2022/03/Untitled-177.jpg",
    pyroxene: 100,
  },
  {
    id: 4,
    name: "ข้าวมันไก่",
    price: 10,
    image: "https://www.unileverfoodsolutions.co.th/th/chef-inspiration/simple-tips-for-great-flavour/somtum-green-papaya-salad-recipes/jcr:content/parsys/content-aside-footer/tipsandadvice/image.img.jpg/1695118621402.jpg",
    pyroxene: 100,
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