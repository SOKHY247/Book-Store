import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const books = [
  {
    title: "Rich dad poor dad ",
    author: "Robert T. Kiyosaki (with Sharon Lechter)",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Publication2/v4/db/fa/f8/dbfaf8df-3a6c-a99a-7169-7c912b775cf0/9781612680187-frontcover.jpg/1200x630wz.png",
  },
  {
    title: "The Power",
    author: "Rhonda Byrne",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2Pav7fX4GDJnmU_6wVlTvi4iuOlIIWaBsruiQDGyfyrBLFkIce8zQ4mOx9P6GcyIstu4&usqp=CAU",
  },
  {
    title: "Steal like an Artist",
    author: "Austin Kleon",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTclyN5Ad43HlpXgLHezyXn9Flxh4KtPxo0-ZTCKQFn42vTIhYeukaFBvvVtkSkN1AdbGg&usqp=CAU",
  },
  {
    title: "Atomic Habit",
    author: "James Clear",
    image: "https://is1-ssl.mzstatic.com/image/thumb/Publication221/v4/0f/a8/21/0fa82145-ed72-d49a-08cf-072ed1aa21c2/9781473537804.jpg/1200x675wz.jpg",
  },
  {
    title: "The 7 habit of hight effectively teens ",
    author: "Sean Covey",
    image: "https://m.media-amazon.com/images/I/81hZc4eq1nL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg",
  },
  {
    title: "The one think",
    author: "Napoleon Hill",
    image: "https://static-ppimages.freetls.fastly.net/nielsens/9781848549258.jpg?canvas=600,600&fit=bounds&height=600&mode=max&width=600&404=default.jpg",
  },
  {
    title: "Think Grow rich",
    author: "John Grisham",
    image: "https://www.bookishadda.com/cdn/shop/files/287_8930d77f-0791-4ffe-86d6-1c2443dcce2e.png?v=1743593567&width=1946",
  },
  {
    title: "Ikigai",
    author: "Héctor García & Francesc Miralles",
    image: "https://cdn.shopify.com/s/files/1/1163/9680/products/Ikigai_Book.jpg?v=1536585232",
  },
  {
    title: "Psychology of money",
    author: "Morgan Housel",
    image: "https://whatsinyourstory.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-09-08-at-4.17.03-PM.jpeg",
  },
  {
    title: "Deep work",
    author: "Cal Newport",
    image: "https://rose.ph/wp-content/uploads/2021/08/Deep-Work-cover-min.jpg",
  },
];

export default function Bestsellers() {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-serif italic">Related book</h2>
        <a href="#" className="text-sm text-blue-600 hover:underline">
          See All
        </a>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable List */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-2"
        >
          {books.map((book, index) => (
            <div
              key={`${book.title}-${index}`}
              className="flex-shrink-0 w-44 text-center"
            >
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-64 object-cover rounded-md shadow-md"
              />
              <h3 className="mt-2 font-semibold text-sm">{book.title}</h3>
              <p className="text-xs text-blue-700 hover:underline">
                {book.author}
              </p>
              <Link to="/product">
              <button className="mt-2 border border-blue-600 text-blue-600 text-xs font-semibold py-1 px-3 rounded hover:bg-blue-50">
                Go to product
              </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md p-2 rounded-full z-10 hover:bg-gray-100"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}
