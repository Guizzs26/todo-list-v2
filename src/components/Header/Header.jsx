import logo from "../../assets/todoLogo.svg";
import styles from "./header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="todo logo" className="logo-img" />
    </header>
  );
}

export default Header;
