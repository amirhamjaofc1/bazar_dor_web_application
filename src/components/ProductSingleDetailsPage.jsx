

export default function ProductSingleDetailsPage({
  product,
  minPrice,
  maxPrice,
  avgPrice,
  slug,
}) {
  return (
    <>
      <section className="min-h-screen bg-[#f0f6f1] px-3 py-5 md:px-5">
        <div className="mx-auto max-w-6xl space-y-4">
          <div className="flex flex-col justify-between gap-4 rounded-xl border border-[#dfe8df] bg-[#fbfdfb] p-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0f5f0] text-2xl">
                {product.categoryIcon}
              </div>

              <div>
                <h1 className="text-xl font-bold text-[#202820]">
                  {product.nameBn}
                </h1>
                <p className="text-xs text-gray-500">
                  প্রতি কেজি · {product.categoryNameBn}
                </p>
                <p className="mt-1 text-xs text-gray-600">
                  গতকালের তুলনায় আজ দাম বেড়েছে ·{" "}
                  {product.today - product.yesterday} টাকা
                </p>
              </div>
            </div>

            <div className="rounded-xl bg-[#f0f5f0] px-5 py-3 text-center sm:min-w-20">
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="text-2xl font-bold text-[#202820]">
                {product.today}
              </p>
              <p className="text-xs text-gray-500">টাকা / {product.unit}</p>
              <p className="mt-1 text-xs font-semibold">
                {product.change.dir === "up" && (
                  <span className="text-red-500">▲</span>
                )}
                {product.change.dir === "down" && (
                  <span className="text-green-500">▼</span>
                )}
                {product.change.pct}%
              </p>
            </div>
          </div>
          {/* Main Content */}
          <div className="rounded-xl border border-[#dfe8df] bg-[#fbfdfb] p-4">
            {/* Summary Cards */}
            <h2 className="mb-3 text-sm font-bold text-[#202820]">
              দামের সারসংক্ষেপ
            </h2>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <div className="rounded-xl border border-[#dfe8df] p-3">
                <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
                <p className="mt-1 text-lg font-bold text-green-600">
                  {minPrice} টাকা
                </p>
                <p className="text-xs text-gray-500">সবচেয়ে কম দামের বাজার</p>
              </div>

              <div className="rounded-xl border border-[#dfe8df] p-3">
                <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
                <p className="mt-1 text-lg font-bold text-red-500">
                  {maxPrice} টাকা
                </p>
                <p className="text-xs text-gray-500">
                  সবচেয়ে বেশি দামের বাজার
                </p>
              </div>

              <div className="rounded-xl border border-[#dfe8df] p-3">
                <p className="text-xs text-gray-500">গড় দাম</p>
                <p className="mt-1 text-lg font-bold text-[#202820]">
                  {Math.round(avgPrice)} টাকা
                </p>
                <p className="text-xs text-gray-500">
                  প্রতি {product.unit} হিসাবে
                </p>
              </div>
            </div>

            {/* Market Table */}
            <h2 className="mb-3 mt-5 text-sm font-bold text-[#202820]">
              বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[#dfe8df]">
              <table className="w-full min-w-[550px] border-collapse text-left text-xs">
                <thead className="bg-[#f8fbf8] text-gray-500">
                  <tr>
                    <th className="px-3 py-3 font-medium">বাজার</th>
                    <th className="px-3 py-3 font-medium">বিভাগ</th>
                    <th className="px-3 py-3 font-medium">সর্বনিম্ন</th>
                    <th className="px-3 py-3 font-medium">সর্বোচ্চ</th>
                    <th className="px-3 py-3 text-right font-medium">গড়</th>
                  </tr>
                </thead>

                <tbody>
                  {product.markets.map((item, ind) => (
                    <tr
                      key={`${item.market}-${item.division}`}
                      className={`border-t border-[#dfe8df] ${
                        ind % 2 === 0 ? "bg-[#fbfdfb]" : "bg-[#f0f6f1]"
                      }`}
                    >
                      <td className="px-3 py-3 font-medium text-[#202820]">
                        {item.market}
                      </td>

                      <td className="px-3 py-3 text-gray-600">
                        {item.division}
                      </td>

                      <td className="px-3 py-3 text-gray-600">
                        {item.min} টাকা
                      </td>

                      <td className="px-3 py-3 text-gray-600">
                        {item.max} টাকা
                      </td>

                      <td className="px-3 py-3 text-right font-semibold text-[#202820]">
                        {((item.min + item.max) / 2).toFixed(2)} টাকা
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
