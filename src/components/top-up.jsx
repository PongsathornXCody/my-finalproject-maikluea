import { BsCartCheckFill } from "react-icons/bs";

export function Topup({products}){
    return(
        <div className="rounded-xl w-[90%] h-[100%] mx-[5%] my-[5%] shadow-lg shadow-teal-200 text-center">
          <p className="eng mb-4">Top-up Menu</p>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
            {products.map((item) => (
            <div key={item.id} className="border-4 p-4 rounded-lg shadow-sm bg-white scale-100 hover:scale-105 transform duration-100 cursor-pointer">
              <img src={item.image} alt={item.name} className="w-full m-2 rounded" />
              <p className="eng mb-2">{item.name}</p>
              <p className="eng mb-2">Pyroxene: {item.pyroxene}</p>
              <p className="eng mb-2">Price: {item.price} Bath</p>
              <button className="flex bg-gradient-to-r from-green-500 via-green-400 to-green-500  hover:bg-green-300 p-2 rounded-md items-center text-white font-semibold hover:ring-2 ring-blue-600">
                <BsCartCheckFill />Add
              </button>
            </div>
            ))}
          </div>
        </div>
    );
}