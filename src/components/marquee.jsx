import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

export default async function Marquee() {
  "use cache";
  const data = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const products = await data.json();
  console.log(products);
  return (
    <div>
        <MarqueeText speed={20} direction="right" loop={true} className="bg-gray-100 p-1 shadow-sm">
      {products.map((product) => (
          <span key={product.id} className="mx-4 text-sm font-medium text-gray-800 ">
            {" "}
            {product.categoryIcon} {product.nameBn} {product.today}{" "}
            <span> টাকা / {product.unit} </span>{" "}
            {(product.change.dir === "up" ? (
                <span className="text-green-500">↑</span>
                ) : product.change.dir === "flat" ? (
                <span className="text-gray-500">→</span>
                ) : (
                <span className="text-red-500">↓</span>
                )
              )}
            {product.change.pct} <span>%</span>{" "}
          </span>
      ))}
    </MarqueeText>
    </div>
  );
}
