import Hello from "./components/Hello"
import Product from "./components/product"
import Card from "./components/card"
import Comment from "./components/Comment"

function App(){
  return(
  <div>
    <div>
      <Hello name="Naufal" />
    </div>

    <div>
      <Product productName="Mouse" price="20000" Stock="10" isAvailable={true} />
    </div>
    
    <div>
      <h1>Tugas 3</h1>
      <Card>
      <h2>Kartu biodata</h2>
      
      <img style={{width: "200px",objectFit:"cover",borderRadius:"50%",margin:"10px",}} src="https://i.pinimg.com/736x/72/05/6e/72056e4839bc598ecf5a7c9b8b7ae5cf.jpg"/>
      <p>老虎和它可爱的孩子</p>
      </Card>
    </div>

    <div>
    <h1>Komentar Tugas 4</h1>
    <Comment 
    src ="https://i.pinimg.com/736x/84/a1/28/84a128b7f0d01b1567a33d6b7bd23e31.jpg"
    alt= "Profile"
    name= "Azti Andini"
    date= "2023-05-01"
    text= "Bagus banget ilustrasi nya, suka pake banget"
    />
    <Comment 
    src ="https://i.pinimg.com/736x/13/1f/f4/131ff4908fd0c8f82e17860d54262949.jpg"
    alt= "Profile"
    name= "Mun Gyu"
    date= "2024-08-20"
    text= "插图太棒了，我非常喜欢！"
    />
    <Comment 
    src ="https://i.pinimg.com/736x/4d/9c/a0/4d9ca02db36633034a1d84da409a57d8.jpg"
    alt= "Profile"
    name= "Rin Cheng"
    date= "2023-09-17"
    text= "삽화가 정말 멋져요, 저는 정말 좋아해요!"
    />
    </div>
  </div>
)
}

export default App