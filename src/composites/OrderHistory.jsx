import OrderSummary from './OrderSummary';
import OrderReports from './OrderReports';

const OrderHistory = ({summary}) => {
    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary summary={summary}/>
            <OrderReports/>
        </div>
    );
};

export default OrderHistory;