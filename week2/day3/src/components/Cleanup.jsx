import { useState, useEffect } from "react";

function Cleanup() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }

    window.addEventListener("resize", handleResize);
    console.log("Event listener ditambahkan");


    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener dibersihkan");
    };
  }, []);

  return (
    <div>
      <h2>Ukuran Halaman anda sekarang ini</h2>
      <p>Lebar: {size.width}px</p>
      <p>Tinggi: {size.height}px</p>
    </div>
  );
}

export default Cleanup;
