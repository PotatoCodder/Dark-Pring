// src/components/Benefits.jsx
const benefits = [
    { id: 1, title: "Farm-Fresh Produce", description: "Sourced directly from farms." },
    { id: 2, title: "Quick Delivery", description: "Same-day delivery in select areas." },
    { id: 3, title: "Affordable Prices", description: "Best prices for high-quality goods." },
  ];
  
  export default function Benefits() {
    return (
      <section className="py-12 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Shop with Us?</h2>
        <div className="flex flex-col md:flex-row md:justify-around gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="p-4 bg-white shadow-lg rounded-lg max-w-xs mx-auto">
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-gray-600 mt-2">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  