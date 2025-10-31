import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    // Corrected form update logic
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });

    // Hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);

    // Optional: here you can also send the data to an API or backend
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Contact MyBookstore
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Reach out to us with any inquiries, feedback, or book requests. We’d love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Write your message..."
              className="mt-2 block w-full rounded-md border border-gray-300 px-3 py-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-md font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <p className="text-center text-green-500 mt-6">
            ✅ Your message has been sent Mybookstore successfully!
          </p>
        )}
      </div>

      <h2 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white mt-5">Book Highlights:</h2>
        <ul class="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400 ">
    <li>
        Available in hardcover and paperback editions
    </li>
    <li>
        Written by a best-selling author
    </li>
    <li>
        Includes exclusive illustrations or artwork
    </li>
</ul>

    </div>
    
  );
};

export default ContactUs;
