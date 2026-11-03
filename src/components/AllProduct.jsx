export default async function AllProduct() {
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
        <div className="mx-auto max-w-6xl mb-8">
          <h2 className="mb-5 mt-5 flex flex-col gap-1 text-xl font-bold text-[#202820]">
            সব পণ্য
            <p className="text-sm font-normal text-gray-400">
              মোট {products.length}টি পণ্য দেখানো হচ্ছে
            </p>
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl border border-[#dfe8df] bg-[#fbfdfb] p-4 transition hover:shadow-md"
              >
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

                  <span
                    className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
                      p.change.dir === "up"
                        ? "bg-red-50 text-red-500"
                        : p.change.dir === "down"
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {p.change.dir === "up" ? (
                      <span>▲</span>
                    ) : p.change.dir === "down" ? (
                      <span>▼</span>
                    ) : null}
                    {p.change.dir} {p.change.pct}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
