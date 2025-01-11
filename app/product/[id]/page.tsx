import { notFound } from "next/navigation";
import Link from "next/link";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";


async function fetchProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const products = await res.json();
  return products.find((product: any) => product.id.toString() === id);
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params; // Extract the id synchronously
  const product = await fetchProduct(id); // Use the id here
  if (!product) return notFound();

  return (
    <div>
    <Header/>
<div className="p-6 max-w-lg mx-auto border rounded-lg shadow-lg bg-white">
  {/* Product Image */}
  <div className="mb-6">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-72 object-cover rounded-lg"
    />
  </div>

  {/* Product Details */}
  <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
  <p className="text-xl text-gray-600 mb-4">
    ${product.price.toFixed(2)}
  </p>

  {/* Action Button */}
 <Link href="/cart">
  <button  className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-black transition duration-200">
    Add to Cart
  </button>
</Link>
</div>
<Footer/>
</div>
  );
}

