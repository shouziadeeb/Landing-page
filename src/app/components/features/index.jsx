import styles from "./features.module.css";
import imageCapsules from "../../../assets/images/a.item-icon-e.png";
import Image from "next/image";

export const Features = () => {
  const featuresArray = [
    {
      img: imageCapsules,
      name: "Clinically Studied",
      text: "All products that we offer have undergone lab and safety tests",
    },
    {
      img: imageCapsules,
      name: "Vegetarian Friendly",
      text: "We have a wide selection of vegetarian products to meet your neeeds",
    },
    {
      img: imageCapsules,
      name: "Made In India",
      text: "Shop local and explore health product made right here in India",
    },
    {
      img: imageCapsules,
      name: "Free Shipping",
      text: "We deliver to your door with no shipping costs on your orders",
    },
    {
      img: imageCapsules,
      name: "No Risk",
      text: "We ensure that all products are safe and within their use-by date",
    },
    {
      img: imageCapsules,
      name: "GMO Free",
      text: "Natural, no modified products and derivatives for those who need it",
    },
  ];
  return (
    <div className={styles.features}>
      <div className={styles.features_box}>
        <div className={styles.all_features}>
          {featuresArray.map((feature) => (
            <div className={styles.feature_box}>
              <Image src={imageCapsules} alt="h" />
              <h4>{feature.name} </h4>
              <p>{feature.text} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
