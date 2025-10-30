// import React, { useState, useEffect } from "react";

// const slides = [
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
//   "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
// ];

// const Carousel = () => {
//   const [index, setIndex] = useState(0);
//   const total = slides.length;

//   const next = () => setIndex((prev) => (prev + 1) % total);
//   const prev = () => setIndex((prev) => (prev - 1 + total) % total);

//   useEffect(() => {
//     const timer = setInterval(next, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden rounded-lg h-56 md:h-96">
//       {slides.map((src, i) => (
//         <img
//           key={i}
//           src={src}
//           alt={`Slide ${i + 1}`}
//           className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
//             i === index ? "opacity-100" : "opacity-0"
//           }`}
//         />
//       ))}

//       {/* Controls */}
//       <button
//         onClick={prev}
//         className="absolute top-0 left-0 z-10 flex items-center justify-center h-full px-4 group"
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/50">
//           <svg
//             className="w-4 h-4 text-white"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 6 10"
//           >
//             <path d="M5 1 1 5l4 4" />
//           </svg>
//         </span>
//       </button>

//       <button
//         onClick={next}
//         className="absolute top-0 right-0 z-10 flex items-center justify-center h-full px-4 group"
//       >
//         <span className="inline-flex items-center justify-center w-10 h-10 bg-white/30 rounded-full group-hover:bg-white/50">
//           <svg
//             className="w-4 h-4 text-white"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 6 10"
//           >
//             <path d="m1 9 4-4-4-4" />
//           </svg>
//         </span>
//       </button>

//       {/* Indicators */}
//       <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3">
//         {slides.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === index ? "bg-white" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;
