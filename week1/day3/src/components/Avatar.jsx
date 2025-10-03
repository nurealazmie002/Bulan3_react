function Avatar({src,alt}) {
    return (
        <img
        src={src} 
        alt={alt}
        style={{
        width: "60px",
        height: "60px",
        borderRadius: "50%",
        objectFit: "cover",
        marginRight: "10px"
        }}
        />
    )
}
export default Avatar