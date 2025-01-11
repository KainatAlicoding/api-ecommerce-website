'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Layout() {
  const [email, setEmail] = useState('');

  return (
    <>
      

      {/* Community Section */}
      <section className="bg-yellow-500 text-center py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
        <p className="text-white mt-4 text-lg">Type your email down below and be young wild generation</p>
        <div className="mt-6 flex justify-center">
          <input 
            type="email" 
            placeholder="Add your email here" 
            className="p-3 w-80 rounded-l-lg border-none focus:outline-none text-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="bg-black text-white px-6 py-3 rounded-r-lg">SEND</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-6 mt-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-lg font-bold text-white">FASHION</h2>
            <p className="text-gray-400 mt-2">Complete your style with awesome clothes from us.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="bg-yellow-500 p-2 rounded-full">F</a>
              <a href="#" className="bg-yellow-500 p-2 rounded-full">I</a>
              <a href="#" className="bg-yellow-500 p-2 rounded-full">T</a>
              <a href="#" className="bg-yellow-500 p-2 rounded-full">L</a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold">Company</h3>
            <ul className="text-gray-400 mt-2">
              <li><Link href="#">About</Link></li>
              <li><Link href="#">Contact us</Link></li>
              <li><Link href="#">Support</Link></li>
              <li><Link href="#">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold">Quick Link</h3>
            <ul className="text-gray-400 mt-2">
              <li><Link href="#">Share Location</Link></li>
              <li><Link href="#">Orders Tracking</Link></li>
              <li><Link href="#">Size Guide</Link></li>
              <li><Link href="#">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold">Legal</h3>
            <ul className="text-gray-400 mt-2">
              <li><Link href="#">Terms & conditions</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
