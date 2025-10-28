// Layout.jsx
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day22: Layout with Outlet</h1>
      <nav className="space-x-4 mb-4">
        <Link to="/" className="text-blue-600 hover:underline">Home</Link>
        <Link to="/about" className="text-blue-600 hover:underline">About</Link>
        <Link to="/contact" className="text-blue-600 hover:underline">Contact</Link>
      </nav>
      <Outlet />
    </div>
  );
}
