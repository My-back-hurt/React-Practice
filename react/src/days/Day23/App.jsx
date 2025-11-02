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
          <Route path="users/:id" element={<UserDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// useParams() フックで URL の :id の部分を取得できる。
// /users/:id のように 動的パラメータ をルートに設定。
// 同じページテンプレートで、表示内容だけを切り替えられる。