import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day23: Dynamic Routing</h1>
      <nav className="space-x-4 mb-4">
        <Link to="/" className="text-blue-600 hover:underline">Users</Link>
      </nav>
      <Outlet />
    </div>
  );
}
