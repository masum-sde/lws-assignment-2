import Hamburger from "../assets/hamburger.svg";
import Chicken from "../assets/chicken.svg";
import Submarine from "../assets/submarine.svg";
import Pizza from "../assets/pizza.svg";
import { OrderItem } from "../components";

const OrderCreation = () => {
  const fakeData = [
    {
      id: crypto.randomUUID(),
      name: "Hamburger",
      imgSrc: Hamburger,
      price: 100,
      isSelected:true,
    },
    {
      id: crypto.randomUUID(),
      name: "Chicken Nuggets",
      imgSrc: Chicken,
      price: 200,
      isSelected:false,
    },
    {
      id: crypto.randomUUID(),
      name: "Submarine Sandwich",
      imgSrc: Submarine,
      price: 150,
      isSelected:false,
    },{
      id: crypto.randomUUID(),
      name: "Pizza slices",
      imgSrc: Pizza,
      price: 80,
      isSelected:false,
    },
  ];
  return (
    <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p className="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {fakeData.map((data) => (
            <OrderItem key={data.id} data={data} />
          ))}
        </div>
      </div>

      <button className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT 100)
      </button>
    </div>
  );
};

export default OrderCreation;
