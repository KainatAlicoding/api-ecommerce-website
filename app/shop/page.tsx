
"useclient";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer"


async function fetchProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function shop() {
  const products = await fetchProducts();

  return (
       <div>
       <Header/>
       
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
            className="block mt-4 text-center bg-yellow-500 text-white py-2 rounded hover:bg-black"
          >
            View Details
          </Link>
         
        </div>
      ))}
    </div>
     <Footer/>
    </div>
  );
}
