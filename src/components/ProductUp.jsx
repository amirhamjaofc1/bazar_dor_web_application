import Link from "next/link";

export default async function ProductUp() {
  "use cache";
  const Product = await fetch(
    "https://api.api-store.workers.dev/api/bazardor/products",
  );
  const products = await Product.json();

  //   {products
  //   .filter((p) => p.change?.dir === "up")
  //   .map((p) => (
  //     <div key={p.id}>
  //       {p.nameBn} — {p.change.dir}
  //     </div>
  //   ))}

  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-[#202820]">
            <span className="text-red-500">▲</span>
            আজ দাম বেড়েছে
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products
              .slice(0, 12)
              .filter((p) => p.change?.dir === "up")
              .map((p) => (
                <Link key={p.id} href={`/${p.id}`}>
                  <div className="rounded-2xl border border-[#dfe8df] bg-[#fbfdfb] p-4 transition hover:shadow-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                        {p.categoryIcon}
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#202820]">
                          {p.nameBn}
                        </h3>
                        <p className="text-xs text-gray-600">{p.unit}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <p className="text-xs text-gray-500">আজকের দাম</p>

                        <p className="mt-1 text-lg font-bold text-[#202820]">
                          {p.today}{" "}
                          <span className="text-sm font-normal">টাকা</span>
                        </p>
                      </div>

                      <span className="flex items-center gap-1 rounded-full bg-[#f0f5f0] px-3 py-1 text-xs font-semibold text-red-500">
                        <span>▲</span>
                        {p.change.dir} {p.change.pct}%
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
