import AllProduct from "@/components/AllProduct";
import Banner from "@/components/Banner";
import ProductDown from "@/components/ProductDown";
import ProductUp from "@/components/ProductUp";



export default function Home() {
  return (
    <>
      <Banner />
      <ProductUp />
      <ProductDown />
      <AllProduct />
    </>
  );
}
