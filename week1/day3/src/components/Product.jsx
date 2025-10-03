function Product(props) {
  return(
    <div>
      <h1>Tugas 2</h1>
      <div>
        <h3>{props.productName}</h3>
        <p>Harga : {props.price}</p>
        <p>Stock : {props.Stock}</p>
        <p>Status : {props.isAvailable ? <p style= {{color: "green"}}>Tersedia</p> : <p style= {{color: "red"}}>Habis</p>}
        </p>
      </div>
</div>
  )  
}
export default Product