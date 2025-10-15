function Level3({ message }) {
  return (
    <p>
      Pesan dari Parent: {message}
    </p>
  );
}

function Level2({ message }) {
  return (
    <div>
      <Level3 message={message} />
    </div>
  );
}

function Level1({ message }) {
  return (
    <div>
      <Level2 message={message} />
    </div>
  );
}

function PropDrilling() {
  const data = "Susah coy prop drilling, rada aneh gitu data kok diputer-puter :)";

  return (
    <div>
      <h2>Prop Drilling</h2>
      <Level1 message={data} />
    </div>
  );
}

export default PropDrilling;
