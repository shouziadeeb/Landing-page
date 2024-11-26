import Image from "next/image";
import styles from "./ingreients.module.css";
import img1 from "../../../assets/ingredients/img/div.elbzotech-banner-info-thumb.png";
import img2 from "../../../assets/ingredients/img/div.elbzotech-banner-info-thumb (1).png";
import img3 from "../../../assets/ingredients/img/div.elbzotech-banner-info-wrap (1).png";
import img4 from "../../../assets/ingredients/img/bn2-4.jpg (1).png";
import img5 from "../../../assets/ingredients/img/div.elbzotech-banner-info-wrap.png";
import img6 from "../../../assets/ingredients/img/div.elbzotech-banner-info-thumb (3).png";

const ingredients1 = [
  {
    title: "Vitamin C",
    description: "Vitamin C as ascorbic acid",
    image: img1,
  },
  {
    title: "Vitamin B3",
    description: "Niacin for healthy gut and skin",
    image: img2,
  },
];
const ingredients2 = [
  {
    title: "Magnesium",
    description: "Boost energy and support muscle function",
    image: img3,
  },
  {
    title: "Hyaluronic Acid",
    description: "For smooth, supple, and soft skin!",
    image: img4,
  },
  {
    title: "Lactobacillus",
    description: "Invigorate your gut microbiome",
    image: img5,
  },
];

export const Ingredients = () => {
  return (
    <div className={styles.container}>
      <div className={styles.better_ingredients_container}>
        <div className={styles.first_row}>
          <div className={styles.better_ingredients}>
            <h5>INGREDIENTS</h5>
            <h2>Better Ingredients</h2>
            <p>
              Only the best when you choose products offered on our platform -
              high-quality ingredients for high-quality products!
            </p>
          </div>
          <div className={styles.first_row_card}>
            {ingredients1.map((ingredient, index) => (
              <div key={index} className={styles.card}>
                <Image src={ingredient.image} alt={ingredient.title} />
                <div className={styles.text}>
                  <h3>{ingredient.title}</h3>
                  <p>{ingredient.description}</p>
                  <a href="#">SEE MORE</a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.first_row}>
          {ingredients2.map((ingredient, index) => (
            <div key={index} className={styles.card}>
              <Image src={ingredient.image} alt={ingredient.title} />
              <div className={styles.text}>
                <h3>{ingredient.title}</h3>
                <p>{ingredient.description}</p>
                <a href="#">See More</a>
              </div>
            </div>
          ))}
          <Image src={img6} className={styles.circle_img} />
        </div>
      </div>
    </div>
  );
};
