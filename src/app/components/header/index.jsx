import Image from "next/image";
import styles from "./header.module.css";
import img from "../../../assets/images/image (2).png";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="left">
        <Image src={img} />
      </div>
      <div className="right"></div>
    </header>
  );
};
