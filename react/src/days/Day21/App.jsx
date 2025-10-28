import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Day21: Active Navigation</h1>

        {/* ナビゲーション */}
        <nav className="space-x-4 mb-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-bold underline" : "text-blue-600 hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-800 font-bold underline" : "text-blue-600 hover:underline"
            }
          >
            About
          </NavLink>
        </nav>

        {/* ページルート */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// NavLink	現在のURLを自動で判定してアクティブ状態を持つリンク。
// isActive	現在のパスとリンク先が一致しているかどうかの真偽値。
// className={({ isActive }) => ...}	isActiveを元に動的にスタイルを変更できる。