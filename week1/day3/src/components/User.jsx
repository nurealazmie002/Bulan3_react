function User ({name,date}){
    return(
        <div>
            <h4 style= {{ margin: "10px",fontsize: "16px"}}>{name}</h4>
            <small style= {{color: "gray"}}>{date}</small>
        </div>
    )
}

export default User