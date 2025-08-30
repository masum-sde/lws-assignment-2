import OrderCreation from "./OrderCreation";
import OrderHistory from "./OrderHistory";
import Hamburger from "../assets/hamburger.svg";
import Chicken from "../assets/chicken.svg";
import Submarine from "../assets/submarine.svg";
import Pizza from "../assets/pizza.svg";
import { useState } from "react";
const fakeOrderableData=[
    {
      id: crypto.randomUUID(),
      name: "Hamburger",
      imgSrc: Hamburger,
      price: 100,
      isSelected:false,
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
const DineBoard = () => {
  const [orderableData,setOrderableData]=useState(fakeOrderableData)
  function handleToggleSelection(itemId){
    const modifiedOrderableData=orderableData.map((item)=>{
      if(item.id===itemId){
        return{
          ...item,
          isSelected:!item.isSelected
        }
      }else{
        return item
      }
    })
    setOrderableData(modifiedOrderableData)
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderCreation orderableData={orderableData} handleToggleSelection={handleToggleSelection}/>
      <OrderHistory/>
    </div>
  );
};

export default DineBoard;
