import type { UseCase } from "../types/UseCase"
import { parseCsvLine } from "./parseCsvLine"

export async function fetchUseCases(): Promise<UseCase[]> {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9s7B1l7Wb3CSYuy4Yho1G-btm5_MlADjyk_wxfmToRHMGif7CmA5v_LvSHZdX0DqnQkuBSz20BhAW/pub?gid=32259704&single=true&output=csv"

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch use cases")

  const csv = await res.text()
  const lines = csv.split("\n").filter(Boolean)

  const headers = parseCsvLine(lines[0]).map(h => h.toLowerCase())
  const items: UseCase[] = []

  for (const line of lines.slice(1)) {
    const values = parseCsvLine(line)
    const row = Object.fromEntries(
      headers.map((h, i) => [h, values[i]])
    )

    if (!row.title || !row.subtitle) continue

    items.push({
      title: row.title,
      description: row.subtitle,
      icon: row.icon || "❄️", // safe fallback
    })
  }

  return items
}
