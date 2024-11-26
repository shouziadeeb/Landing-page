"use client";

import styles from "./hero.module.css";

import img1 from "../../../assets/images/Frame-8363.png (1).png";
import img2 from "../../../assets/images/Frame-8364.png";
import img3 from "../../../assets/images/Frame-8365.png";
import img from "../../../assets/images/2023, 15_42_43 GMT+3.png";
import Image from "next/image";
import { useState } from "react";
export const Hero = () => {
  const [isLoading, setIsLoading] = useState(true);
  const heroSectionImgText = [
    {
      img: img1,
      name: "Vitamins",
      text: "Increased vitamins and minerals in your diet",
    },
    {
      img: img2,
      name: "Vitamins",
      name: "Weight Loss",
      text: "Weight Loss Find scinetifically provn solutions",
    },
    {
      img: img3,
      name: "Functional Foods",
      text: "Functional Foods From protein power to baby formula",
    },
  ];
  return (
    <main className={styles.hero}>
      <h1 className={styles.heading}>Essential Vitamins</h1>
      <div className={styles.box}>
        <div className={styles.left_text}>
          <p>Online Medical Supplies</p>
          <h4>Get Your Vitamins & Minerals</h4>
          <button>Explore</button>
        </div>
        <div className={styles.img_box}>
          {/* Skeleton */}
          {/* <Image src={img} alt="Loading Image" /> */}
          <img
            src="https://s3-alpha-sig.figma.com/img/6dd8/7f0a/f73aa0189cad884f47381dd92205b7c0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DcaKc2t7HPpursG6uVp~hfhLaGHBsvq4QFSKhKM8ogibxPmyRdwnH7OMWVoiw3OV0VA7s0ElG2QFuVDFTKNFwQBV6UP4aeoZLrh09jLvWT0hNOIU5b1EIPfID986FLpfulf2fRhFAwasTuJiqjDQfMt5CQ0hXva9crTgRSW4jyoal68alfcUHOzFQnRYudvCovs9qrWpJLYv3WYhvROCWfEuA9jlTEVQ5yXDGq3e1Y0scAqM-uY9fSH2zYHpou5nv~OdqS8hC4m9xKn~-pcCa9kEo8vMWSBipc6ZQIdjsIrp5VTPvz1Brhkca6med~Cw7RML0z6~oJkExpxrmCyg9Q__"
            alt="image"
          />
        </div>
        <div className={styles.right_text}>
          {heroSectionImgText.map((item, i) => (
            <div className={styles.right_text_img} key={i}>
              <div>
                <Image src={item.img} alt="j" />
              </div>
              <div>
                <h3>{item.name} </h3>
                <p>{item.text} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.circle}>
        <div></div>
        <div></div>
      </div>
    </main>
  );
};
