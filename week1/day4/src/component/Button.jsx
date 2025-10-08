import styles from "./Button.module.css";

function Button({ type, label }) {
  const btnClass = type === "primary" ? styles.primary : styles.default;
  return <button className={btnClass}>{label}</button>;
}

export default Button;
