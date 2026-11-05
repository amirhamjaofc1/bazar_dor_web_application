
"use client";

import { useMemo, useState } from "react";
import DropDown from "@/components/DropDown";
import CetagoryPageProduct from "@/components/CetagoryPageProduct";

export default function CategoryProducts({ products }) {
  const [sort, setSort] = useState("default");
  const sortedProducts = useMemo(() => {
    const sorted = [...products];

    if (sort === "low") {
      sorted.sort((a, b) => a.today - b.today);
    } else if (sort === "high") {
      sorted.sort((a, b) => b.today - a.today);
    }

    return sorted;
  }, [products, sort]);

  return (
    <>
      <DropDown sort={sort} onSortChange={setSort} />
      <CetagoryPageProduct products={sortedProducts} />
    </>
  );
}
