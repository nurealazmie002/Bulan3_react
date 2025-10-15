function ProfileBox() {

  const boxPlace = {
    display: "grid",
    justifyContent: "center",
    width: "100%",
  }

  const boxStyle = {
    backgroundColor: "#f0f8ff",
    width: "200px",
    height: "300px",
    border: "2px solid #0077ff",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    padding: "30px",
  };

  const textStyle = {
    color: "#0077ff",
    fontFamily: "monospace",
    
  };

  const imgStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "20px",
    objectFit: "cover",
    marginBottom: "30px",
  }

  return (
    
    <div style={boxPlace}>
        <p style ={{textAlign: "center", fontFamily: "monospace", fontSize: "20px"}}> Tugas 1</p>
    <div style={boxStyle}>
        <img style={imgStyle} src="https://i.pinimg.com/1200x/d2/d5/64/d2d5647f367872fe5e42c52717be5d5d.jpg" alt="" />
        <h2 style={textStyle}>Naufal Hibatullah</h2>
        <p style={textStyle}>Matilah engkau mati... Engkau akan hidup berkali - kali</p>
    </div>
    </div>
  );
}

export default ProfileBox;
