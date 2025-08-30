import OrderSummary from './OrderSummary';
import OrderReports from './OrderReports';

const OrderHistory = ({summary,reports,onDeliver,onDelete}) => {
    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary summary={summary}/>
            <OrderReports reports={reports} onDeliver={onDeliver} onDelete={onDelete}/>
        </div>
    );
};

export default OrderHistory;