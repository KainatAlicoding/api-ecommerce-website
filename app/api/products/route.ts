import { NextResponse } from "next/server";

const products = [
  { id: 1, name: "Product 1", price: 100, image: "/Frame 33.png" },
  { id: 2, name: "Product 2", price: 200, image: "/Frame 34.png" },
  { id: 3, name: "Product 3", price: 300, image: "/Frame 38.png" },
  { id: 4, name: "Product 4", price: 100, image: "/Frame 71.png" },
  { id: 5, name: "Product 5", price: 200, image: "/Frame 72.png" },
  { id: 6, name: "Product 6", price: 300, image: "/Frame 73.png" },
  { id: 7, name: "Product 7", price: 100, image: "/Frame 71 (1).png" },
  { id: 8, name: "Product 8", price: 200, image: "/Frame 38 (1).png" },
  { id: 9, name: "Product 9", price: 300, image: "/Frame 32.png" },
  { id: 10, name: "Product 10", price: 100, image: "/Frame 34.png" },
  { id: 11, name: "Product 11", price: 200, image: "/Frame 72.png" },
  { id: 12, name: "Product 12", price: 300, image: "/Frame 33.png" },
];

export async function GET() {
  return NextResponse.json(products);
}
