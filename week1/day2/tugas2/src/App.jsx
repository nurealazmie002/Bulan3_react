function App(){

  const name = "Naufal"
  const harga = 50000
  const discount = 0.2

  function sapa(user){
    return `Halo ${user}`
  }

  const upperName = name.toUpperCase()

  return(
    <div>
    <h2 style={{textAlign: "center"}}>Contoh JS dalam JSX</h2>

    <p>Harga asli : {harga}</p>
    <p>Harga setelah diskon : {harga - harga * discount}</p>

    <p>{sapa(name)}</p>

    <p>Nama yang diubah Capital : {upperName}</p>
    </div>
  )
}

export default App