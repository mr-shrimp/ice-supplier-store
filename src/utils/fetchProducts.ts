import type { Product } from "../types/Product"
import { parseCsvLine } from "./parseCsvLine"

export async function fetchProducts(): Promise<Product[]> {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9s7B1l7Wb3CSYuy4Yho1G-btm5_MlADjyk_wxfmToRHMGif7CmA5v_LvSHZdX0DqnQkuBSz20BhAW/pub?gid=1445554784&single=true&output=csv"

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch products")

  const csv = await res.text()
  const lines = csv.split("\n").filter(Boolean)

  const headers = parseCsvLine(lines[0]).map(h =>
    h.toLowerCase()
  )

  const products: Product[] = []

  for (const line of lines.slice(1)) {
    const values = parseCsvLine(line)

    const row = Object.fromEntries(
      headers.map((h, i) => [h, values[i]])
    )

    if (!row.title || !row.subtitle || !row["image file name"]) continue

    products.push({
      title: row.title,
      description: row.subtitle,
      image: `/our-products/${row["image file name"]}`,
    })
  }

  return products
}