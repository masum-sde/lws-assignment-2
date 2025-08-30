import { useEffect, useState } from "react";
import { OrderItem } from "../components";
const initOrderCreationData = {
  id: "",
  customerName: "",
  itemCount: 0,
  totalAmount: 0,
  status: "PENDING",
};
const OrderCreation = ({
  orderableData,
  handleToggleSelection,
  handleOrderSubmit,
}) => {
  const [customerName, setCustomerName] = useState("");
  const [orderedData, setOrderedData] = useState(initOrderCreationData);

  useEffect(() => {
    if (orderedData.id) {
      handleOrderSubmit(orderedData);
      setCustomerName("");
      setOrderedData(initOrderCreationData);
    }
  }, [orderedData]);

  function handleCreateOrder() {
    if(!customerName) return
    const selectedItem = orderableData.filter((od) => od.isSelected);
    setOrderedData((data) => {
      return {
        ...data,
        id: crypto.randomUUID(),
        customerName: customerName,
        itemCount: selectedItem.length,
        totalAmount: selectedItem.reduce((total, sd) => sd.price + total, 0),
      };
    });
  }

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
          value={customerName}
          placeholder="e.g. Jack Samdani"
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Choose Items</label>
        <div className="items-container">
          {orderableData.map((data) => (
            <OrderItem
              key={data.id}
              data={data}
              handleToggleItemSelection={handleToggleSelection}
            />
          ))}
        </div>
      </div>

      <button
        className="w-full bg-primary cursor-pointer hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
        onClick={handleCreateOrder}
      >
        Place Order (BDT{" "}
        {orderableData
          .filter((od) => od.isSelected)
          .reduce((total, sd) => sd.price + total, 0)}
        )
      </button>
    </div>
  );
};

export default OrderCreation;
