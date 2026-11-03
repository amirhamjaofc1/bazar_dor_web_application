import AllProduct from "@/components/AllProduct";
import ProductSingleDetailsPage from "@/components/ProductSingleDetailsPage";

export default async function SingleProduct({ params }) {
  "use cache";
  const { slug } = await params;
  const data = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${slug}`,
  );
  const product = await data.json();
  const minPrice = Math.min(...product.markets.map((item) => item.min));
  const maxPrice = Math.max(...product.markets.map((item) => item.max));
  const avgPrice =
    product.markets.reduce((sum, item) => sum + (item.min + item.max) / 2, 0) /
    product.markets.length;


  return (
    <>
    
    
        <ProductSingleDetailsPage product = {product} minPrice = {minPrice} maxPrice = {maxPrice} avgPrice = {avgPrice} />

    
    </>
  );
}
