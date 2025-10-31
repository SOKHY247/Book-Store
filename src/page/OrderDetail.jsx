import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CartContext from "@/context/CartContext";
import { ShoppingCart, Heart, Zap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const OrderDetail = () => {
  const { id } = useParams();
  const { cart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const item = cart.find((product) => product.id.toString() === id);
  const [selectedImage, setSelectedImage] = useState(item?.image || "");
  const [selectedColor, setSelectedColor] = useState(item?.color || "");
  const [selectedSize, setSelectedSize] = useState(item?.size?.[0] || "");
  const [quantity, setQuantity] = useState(item?.quantity || 1);
  const [showAlert, setShowAlert] = useState(false);

  if (!item) {
    return <p className="text-center mt-10">Item not found in your orders.</p>;
  }

  const handleAddToCart = () => {
    addToCart(item.id);
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500); // hide after 2.5s
  };

  const handleBuyNow = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2500);
  };

  return (
    <div className="relative max-w-6xl mx-auto py-10 px-4 mt-5">
      {/* ✅ Tailwind alert */}
      {showAlert && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-green-100 text-green-800 px-6 py-3 rounded-lg shadow-lg flex items-center gap-2 animate-fade-in-down">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="font-medium">🛒 Buy successfully!</span>
        </div>
      )}

      <Button onClick={() => navigate(-1)} variant="outline" className="mb-6">
        ← Back
      </Button>

      <div className="grid md:grid-cols-2 gap-10">
        {/* LEFT SECTION: IMAGE GALLERY */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex md:flex-col gap-2 md:w-20">
            {[item.image, ...(item.gallery || [])].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={item.name}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-cover rounded-md border cursor-pointer ${
                  selectedImage === img
                    ? "border-pink-600"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              />
            ))}
          </div>

          <div className="flex-1">
            <img
              src={selectedImage}
              alt={item.name}
              className="w-full h-[450px] object-cover rounded-lg shadow"
            />
          </div>
        </div>

        {/* RIGHT SECTION: DETAILS */}
        <div className="space-y-5">
          <div>
            <h4 className="text-sm uppercase tracking-wider text-gray-500">
              {item.category}
            </h4>
            <h1 className="text-3xl font-bold mt-1">{item.name}</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-500">★</span>
              <span className="font-medium">4.5</span>
              <span className="text-gray-500 text-sm">(42 Reviews)</span>
            </div>
          </div>

          <div className="bg-pink-50 p-4 rounded-md">
            <div className="flex items-baseline gap-2">
              <h2 className="text-3xl font-bold text-pink-700">
                ${item.price}
              </h2>
              <span className="text-gray-400 line-through text-lg">
                ${(item.price * 1.2).toFixed(2)}
              </span>
              <span className="text-green-600 text-sm font-medium bg-green-100 px-2 py-1 rounded">
                Save 17%
              </span>
            </div>
            <p className="text-green-700 mt-1 text-sm">
              ✅ In Stock <span className="text-gray-500">(24 items left)</span>
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed">
            Have good product and hight Quality!
          </p>

          {/* Color selection */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Color</h4>
            <div className="flex items-center gap-3">
              {["#000000", "#C0C0C0", "#2A4FFF", "#C77A8B"].map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-7 h-7 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-pink-600"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          {/* Size selection */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Size</h4>
            <div className="flex gap-3">
              {["20", "14", "12"].map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`px-4 py-2 border rounded-md text-sm font-medium ${
                    selectedSize === s
                      ? "bg-pink-700 text-white border-pink-700"
                      : "border-gray-300 hover:border-pink-600"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h4 className="text-sm font-semibold mb-2">Quantity</h4>
            <div className="flex items-center gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </Button>
              <span className="w-10 text-center font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </Button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4 pt-4">
            <Button
              onClick={handleAddToCart}
              className="bg-pink-700 hover:bg-pink-800 text-white flex-1 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </Button>
            <Button variant="outline" size="icon" className="border-gray-300">
              <Heart className="w-4 h-4 text-gray-600" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
