import React, { useContext } from "react";
import CartContext from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import OrderDetails from "./OrderDetail";

const OrderHistory = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-5">
      <h1 className="text-3xl font-semibold mb-6">Order History</h1>
      {cart.length === 0 ? (
        <p>No items in your cart yet.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border rounded p-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {item.category} | {item.color}
                  </p>
                  <p className="text-sm">Price: ${item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value))
                    }
                    className="border rounded w-20 mt-1 px-2 py-1"
                  />
                  <p className="text-xs mt-1">Caption: {item.caption || "-"}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Link to={`/orderhistory/${item.id}`}>
                <Button>
                  Details
                </Button>
                 </Link>
                
              
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="destructive"
                >
                
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
