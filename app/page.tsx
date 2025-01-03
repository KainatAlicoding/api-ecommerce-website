import Link from "next/link";
import cart from "@/app/cart/page"
async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product: any) => (
        <div
          key={product.id}
          className="p-4 border rounded-lg shadow bg-white hover:shadow-md"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p className="text-gray-700">${product.price}</p>
          <Link
            href={`/product/${product.id}`}
            className="block mt-4 text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            View Details
          </Link>
         
        </div>
      ))}
    </div>
  );
}
