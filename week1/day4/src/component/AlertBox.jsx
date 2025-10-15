function AlertBox({ type, message }) {
  const getStyle = () => {
    switch (type) {
      case "success":
        return { backgroundColor: "#d4edda", color: "#155724" };
      case "warning":
        return { backgroundColor: "#fff3cd", color: "#856404" };
      case "error":
        return { backgroundColor: "#f8d7da", color: "#721c24" };
      default:
        return {};
    }
  };

  return (
    <div style={{ ...getStyle(), padding: "15px", borderRadius: "8px", margin: "10px" }}>
      {message}
    </div>
  );
}

export default AlertBox;
