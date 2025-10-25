import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <BrowserRouter>
      <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Day20: React Router Basic</h1>

        {/* ナビゲーション */}
        <nav className="space-x-4 mb-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/about" className="text-blue-600 hover:underline">About</Link>
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

// <BrowserRouter>	React Router を使うための“全体のラッパー”。
// <Routes>	ページの切り替え（ルーティング）の定義エリア。
// <Route>	パスごとに表示するコンポーネントを指定。
// <Link>	ページをリロードせずに移動できるリンク。