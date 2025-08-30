import OrderSummary from './OrderSummary';
import OrderReports from './OrderReports';

const OrderHistory = ({summary,reports,onFilter,onDeliver,onDelete}) => {
    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary summary={summary}/>
            <OrderReports reports={reports} onDeliver={onDeliver} onDelete={onDelete} onFilter={onFilter}/>
        </div>
    );
};

export default OrderHistory;