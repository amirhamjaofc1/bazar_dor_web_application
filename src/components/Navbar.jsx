import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-white shadow-ms mb-0.5">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <Image className="bg-green-600 p-3 rounded-2xl" src="/logo-icon.png" alt="Bazar Dor Logo" width={50} height={50} />
            <div>
            <h1 className="text-xl font-bold text-gray-800">Bazar Dor</h1>
            <h5 className="text-xs font-light text-gray-500">মঙ্গলবার, ৬ অক্টোবর, ২০২৬</h5>
            </div>
        </div>
        <div className="space-x-4">
            <Link href="/login"> <button className="hover:bg-green-700 hover:text-white text-black font-bold py-2 px-4 rounded-2xl shadow-md">সাইন ইন</button></Link>
            <Link href="/register"> <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-2xl shadow-md">সাইন আপ</button></Link>
        </div>
      </div>
    </div>
  );
}
