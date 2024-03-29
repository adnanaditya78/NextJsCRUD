export default function FoodLayout({ children }) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-4xl font-bold">FOOD WENAK</h1>
      </header>
      <main className="container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-800 text-white text-center py-4">
        &copy; {new Date().getFullYear()} Food Wenak. All rights reserved.
      </footer>
    </div>
  );
}
