// src/components/Products.jsx
import React from 'react';
import allen from '../assets/allen.jpg'
import estrada from '../assets/estrada.jpg'
import ryan from '../assets/ryan.jpg'
import semblante from '../assets/semblante.jpg'

const products = [
  { id: 1, name: "Prince Estrada", price: "$3.99 / lb", image: estrada },
  { id: 2, name: "Allen Rolona", price: "$1.29 / lb", image: allen },
  { id: 3, name: "Jericho Semblante", price: "$0.99 / lb", image: semblante },
  { id: 3, name: "Ryan Exija", price: "$0.99 / lb", image: ryan },
];

function Product({ product }) {
  return (
    <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price}</p>
      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-full font-semibold">
        Add to Cart
      </button>
    </div>
  );
}

export default function Products() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
