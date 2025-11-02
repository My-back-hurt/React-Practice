import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Users from "./Users";
import UserDetail from "./UserDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Users />} />
          <Route path="users/:id" element={<UserDetail />} /> {/* ← 動的ルート */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// useParams() とは？
// React Router が提供するフックで、URLの中に書かれたパラメータを取得できます