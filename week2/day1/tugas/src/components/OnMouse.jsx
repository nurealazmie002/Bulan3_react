function OnMouse() {
  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg text-center">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Event OnMouse
      </h2>

      <h1
        onMouseOver={(e) => (e.target.style.color = "red")}
        onMouseOut={(e) => (e.target.style.color = "blue")}
        className="cursor-pointer text-blue-600 font-medium"
      >
        Arahkan kursor mu ke sini
      </h1>
    </div>
  );
}

export default OnMouse;
