import React, { useContext } from "react";
import CartContext from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import OrderDetails from "./OrderDetail";
import { useState } from "react";
import { Modal } from "antd";


const OrderHistory = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  const navigate = useNavigate();


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  

  return (
    <>
    <div className="max-w-5xl mx-auto py-10 px-4 mt-5">
      <h1 className="text-3xl font-semibold mb-6">Order History</h1>
      <Button onClick={() => navigate(-1)} variant="outline" className="mb-6 cursor-pointer">
             ← Back
      </Button>
      <Link to="/product">
      </Link>
      {cart.length === 0 ? (
        <div> 
          <p>No items in your cart yet.</p>
        </div>
       
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
                <Button className="cursor-pointer">
                  Details
                </Button>
                 </Link>
                
              
                {/* <Button className="cursor-pointer"
                  onClick={() => { 
                    removeFromCart(item.id);
                    showModal();
                  }}
                  variant="destructive"
                >
                  Delete
                </Button> */}

              <Button
                className="cursor-pointer"
                variant="destructive"
                onClick={() => showModal(item.id)}
                >
                Delete
              </Button>
              <Modal 
                title="Delete Product?"
                closable={{ 'aria-label': 'Custom Close Button' }}
                open={isModalOpen}
                onOk={() => {
                  handleOk();
                  removeFromCart(item.id);
                }}
                onCancel={handleCancel}
                >
                  <p>Are you sure you want to delete this product?</p>
                  
              </Modal>
              

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  );
};

export default OrderHistory;
