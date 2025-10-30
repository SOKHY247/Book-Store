import React, { useState, useEffect } from "react";
import { Carousel } from "flowbite";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
// import SignIn from "./FormSign-in";
// import SignUp from "./SignUp";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Bestsellers from "./Bestsellers";
import { GalleryWithTab } from "./GalleryWithTab";


const Home = () => {
  // 🧩 Carousel logic must be inside the component
  const slides = [
   "https://i.ytimg.com/vi/OXaga3JVdR8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA3gZ1Ckwiv5EOcfyfAO8p9b56x_w",
    "https://i.ytimg.com/vi/PLTqqi8nDJY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAK6a1lzh6yXYaQw7Bvy7RXKHZY-g",
    "https://png.pngtree.com/thumb_back/fh260/background/20250801/pngtree-literary-bloom-an-open-book-in-a-meadow-with-daisies-and-image_17671404.webp",
    "https://media.licdn.com/dms/image/v2/D4D12AQGaeZwKxSukNA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1716326374277?e=2147483647&v=beta&t=QrETvsuPc-vm9Fbry51m_jT86NV_5EXTfq0Qqie8MTY",
    "https://thedayspring.com.pk/wp-content/uploads/2022/10/The-7-Habits-of-Highly-Effective-Teens-Book-Reviewy.jpg",
  ];
   const images = [
    "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/58/2912541/1.jpg?6999",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDe9pxqWuvZVOV5CPT2RFnHc3QylPSmBw80Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhhPrJp2O1bSBVoiBa5wAn_zF4ySADYSOoQ&s",
    "https://assets.penguinrandomhouse.com/wp-content/uploads/2022/02/01152036/PRH-What-to-Read-After-Atomic-Habits-1200x628-mobile-header.jpg",
    "https://romangorge.com/wp-content/uploads/2022/03/Colorful-Vintage-Library-Furniture-Animated-Illustration-Book-Report-Education-Presentation-1-e1648298374112.png",
  ];

  const [index, setIndex] = useState(0);
  const total = slides.length;

  const next = () => setIndex((prev) => (prev + 1) % total);
  const prev = () => setIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 3000);
    return () => clearInterval(timer);
  }, []);

  
  const products = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: "$89",
      image: "https://www.bookmarked.id/cdn/shop/files/FollowYourHeartNEW_1024x.jpg?v=1718024604"
    },
    {
      id: 2,
      name: "Cotton Oversized Tee",
      price: "$39",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Publication69/v4/72/e0/44/72e044d9-aec9-5846-611d-9ad63e2533b3/15078-SEA-Being-Happy_-COVER-A-1.jpg/1200x675wz.jpg",
    },
    {
      id: 3,
      name: "Slim Fit Chinos",
      price: "$59",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Publication118/v4/e0/87/80/e08780bb-a838-c1d5-f08c-1166128eae76/9781848504066.jpg/1200x900wz.jpg",
    },
    {
      id: 3,
      name: "Slim Fit Chinos",
      price: "$59",
      image:
        "https://is1-ssl.mzstatic.com/image/thumb/Publication4/v4/7b/32/09/7b32099f-708b-a755-a9eb-91c0048c2bcc/cover.jpg/1200x630wz.png",
    },
    
  ];
  

  const [categories, setCategories] = useState([
  {
    id: 1,
    name: "Men",
    category: "Clothing",
    price: 49.99,
    quantity: 10,
    image: "https://chessline.in/wp-content/uploads/2024/04/29-04-202404313-___-KONICA-scaled.jpg",
    date: "2025-10-29T10:00:00Z",
  },
  {
    id: 2,
    name: "Women",
    category: "Clothing",
    price: 59.99,
    quantity: 15,
    image: "https://images.ctfassets.net/wkwo8cyw934s/6lHfDL3oQVe7lITE1vKtIM/2e7ca47621b99e0f3a0c79366a75e4d1/WK10_2025-PLP-CATEGORY-WOMEN-Hoodies.jpg",
    date: "2025-10-28T10:00:00Z",
  },
  {
    id: 3,
    name: "Accessories",
    category: "Accessories",
    price: 19.99,
    quantity: 20,
    image: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    date: "2025-10-27T10:00:00Z",
  },
  {
    id: 4,
    name: "Accessories",
    category: "Accessories",
    price: 24.99,
    quantity: 8,
    image: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    date: "2025-10-26T10:00:00Z",
  },
  {
    id: 5,
    name: "Accessories",
    category: "Accessories",
    price: 29.99,
    quantity: 5,
    image: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    date: "2025-10-25T10:00:00Z",
  },
  {
    id: 6,
    name: "Accessories",
    category: "Accessories",
    price: 34.99,
    quantity: 12,
    image: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    date: "2025-10-24T10:00:00Z",
  },
  {
    id: 7,
    name: "Accessories",
    category: "Accessories",
    price: 39.99,
    quantity: 7,
    image: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    date: "2025-10-23T10:00:00Z",
  },
  {
    id: 8,
    name: "Accessories",
    category: "Accessories",
    price: 44.99,
    quantity: 3,
    image: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    date: "2025-10-22T10:00:00Z",
  },
]);

  
  // Move MV
  const movies = [
  {
    title: "Who is your Room",
    year: 2023,
    genre: "Sci-Fi",
    rating: 8.2,
    poster:
      "https://content-asset.phsar121.com/products/2ZkjOjQAa3O8UmWG1DaLYBMNQuYSqb7ZBT01AF2Z.png",
  },
  {
    title: "The Mindset",
    year: 2021,
    genre: "Drama",
    rating: 7.5,
    poster: "https://static.wixstatic.com/media/2d0426_633ff342983d432bb09525525cbfc7d9~mv2.jpg/v1/fill/w_568,h_568,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/2d0426_633ff342983d432bb09525525cbfc7d9~mv2.jpg",
  },
  {
    title: "The miracle morning book",
    year: 2024,
    genre: "Cyberpunk Thriller",
    rating: 8.0,
    poster:
      "https://indiebusinessnetwork.com/wp-content/uploads/2020/12/IBB-1-2021-miracle-morning.jpg",
  },
  {
    title: "How to stop worrying and start living",
    year: 2020,
    genre: "Adventure",
    rating: 7.3,
    poster:
      "https://is1-ssl.mzstatic.com/image/thumb/Publication211/v4/df/a6/a9/dfa6a906-f690-9619-c29d-a746a0710ecc/9781451621723.jpg/1200x900wz.jpg",
  },
  {
    title: "Mua The Magic",
    year: 2022,
    genre: "Fantasy",
    rating: 8.6,
    poster:
      "https://salt.tikicdn.com/cache/280x280/ts/product/11/a5/0e/3a6e85034d7a76b5bb6c5da2a98bb370.jpg",
  },
  {
    title: "Learning how to learn",
    year: 2019,
    genre: "Action",
    rating: 7.8,
    poster: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/94/MTA-143552272/bentang_pustaka_buku_learning_how_to_learn_-_barbara-_ph-d_full01_k6vaqaav.jpg",
  },
];

