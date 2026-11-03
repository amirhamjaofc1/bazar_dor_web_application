import { Suspense } from "react";
import CategoryLink from "./NavlinkActive";

export default async function Navlinks() {
    'use cache';

  const data = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const categories = await data.json();

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 p-4 shadow-ms mb-0.5 bg-white">
      {categories.map((c) => (
        <div key={c.slug} className="flex items-center gap-2">
          {c.icon}

          <Suspense fallback={<div>Loading...</div>}>
            <CategoryLink
              categories={c}
              label={c.name}
            />
          </Suspense>
        </div>
      ))}
    </div>
  );
}
