import styles from "./header.module.css";
import logo from "../../assets/todoLogo.svg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="todo logo" className="logo-img" />
    </header>
  );
}

export default Header;