const image = [
  {
    src: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    alt: "Cinque Terre",
    rating: 8.0,
    desc: "Add a description of the image here",
  },
  {
    src: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    alt: "Forest",
    desc: "Add a description of the image here",
  },
  {
    src: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    alt: "Northern Lights",
    desc: "Add a description of the image here",
  },
  {
    src: "https://img.freepik.com/premium-photo/concept-product-categories-clothing-accessories-white-background_268321-4577.jpg",
    alt: "Mountains",
    desc: "Add a description of the image here",
  },
];

const works = [
  {
    id: 1,
    src: "https://indiebusinessnetwork.com/wp-content/uploads/2020/12/IBB-1-2021-miracle-morning.jpg",
    alt: "Mountains",
    title: "My Work",
    desc: "Lorem ipsum..",
  },
  {
    src: "https://indiebusinessnetwork.com/wp-content/uploads/2020/12/IBB-1-2021-miracle-morning.jpg",
    alt: "Lights",
    title: "My Work",
    desc: "Lorem ipsum..",
  },
  {
    src: "https://indiebusinessnetwork.com/wp-content/uploads/2020/12/IBB-1-2021-miracle-morning.jpg",
    alt: "Nature",
    title: "My Work",
    desc: "Lorem ipsum..",
  },
  {
    src: "https://indiebusinessnetwork.com/wp-content/uploads/2020/12/IBB-1-2021-miracle-morning.jpg",
    alt: "Mountains",
    title: "My Work",
    desc: "Lorem ipsum..",
  },
];
 return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      {/* 🖼️ Carousel Section */}
      <div className="relative w-full overflow-hidden rounded-lg h-56 md:h-96">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 6 10"
            >
              <path d="M5 1 1 5l4 4" />
            </svg>
          </span>
        </button>

        <button
          onClick={next}
          className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 group"
        >
          <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/50">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 6 10"
            >
              <path d="m1 9 4-4-4-4" />
            </svg>
          </span>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
{/* Tab Section */}
      <div className="p-6 bg-gray-50">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {works.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

      {/* 🛍️ Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-linear-to-b from-primary/10 to-background">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Welcome to MyBook store 
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
      {/* Image sild */}
      <div className="p-6 bg-gray-50 ">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {image.map((img, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md bg-white hover:shadow-lg transition-shadow"
          >
            <a href={img.src} target="_blank" rel="noopener noreferrer">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </a>
            <div className="p-3 text-center text-gray-700 text-sm">
              {img.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
      

      {/* 🧩 Categories Section */}
      {/* <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Shop by Category
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-5 ">
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
      </section> */}
     
      {/* Movies Section */}
      <section className="p-4 lg:p-8 space-y-6">
        <h1 className="text-4xl font-semibold">Action</h1>

          {/* Hero Section */}
      {/* <section className="pt-16">
        <img
          src="https://i.cdn.newsbytesapp.com/images/l70420220408162006.jpeg"
          alt="Hero"
          className="w-full h-[30px] md:h-[250px] lg:h-[250px] object-cover object-top
          rounded-[10px] p-1"
        />
      </section> */}
      <Bestsellers/>
      
      

        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8">
          {movies.map((movie, index) => (
            <li
              key={index}
              className="bg-blue-100 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-250"
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-80 w-full object-cover"
              />
              <article className="p-2 space-y-4">
                <h2 className="font-semibold text-xl">{movie.title}</h2>
                <div className="flex justify-between text-sm text-gray-700">
                  <p>{movie.year}</p>
                  <p>{movie.genre}</p>
                </div>
                <p>⭐ {movie.rating}</p>
              </article>
            </li>
          ))}
        </ul>
      </section>

        {/* Hero Section */}
      <section className="pt-16">
        <img
          src="https://i.cdn.newsbytesapp.com/images/l70420220408162006.jpeg"
          alt="Hero"
          className="w-full h-[30px] md:h-[250px] lg:h-[250px] object-cover object-top
          rounded-[10px] p-8"
        />
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 bg-muted/30">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
   
      {/* <div className="grid gap-4">
      <div>
        <img
          className="h-auto max-w-full rounded-lg"
          src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
          alt="Featured"
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={src} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </div> */}
   

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
