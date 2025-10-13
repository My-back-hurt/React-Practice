import Hello from "./Hello";

function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

export default App;

// コンポーネント	関数で定義、export/import で再利用
// JSX	HTMLに似ているが JS 式を埋め込める
// className	CSSクラスは className で指定
// イベント	onClick / onChange などで操作
// DOM描画	ReactDOM.createRoot(...).render(...)