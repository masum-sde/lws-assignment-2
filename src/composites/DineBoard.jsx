import OrderCreation from "./OrderCreation";
import OrderHistory from "./OrderHistory";

const DineBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderCreation />
      <OrderHistory/>
    </div>
  );
};

export default DineBoard;
