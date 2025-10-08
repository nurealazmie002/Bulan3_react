import './App.css'

function App() {
  const Product = ["Mouse", "Keyboard", "Monitor", "Mousepad", "Headset"]
    
  
  return (
    <div className="Container">
      <h2 className="title" >Daftar Produk</h2>
      <div className="card-product">
        {Product.map((item,gaming)=>( 
          <div key = {gaming} className="card">
            <h3 style={{textAlign: "center"}}>{item}</h3>
          </div>
          ))}
      </div>
    </div>
  )
}

export default App
