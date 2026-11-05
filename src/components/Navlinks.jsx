import { Suspense } from "react";
import CategoryLink from "./NavlinkActive";

export default async function Navlinks() {
    'use cache';

  const data = await fetch(
    "https://openapi.programming-hero.com/api/bazardor/categories",
  );
  const categories = await data.json();

  return (
    <nav
      aria-label="Product categories"
      className="mb-0.5 w-full overflow-x-auto bg-white shadow-sm"
    >
      <div className="flex w-max min-w-full flex-nowrap items-center gap-4 p-4 md:w-full md:flex-wrap md:justify-center">
        {categories.map((c) => (
          <div key={c.slug} className="flex shrink-0 items-center gap-2">
            {c.icon}

            <Suspense fallback={<div>Loading...</div>}>
              <CategoryLink categories={c} label={c.name} />
            </Suspense>
          </div>
        ))}
      </div>
    </nav>
  );
}
