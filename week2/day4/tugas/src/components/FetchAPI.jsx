import { useEffect, useState } from "react";

function FetchPost() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  return (
    <div className="p-4 bg-white shadow rounded-md text-center">
      <h2 className="font-bold text-blue-600 mb-2">Data dari Fetch API</h2>
      {post ? (
        <>
          <p className="font-semibold">{post.title}</p>
          <p className="text-gray-600">{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FetchPost;
