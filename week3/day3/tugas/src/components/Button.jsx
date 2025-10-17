import React from "react";

function Button({ onClick }) {
  console.log("Button render");
  return (
    <button
      onClick={onClick}
      className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
    >
      Klik Saya
    </button>
  );
}

export default React.memo(Button);
