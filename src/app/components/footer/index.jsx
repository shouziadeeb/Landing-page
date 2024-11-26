import styles from "./footer.module.css";
import img1 from "../../../assets/images/Component-2.svg.png";
import img2 from "../../../assets/images/Component-2-1.svg.png";
import img3 from "../../../assets/images/Component-2-2.svg.png";
import logo from "../../../assets/images/image (2).png";

import Image from "next/image";
export const Footer = () => {
  const detailsArray = [
    {
      img: img1,
      name: "Phone Number",
      text: "+974 3118 1843",
    },
    {
      img: img2,
      name: "Email Address",
      text: "Elbrithcqhr@gmail.com",
    },
    {
      img: img3,
      name: "Office Location",
      text: " Ambassador Street, Zone 61,",
    },
  ];
  return (
    <footer className={styles.footer}>
      <div className={styles.details}>
        {detailsArray.map((detail) => (
          <div className={styles.detail_box}>
            <div>
              <Image src={detail.img} alt="not found" />
            </div>
            <div>
              <p>{detail.name}</p>
              <p style={{ color: "white", fontWeight: "bold" }}>
                {detail.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.img_and_text}>
        <Image src={logo} alt="not found" />
        <p>
          Your health, physical and emotional well-being is important to us. We
          are always by your side and have made it even easier for you to find
          the necessary vitamins.
        </p>
      </div>
      <p className={styles.footer_last_text}>
        Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051
      </p>
    </footer>
  );
};
