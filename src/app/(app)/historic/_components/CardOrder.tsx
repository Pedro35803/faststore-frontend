import { Order } from "@/types/order";
import React from "react";

export const CardOrder = (order: Order) => {
  const statusColor = {
    PENDENT: { bg: "bg-[#e9d8fd]", text: "text-[#6b46c1]" },
    COMPLETED: { bg: "bg-green-100", text: "text-green-800" },
    CANCELLED: { bg: "bg-red-100", text: "text-red-800" },
  };

  return (
    <div className="border border-gray-200 rounded-xl shadow-md p-5 bg-gray-300 w-full max-w-md hover:shadow-lg transition-shadow duration-200">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <span
          className={`px-3 py-1 rounded-full font-medium text-sm ${
            statusColor[order.status].bg
          } ${statusColor[order.status].text}`}
        >
          {order.status}
        </span>
        <span className="text-gray-600 text-sm">
          {new Date(order.created_at).toLocaleDateString("pt-BR")}
        </span>
      </div>

      {/* Items */}
      <div className="mb-4 space-y-2">
        {order.orderItem.map((item) => (
          <div key={item.id} className="flex justify-between items-center">
            <span className="text-gray-700">
              {item.product.name} x {item.quantity}
            </span>
            <span className="text-gray-800 font-medium">
              R$ {Number(item.price).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-3 flex justify-between items-center font-semibold text-gray-800 text-lg">
        <span>Total</span>
        <span>R$ {Number(order.total_price).toFixed(2)}</span>
      </div>
    </div>
  );
};
