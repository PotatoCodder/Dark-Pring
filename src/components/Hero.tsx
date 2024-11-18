export default function Hero() {
  return (
    <section className="bg-green-500 h-[400px] flex flex-col items-center justify-center text-center text-white rounded-b-[30px]">
      <h1 className="text-5xl font-bold">Dark Market</h1>
      <p className="mt-4 text-lg">Buy any product that you like</p>
      <button className="mt-6 px-8 py-2 bg-white text-green-500 rounded-full font-semibold">
        Shop Now
      </button>
    </section>
  );
}
