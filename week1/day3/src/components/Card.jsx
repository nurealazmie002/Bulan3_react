function Card({children}) {
    return (
        <div style={{
        border: "2px solid #ff7f50",
        borderRadius: "12px",
        padding: "15px",
        margin: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", 
        textAlign: "center",
        width: "300px"
      }}
      >
            {children}
        </div>
    )
}
export default Card