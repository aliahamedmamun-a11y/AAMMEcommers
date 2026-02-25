export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to Uchoice 🛍️
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Your modern e-commerce platform built with Next.js & MongoDB.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
        Explore Products
      </button>
    </main>
  );
}
