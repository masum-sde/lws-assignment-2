import React from "react";

const OrderReports = ({ reports, onDeliver, onDelete, onFilter }) => {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold mb-4">Order Reports</h2>

        <div className="flex gap-4 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-funnel-icon lucide-funnel"
          >
            <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
          </svg>
          <select
            className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
            onChange={(e) => onFilter(e.target.value)}
          >
            <option value="ALL">All</option>
            <option value="PENDING">Pending</option>
            <option value="DELIVERED">Delivered</option>
          </select>
        </div>
      </div>
      <div className="bg-cardbg rounded-lg p-4">
        <div className="reports-container">
          {reports.length > 0 ? (
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Customer Name</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {reports.map((report) => (
                  <tr className="border-t border-gray-700">
                    <td className="py-3">#{report.id.slice(-5)}</td>
                    <td className="py-3">{report.customerName}</td>
                    <td className="py-3">{report.itemCount}</td>
                    <td className="py-3">{report.totalAmount}</td>
                    <td className="py-3">
                      <span
                        className={
                          report.status === "PENDING"
                            ? "text-red-500"
                            : "text-green-500"
                        }
                      >
                        {report.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <button
                        className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
                        onClick={() => onDelete(report.id)}
                      >
                        Delete
                      </button>
                      {report.status === "PENDING" && (
                        <button
                          className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
                          onClick={() => onDeliver(report.id)}
                        >
                          DELIVER
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="text-center animate-pulse"> No Data Found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderReports;
