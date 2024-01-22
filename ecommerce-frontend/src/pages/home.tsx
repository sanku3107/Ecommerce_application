import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
const HOME = () => {
  const addToCardHandler = () => {};

  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Product
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="ndvsbvbsk"
          name="Macbook"
          price={54725}
          stock={435}
          handler={addToCardHandler}
          photo="https://m.media-amazon.com/images/I/31+G-o8iK-L._SX342_SY445_.jpg"
        />
      </main>
    </div>
  );
};

export default HOME;
