
import Link from "next/link";
import Header from "../components/header";
import Footer from "@/app/components/footer";

const Contact = () => {
  const products = [
    { id: "1", name: "Chair" },
    { id: "2", name: "Table" },
    { id: "3", name: "Sofa" },
  ];

  return (
    <div>
      
   {/* Header */}
<Header />

        {/* Hero Section */}
      <div className="relative">
        <img
          src="/Vouchers.png"
          alt="Shop Banner"
          className="w-full h-[300px] sm:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-3xl sm:text-5xl font-bold">
            
          </h2>
        </div>
      </div>
      
      <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-800">Get In Touch With Us</h1>
          <p className="text-gray-500 mt-2">
            For more information about our product & services, please feel free
            to drop us an email. Our staff will always be there to help you
            out. Do not hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="space-y-6">
            <div className="flex items-start space-x-3">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16.5 10.5L21 6m-6 0h.01M21 6c-1.098-.982-2.763-1.5-4.5-1.5S13.098 5.018 12 6m-3 0a9 9 0 018 4.5M9 6a9 9 0 018 4.5m-3 4.5l-6 6M12 6l-3 6 6 6"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Address</h4>
                <p className="text-gray-600">
                  236 5th SE Avenue, New York, NY 10000, United States
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10a4 4 0 008 0M7 10a4 4 0 108 0M5 14a7 7 0 0114 0m0 6v2a1 1 0 01-1 1H6a1 1 0 01-1-1v-2m0 0H4m16 0h-1"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-600">Mobile: +(84) 546-6789</p>
                <p className="text-gray-600">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="text-yellow-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 9c1.667-2.5 4.833-2.5 6.5 0M9 9c1.667-2.5 4.833-2.5 6.5 0M15 21h.01m-4.978-4.64a10.96 10.96 0 00-.022-.72M3 21a2 2 0 002 2h2a2 2 0 002-2H3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Working Time</h4>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-medium text-gray-700">
                Your name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-medium text-gray-700"
              >
                Subject (optional)
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Enter a subject"
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Hi! I’d like to ask about..."
                rows={4}
                className="w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md hover:bg-yellow-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
  <Footer/>

    </div>
    
    </div>
        
      );
    };
    export default Contact;