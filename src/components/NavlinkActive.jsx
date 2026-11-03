"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CategoryLink({ categories }) {
  const pathname = usePathname();
  const href = `/cetagory/${categories.id}`;
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={isActive ? "text-green-600 font-bold" : "text-gray-700"}
    >
      {categories.nameBn}
    </Link>
  );
}
