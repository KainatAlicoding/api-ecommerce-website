import { notFound } from "next/navigation";

async function fetchProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products`);
  if (!res.ok) throw new Error("Failed to fetch product");
  const products = await res.json();
  return products.find((product: any) => product.id.toString() === id);
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await fetchProduct(params.id);
  if (!product) return notFound();

  return (
    <div className="p-4 border rounded-lg shadow bg-white">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover mb-4"
      />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-700">${product.price}</p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        Add to Cart
      </button>
    </div>
  );
}
