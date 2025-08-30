import OrderCreation from "./OrderCreation";

const DineBoard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
      <OrderCreation />
    </div>
  );
};

export default DineBoard;
