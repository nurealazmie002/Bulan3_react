import useToggle from "../hooks/useToggle.jsx";

export default function ModalToggle() {
  const [isOpen, toggleOpen] = useToggle(false);

  return (
    <div className="p-4">
      <button
        onClick={toggleOpen}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isOpen ? "Tutup Modal" : "Buka Modal"}
      </button>
      {isOpen && <p className="mt-2 text-gray-700">Modal terbuka!</p>}
    </div>
  );
}
