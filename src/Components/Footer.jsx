import { Leaf, Map, Phone, Facebook, Youtube, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 grid grid-cols-1 md:grid-cols-4 gap-6 text-white p-8 mt-10">
      {/* Contact Us */}
      <div>
        <h1 className="font-bold text-lg mb-3">Contact Us</h1>

        <div className="flex items-start gap-3 mb-2">
          <Map className="w-5 h-5 text-gray-400 mt-1" />
          <p className="text-gray-300 text-sm">
            21 km Ferozepur Road, Lahore, Pakistan
          </p>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <Leaf className="w-5 h-5 text-gray-400" />
          <p className="text-gray-300 text-sm">usama@gmail.com</p>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-gray-400" />
          <p className="text-gray-300 text-sm">+92 300 1234567</p>
        </div>
      </div>

      {/* Information */}
      <div>
        <h1 className="font-bold text-lg mb-3">Information</h1>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="#">Blogs</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Catalogues</a></li>
        </ul>
      </div>

      {/* Customer Services */}
      <div>
        <h1 className="font-bold text-lg mb-3">Customer Services</h1>
        <ul className="space-y-2 text-sm text-gray-300">
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Order Tracking</a></li>
          <li><a href="#">Customers</a></li>
        </ul>
      </div>

      {/* Newsletter */}
      <div>
        <h1 className="font-bold text-lg mb-3">Newsletter Signup</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-white px-3 py-2 rounded-md text-gray-800 focus:outline-none"
          />
          <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center md:justify-start">
          <a href="#"><Facebook className="w-6 h-6 hover:text-blue-500" /></a>
          <a href="#"><Youtube className="w-6 h-6 hover:text-red-500" /></a>
          <a href="#"><Instagram className="w-6 h-6 hover:text-pink-500" /></a>
        </div>
      </div>
    </footer>
  );
}
