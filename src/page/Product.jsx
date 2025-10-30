import React, { useContext } from "react";
import ProductContext from "@/context/ProductContext";
import { ShoppingCart } from "lucide-react";
import OrderDetails from "./OrderDetail";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CartContext from "@/context/CartContext";

const Product = () => {
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-7xl mx-auto py-10 px-4 space-y-8 mt-5">
      <h1 className="text-3xl font-semibold tracking-tight">Products</h1>

       

 <Link to="/about">
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      All Book
      </button>
    </Link>

     <a href="#B1">
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
       Book for Business
      </button>
    </a>

     <Link to="#P1">
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
       Book programming language
      </button>
    </Link>

     <Link to="/orderhistory">
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
       Order History
      </button>
    </Link>


      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
        {products.map((product, index) => (
          <Card
            className="overflow-hidden transition hover:shadow-lg p-0 pb-6"
            key={index}
          >
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={`${product.id} - ${product.name}`}
                className="w-full h-60 object-cover"
              />
            </CardHeader>

            <CardContent className="p-4 space-y-2">
              <CardTitle className="text-lg line-clamp-1">
                {product.name}
              </CardTitle>

              <CardDescription className="flex justify-between text-sm text-muted-foreground">
                <span>{product.category}</span>
                <span>{product.color}</span>
              </CardDescription>

              <ul className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                {product.size.map((s, idx) => (
                  <li
                    key={idx}
                    className="border rounded-md px-2 py-0.5 bg-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold">${product.price}</h3>
            </CardContent>

            <CardFooter>
              <Button
                variant="default"
                size="sm"
                onClick={() => addToCart(product.id)}
                className="w-full flex items-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        
        ))}
      </div>
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        <p id="B1">Book for Business</p>
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
        {products.map((product, index) => (
          <Card
            className="overflow-hidden transition hover:shadow-lg p-0 pb-6"
            key={index}
          >
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={`${product.id} - ${product.name}`}
                className="w-full h-60 object-cover"
              />
            </CardHeader>

            <CardContent className="p-4 space-y-2">
              <CardTitle className="text-lg line-clamp-1">
                {product.name}
              </CardTitle>

              <CardDescription className="flex justify-between text-sm text-muted-foreground">
                <span>{product.category}</span>
                <span>{product.color}</span>
              </CardDescription>

              <ul className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                {product.size.map((s, idx) => (
                  <li
                    key={idx}
                    className="border rounded-md px-2 py-0.5 bg-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold">${product.price}</h3>
            </CardContent>

            <CardFooter>
              <Button
                variant="default"
                size="sm"
                onClick={() => addToCart(product.id)}
                className="w-full flex items-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        
        ))}
      </div>

      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      <p id="P1">Book programming language</p>
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mt-4">
        {products.map((product, index) => (
          <Card
            className="overflow-hidden transition hover:shadow-lg p-0 pb-6"
            key={index}
          >
            <CardHeader className="p-0">
              <img
                src={product.image}
                alt={`${product.id} - ${product.name}`}
                className="w-full h-60 object-cover"
              />
            </CardHeader>

            <CardContent className="p-4 space-y-2">
              <CardTitle className="text-lg line-clamp-1">
                {product.name}
              </CardTitle>

              <CardDescription className="flex justify-between text-sm text-muted-foreground">
                <span>{product.category}</span>
                <span>{product.color}</span>
              </CardDescription>

              <ul className="flex flex-wrap gap-1 text-xs text-muted-foreground">
                {product.size.map((s, idx) => (
                  <li
                    key={idx}
                    className="border rounded-md px-2 py-0.5 bg-muted"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold">${product.price}</h3>
            </CardContent>

            <CardFooter>
              <Button
                variant="default"
                size="sm"
                onClick={() => addToCart(product.id)}
                className="w-full flex items-center gap-2 cursor-pointer"
              >
                <ShoppingCart className="w-4 h-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        
        ))}
      </div>

    </div>
  );
};

export default Product;