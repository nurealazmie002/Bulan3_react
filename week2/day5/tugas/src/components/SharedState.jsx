import { useState } from "react";

function TextInput({ text, onTextChange }) {
  return (
    <input
      type="text"
      value={text}
      onChange={(e) => onTextChange(e.target.value)}
      placeholder="Ketikan sesuatu..."
    />
  );
}

function TextDisplay({ text }) {
  return (
    <p>
      Hasil: {text || "Belum ada teks"}
    </p>
  );
}

function SharedState() {
  const [text, setText] = useState("");

  return (
    <div>
      <h2>Shared State</h2>
      <TextInput text={text} onTextChange={setText} />
      <TextDisplay text={text} />
    </div>
  );
}

export default SharedState;