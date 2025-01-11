import Header from "@/app/components/header";
import Footer from "@/app/components/footer"


export default function Cart() {
  const cartItems = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
      image: "/Frame 33.png",
      quantity: 2,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
      image: "/Frame 34.png",
      quantity: 1,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
      image: "/Frame 38.png",
      quantity: 3,
    },
    {
      id: 4,
      name: "Product 4",
      price: 100,
      image: "/Frame 71.png",
      quantity: 2,
    },
    {
      id: 5,
      name: "Product 5",
      price: 100,
      image: "/Frame 72.png",
      quantity: 2,
    },
    {
      id: 6,
      name: "Product 6",
      price: 100,
      image: "/Frame 73.png",
      quantity: 2,
    },
    {
      id: 7,
      name: "Product 7",
      price: 100,
      image: "/Frame 71 (1).png",
      quantity: 2,
    },
    {
      id: 8,
      name: "Product 8",
      price: 100,
      image: "/Frame 38 (1).png",
      quantity: 2,
    },
    {
      id: 9,
      name: "Product 9",
      price: 100,
      image: "/Frame 32.png",
      quantity: 2,
    },
    {
      id: 10,
      name: "Product 10",
      price: 100,
      image: "/Frame 34.png",
      quantity: 2,
    },
    {
      id: 11,
      name: "Product 11",
      price: 100,
      image: "/Frame 72.png",
      quantity: 2,
    },
    {
      id: 12,
      name: "Product 12",
      price: 100,
      image: "/Frame 33.png",
      quantity: 2,
    },
  ];

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
<Header/>
    <div className="max-w-4xl mx-auto p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Quantity: {item.quantity}</p>
                  <p className="text-gray-700 font-bold">
                    ${item.price * item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-right">
            <p className="text-lg font-bold">Total: ${totalAmount}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-lg text-gray-700">Your cart is empty!</p>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-600">
            Continue Shopping
          </button>
        </div>
      )}
    </div>
   <Footer/>
    </div>
  );
}
