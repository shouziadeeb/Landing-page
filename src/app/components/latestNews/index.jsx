import styles from "./latestNews.module.css";
import Image from "next/image";
import imageBox from "../../../assets/images/div.item-post-inner.png";
import imageCapsules from "../../../assets/images/div.post-thumb.png";

export const LatestNews = () => {
  const imageArray = [imageBox, imageCapsules];
  return (
    <div className={styles.latestNews}>
      <p className={styles.para_heading}>Latest News</p>
      <div className={styles.img_container}>
        {[...Array(4)].map((_, repetitionIndex) => (
          <div key={repetitionIndex} className={styles.img_box}>
            <Image
              src={imageArray[0]}
              style={{ height: repetitionIndex % 2 == 0 ? "70%" : "30%" }}
              alt={`Image 0 - ${repetitionIndex}`}
            />
            <Image
              src={imageArray[1]}
              style={{ height: repetitionIndex % 2 == 0 ? "30%" : "70%" }}
              alt={`Image 1 - ${repetitionIndex}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
