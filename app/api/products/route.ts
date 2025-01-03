import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Product 1", price: 100, image: "/product1.jpg" },
  { id: 2, name: "Product 2", price: 200, image: "/product2.jpg" },
  { id: 3, name: "Product 3", price: 300, image: "/product3.jpg" },
];

export async function GET() {
  return NextResponse.json(products);
}
