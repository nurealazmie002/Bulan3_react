import { useEffect, useState } from "react";

function FetchWithAbort() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
          signal: controller.signal,
        });
        const data = await res.json();
        setPost(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetch error:", err);
        }
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-md text-center">
      <h2 className="font-bold text-red-600 mb-2">Fetch dengan AbortController</h2>
      {post ? <p className="text-gray-600">{post.title}</p> : <p className="text-gray-600">bentar boy lagi Loading...</p>}
    </div>
  );
}

export default FetchWithAbort;
