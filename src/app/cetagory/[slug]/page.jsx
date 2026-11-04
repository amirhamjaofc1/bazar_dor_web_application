import { Suspense } from "react";
import CetagoryPageProduct from "@/components/CetagoryPageProduct";

async function getCategoryProducts(slug) {
  "use cache";
  const data = await fetch(
    `https://api.api-store.workers.dev/api/bazardor/products?category=${slug}`,
  );
  return data.json();
}

async function CetagoryPageContent({ params }) {
  const { slug } = await params;
  const product = await getCategoryProducts(slug);
  console.log(product);
  return (
    <section className="min-h-screen bg-[#f0f6f1] px-3 py-5 md:px-5">
      <div className="mx-auto max-w-6xl space-y-4">
        <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#dfe8df] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
              {product[0].categoryIcon}
            </div>

            <div>
              <h1 className="text-xl font-bold text-[#202820]">
                {product[0].categoryNameBn}
              </h1>
              <p className="text-xs text-gray-500">
                {product.length}টি পণ্যের আজকের দাম ও পরিবর্তন
              </p>
            </div>
          </div>
        </div>
      </div>
      <CetagoryPageProduct products={product} />
    </section>
  );
}

export default function CetagoryPage({ params }) {
  return (
    <Suspense fallback={<p className="p-5 text-center">পণ্য লোড হচ্ছে...</p>}>
      <CetagoryPageContent params={params} />
    </Suspense>
  );
}
