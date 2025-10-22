import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    price: "$89",
    image: "https://m.media-amazon.com/images/I/81c9RipiB0L._UY1000_.jpg",
  },
  {
    id: 2,
    name: "Cotton Oversized Tee",
    price: "$39",
    image:
      "https://www.plainandsimple.com/cdn/shop/files/Men_Oversized_Heavyweight_Organic_Cotton_Tshirt_Oversized_Fit_White_1.jpg?v=1753199929",
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: "$59",
    image:
      "https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/au/img/product/item_22_kv.jpg?240112",
  },
];

const categories = [
  {
    id: 1,
    name: "Men",
    image:
      "https://chessline.in/wp-content/uploads/2024/04/29-04-202404313-___-KONICA-scaled.jpg",
  },
  {
    id: 2,
    name: "Women",
    image:
      "https://images.ctfassets.net/wkwo8cyw934s/6lHfDL3oQVe7lITE1vKtIM/2e7ca47621b99e0f3a0c79366a75e4d1/WK10_2025-PLP-CATEGORY-WOMEN-Hoodies.jpg",
  },
  {
    id: 3,
    name: "Accessories",
    image:
      "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-primary/10 to-background">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Elevate Your Style
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6">
          Discover the latest trends in fashion and express yourself with our
          exclusive clothing collections.
        </p>
        <Link
          to="/product"
          className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/80 transition"
        >
          Shop Now
        </Link>
      </section>

      {/* Categories Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Shop by Category
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <li
              key={cat.name}
              className="relative rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold">
                  {cat.name}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-muted/30">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="rounded-2xl bg-card text-card-foreground shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.price}</p>
                <button className="flex justify-center items-center gap-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg w-full hover:bg-primary/80 transition">
                  <ShoppingCart />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Newsletter</h2>
        <p className="text-muted-foreground mb-8">
          Get exclusive offers, styling tips, and more straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 border border-input bg-background px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold hover:bg-primary/80 transition">
            Subscribe
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} StyleHaus. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
