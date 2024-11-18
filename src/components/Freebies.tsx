// src/components/Freebies.jsx
import React from "react";

const freebies = [
  { id: 1, name: "Free Bag of Oranges", description: "Get a free bag with every $50 spent!", image: "../assets/freebie.jpg" },
  { id: 2, name: "Discount Voucher", description: "10% off your next purchase!", image: "../assets/freebie.jpg" },
];

function Freebie({ freebie }) {
  return (
    <div key={freebie.id} className="bg-white p-4 shadow-lg rounded-lg">
      <img
        src={freebie.image}
        alt={freebie.name}
        className="h-40 w-full object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold">{freebie.name}</h3>
      <p className="text-gray-600">{freebie.description}</p>
    </div>
  );
}

export default function Freebies() {
  return (
    <section className="py-12 px-4 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-8">Special Freebies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {freebies.map((freebie) => (
          <Freebie key={freebie.id} freebie={freebie} />
        ))}
      </div>
    </section>
  );
}
