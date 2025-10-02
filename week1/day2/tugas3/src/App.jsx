import './App.css'

function App() {
  const isLoggedIn = true
  const username = "Naufal"
  return (
    <div style={{ textAlign: "center",fontFamily: "monospace",height: "100vh",justifyContent: "center",display: "flex",flexDirection: "column",alignItems: "center"}}>
      <h2>
        {isLoggedIn ? `Halo, ${username} !!! Selamat Datang` : "Halo Guest, Silahkan Login!"}
      </h2>
    </div>
  )
}

export default App
