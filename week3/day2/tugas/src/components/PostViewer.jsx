import useFetch from "../hooks/userFetch.jsx";

export default function PostViewer() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-4 shadow rounded animate-pulse text-gray-600">
      <h2 className="font-bold text-xl mb-2">{data.title}</h2>
      <p>{data.body}</p>
    </div>
  );
}
