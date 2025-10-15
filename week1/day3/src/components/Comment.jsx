import Avatar from "./Avatar";
import User from "./User";
import CommentText from "./CommentText";

function Comment ({src,alt,name,date,text}){
    return(
        <div 
        style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "15px",
        margin: "15px 0",
        maxWidth: "500px",
        display: "flex",
        gap: "15px",                 // Jarak Avatar dan konten
        alignItems: "flex-start",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
      }}
        >
            <Avatar src={src} alt={alt} />
            <div>
                <User name={name} date={date} />
                <CommentText text={text} />
            </div>
        </div>
    )
}

export default Comment