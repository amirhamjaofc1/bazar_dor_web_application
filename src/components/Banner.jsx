
import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-5">
      <div className="flex flex-col items-center justify-between gap-8 rounded-3xl border border-green-100 bg-white px-6 py-8 md:flex-row md:px-10 md:py-8">

        <div className="w-full md:w-3/5">
          <span className="inline-block rounded-full bg-[#e0f2e5] px-4 py-1 text-sm font-medium text-green-700">
            সোমবার, ৩ নভেম্বর, ২০২৬
          </span>

          <h1 className="mt-3 text-3xl font-bold leading-tight text-[#202820] md:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-500">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারজাতনিক বিবরণ, গড়, সর্বনিম্ন-সর্বোচ্চ এবং বাজার
            পরিবর্তনের এক জায়গায়।
          </p>

          <Link href="#AllProduct"> <button className="mt-6 rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-green-800">
            সব পণ দেখুন
          </button></Link>
        </div>

        <div className="flex w-full justify-center md:w-2/5">
          <Image
            src="/bazar-hero.png"
            alt="Vegetable basket"
            width={220}
            height={200}
            className="h-auto w-52 object-contain"
          />
        </div>

      </div>
    </section>
  );
}
