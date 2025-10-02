function App(){
  
  const profile = [{
    name: 'Naufal Hibatullah ',
    image : 'https://i.pinimg.com/736x/38/c8/31/38c831c1291e025623a640e43762c31d.jpg',
    angkatan: 22,
    address: 'Lampung'
  },
  {
    name: 'Habib Rizqi Alfarid',
    image : 'https://i.pinimg.com/736x/12/d9/fb/12d9fbbee2986fd5c1a15f33cfe5c2cf.jpg',
    angkatan: 22,
    address: 'Manado'
  },
  {
    name: 'Ridho Malik',
    image : 'https://i.pinimg.com/736x/fc/13/b5/fc13b528921b1fa97ba5584d32f2457c.jpg',
    angkatan: 22,
    address: 'Mojokerto'
  }]
  
  return(
    <div style ={{display: "grid",gridTemplateColumns: "repeat(3, 1fr)",gap: "10px",padding: "10px"}}>
      {profile.map((item,index)=> (
        <div key = {index} style = {{border: "1px solid black",padding: "10px",display: "flex",flexDirection: "column",alignItems: "center",fontFamily: "monospace",borderRadius: "10px",boxShadow:" 0 2px 4px rgba(0, 0, 0, 0.1)"}}>
          <h3>{item.name}</h3>
        <img src={item.image} style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}/>
            <p>Angkatan: {item.angkatan}</p>
            <p>Alamat: {item.address}</p>
        </div>
      ))}
    </div>
  )
}
 

export default App

