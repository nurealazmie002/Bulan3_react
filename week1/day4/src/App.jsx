import Button from "./component/Button"
import "./component/CardName.css"
import ProfileBox from './component/ProfileBox'
import "./component/ButtonStyle.css"
import  AlertBox from "./component/AlertBox"
import ResponsiveBox from "./component/ResponsiveBox"

function App() {

  return (
    <div>
      <div>
        <ProfileBox/>
      </div>

      <div>
        <p style={{textAlign: "center", fontSize: "20px",fontFamily: "monospace"}}>Tugas2</p>
      </div>

      <div style={{display: "flex", gap: "10px",justifyContent: "center"}}>
        <button className="card">Ini kartu Tugas 2</button>
        <button className="card highlight">Ini kartu  Tugas 2</button>
      </div>

      <div className="tombol" style ={{marginTop: "30px"}}>
        <p >Tugas 3</p>
      <Button label="Default" />
      <Button label="Primary" type="primary" />
      </div>

      <div>
        <div><p style ={{textAlign: "center", fontSize: "20px",fontFamily: "monospace",marginTop: "30px"}}>Tugas4</p></div>
        <AlertBox type="success" message="Berhasil disimpan!" />
        <AlertBox type="warning" message="Periksa kembali datamu." />
        <AlertBox type="error" message="Terjadi kesalahan!" />
      </div>

      <div>
        <p style ={{textAlign: "center", fontSize: "20px",fontFamily: "monospace",marginTop: "30px"}}>Tugas 5</p>
        <ResponsiveBox/>
      </div>
  </div>
  )
}

export default App
