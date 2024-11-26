import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import { LatestNews } from "./components/latestNews";
import { Ingredients } from "./components/ingredients";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Features />
        <Ingredients />
        <LatestNews />
        <Footer />
      </main>
    </div>
  );
}
