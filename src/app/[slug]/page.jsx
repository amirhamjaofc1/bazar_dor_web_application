import { Suspense } from "react";
import { notFound } from "next/navigation";
import ProductSingleDetailsPage from "@/components/ProductSingleDetailsPage";
import LoadingSkeleton from "@/components/LoadingSkeleton";

async function getProduct(slug) {
  "use cache";
  const response = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products/${slug}`,
  );
  if (response.status === 404) {
    return null;
  }
  if (!response.ok) {
    throw new Error(`Failed to load product (${response.status})`);
  }
  return response.json();
}

async function SingleProductContent({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product || !Array.isArray(product.markets) || product.markets.length === 0) {
    notFound();
  }

  const minPrice = Math.min(...product.markets.map((item) => item.min));
  const maxPrice = Math.max(...product.markets.map((item) => item.max));
  const avgPrice =
    product.markets.reduce((sum, item) => sum + (item.min + item.max) / 2, 0) /
    product.markets.length;

  return (
    <ProductSingleDetailsPage
      product={product}
      minPrice={minPrice}
      maxPrice={maxPrice}
      avgPrice={avgPrice}
    />
  );
}

export default function SingleProduct({ params }) {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <SingleProductContent params={params} />
    </Suspense>
  );
}
