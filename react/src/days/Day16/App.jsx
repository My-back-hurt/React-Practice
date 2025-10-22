import useFetch from "./useFetch";

export default function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Day16: useFetch Hook</h1>
      <ul className="list-disc pl-5">
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  );
}

// API取得ロジックをコンポーネントから分離し再利用できるカスタムフック(useFetch)にまとめる

// 概念
カスタムフック	複数のコンポーネントで使いたいロジック（例: fetch処理）を再利用できるように分離したもの
useFetch(url)	URLを引数にとって、data, loading, error を返す
依存配列 [url]	URLが変わったら再取得
クリーンアップ関数	コンポーネントがアンマウントされる際に、古いリクエストの結果でsetStateしないようにする