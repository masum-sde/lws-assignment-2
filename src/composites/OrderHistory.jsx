import OrderSummary from './OrderSummary';
import OrderReports from './OrderReports';

const OrderHistory = () => {
    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary/>
            <OrderReports/>
        </div>
    );
};

export default OrderHistory;