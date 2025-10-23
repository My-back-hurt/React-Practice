import useFetch from "./useFetch";
import TodoItem from "./TodoItem";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  // ここでエラーとローディングのメッセージ表示
  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day17 - useFetch Todo</h1>
      {data.map((todo) => (
        <TodoItem key={todo.id} text={todo.title} done={todo.completed} />
      ))}
    </div>
  );
}

// ✅ カスタムフック（useFetch）を使って Todo データを取得する
// ✅ ローディング・エラー・データを状態管理する
// ✅ コンポーネント側をスッキリさせる

// 概念
// カスタムフック	複数のコンポーネントで使える共通ロジックを関数化
// 依存配列 [url]	URL が変わった時だけ再実行される
// 責務の分離	Appは「UI表示」、useFetchは「データ取得」担当