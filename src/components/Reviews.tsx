// src/components/Reviews.jsx
import React from "react";

const reviews = [
  { id: 1, name: "Jane Doe", feedback: "Amazing quality and service!", image: "../assets/review.jpg" },
  { id: 2, name: "John Smith", feedback: "The freshest groceries I've ever had!", image: "../assets/review.jpg" },
];

function Review({ review }) {
  return (
    <div key={review.id} className="bg-white p-4 shadow-lg rounded-lg">
      <img
        src={review.image}
        alt={review.name}
        className="h-20 w-20 object-cover rounded-full mb-4 mx-auto"
      />
      <h3 className="text-xl font-semibold text-center">{review.name}</h3>
      <p className="text-gray-600 text-center">{review.feedback}</p>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}
