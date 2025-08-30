import OrderCreation from "./OrderCreation";
import OrderHistory from "./OrderHistory";
import Hamburger from "../assets/hamburger.svg";
import Chicken from "../assets/chicken.svg";
import Submarine from "../assets/submarine.svg";
import Pizza from "../assets/pizza.svg";
import { useEffect, useState } from "react";
const fakeOrderableData = [
  {
    id: crypto.randomUUID(),
    name: "Hamburger",
    imgSrc: Hamburger,
    price: 100,
    isSelected: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Chicken Nuggets",
    imgSrc: Chicken,
    price: 200,
    isSelected: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Submarine Sandwich",
    imgSrc: Submarine,
    price: 150,
    isSelected: false,
  },
  {
    id: crypto.randomUUID(),
    name: "Pizza slices",
    imgSrc: Pizza,
    price: 80,
    isSelected: false,
  },
];
const DineBoard = () => {
  const [orderableData, setOrderableData] = useState(fakeOrderableData);
  const [OrderSummary, setOrderSummary] = useState({
    total: 0,
    pending: 0,
    delivered: 0,
  });
  const [persistentOrderReports, setPersistentOrderReports] = useState([]);
  const [orderReports, setOrderReports] = useState([]);
  useEffect(() => {
    setOrderSummary({
      total: orderReports.length,
      pending: orderReports.filter((or) => or.status === "PENDING").length || 0,
      delivered:
        orderReports.filter((or) => or.status === "DELIVERED").length || 0,
    });
    setOrderableData(fakeOrderableData);
  }, [orderReports]);

  function handleToggleSelection(itemId) {
    const modifiedOrderableData = orderableData.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          isSelected: !item.isSelected,
        };
      } else {
        return item;
      }
    });
    setOrderableData(modifiedOrderableData);
  }

  function handleFilter(filterType) {
    if (filterType === "PENDING") {
      const modifiedOrderReports = persistentOrderReports.filter(
        (item) => item.status === filterType
      );
      setOrderReports(modifiedOrderReports);
    } else if (filterType === "DELIVERED") {
      const modifiedOrderReports = persistentOrderReports.filter(
        (item) => item.status === filterType
      );
      setOrderReports(modifiedOrderReports);
    } else {
      setOrderReports(persistentOrderReports);
    }
  }

  function handleItemAsDelivered(itemId) {
    const modifiedOrderReports = orderReports.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          status: "DELIVERED",
        };
      } else {
        return item;
      }
    });
    setPersistentOrderReports(modifiedOrderReports);
    setOrderReports(modifiedOrderReports);
  }
  function handleItemDeletion(itemId) {
    const modifiedOrderReports = orderReports.filter(
      (item) => item.id !== itemId
    );
    setPersistentOrderReports(modifiedOrderReports);
    setOrderReports(modifiedOrderReports);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderCreation
        orderableData={orderableData}
        handleToggleSelection={handleToggleSelection}
        handleOrderSubmit={(newOrderedData) => {
          setPersistentOrderReports((data) => [...data, newOrderedData]);
          setOrderReports((data) => [...data, newOrderedData]);
        }}
      />
      <OrderHistory
        summary={OrderSummary}
        reports={orderReports}
        onFilter={handleFilter}
        onDeliver={handleItemAsDelivered}
        onDelete={handleItemDeletion}
      />
    </div>
  );
};

export default DineBoard;
