import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");
        const json = await res.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchData();

    // クリーンアップ（アンマウント時に無視フラグ）
    return () => {
      ignore = true;
    };
  }, [url]);

  return { data, loading, error };
}
