import { useContext } from "react";
import CartContext from "@/context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, getTotal } = useContext(CartContext);

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <table
        className="table w-full"
        border="1"
      >
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Size</th>
            <th>Color</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.name} width="50" />
              </td>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.size.join(", ")}</td>
              <td>{item.color}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3 style={{ marginTop: "20px" }}>Total: ${getTotal().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
