import useToggle from "../hooks/useToggle.jsx";

export default function SwitchToggle() {
  const [isOn, toggle] = useToggle(true);

  return (
  <div className=" flex items-center justify-center ">
    <div className="p-4 flex items-center gap-3  shadow rounded-lg">
      <span>Status: {isOn ? "ON" : "OFF"}</span>
      <button
        onClick={toggle}
        className={`px-4 py-2 rounded text-white transition ${
          isOn ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 hover:bg-gray-500"
        }`}
      >
        Toggle
      </button>
    </div>
  </div>
);

}
