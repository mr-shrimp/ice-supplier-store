import { parseCsvLine } from "./parseCsvLine"
import type { HowItWorksStep } from "../types/HowItWorksStep"

export async function fetchHowItWorks(): Promise<HowItWorksStep[]> {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9s7B1l7Wb3CSYuy4Yho1G-btm5_MlADjyk_wxfmToRHMGif7CmA5v_LvSHZdX0DqnQkuBSz20BhAW/pub?gid=1949273194&single=true&output=csv"

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch How It Works steps")

  const csv = await res.text()
  const lines = csv.split("\n").filter(Boolean)

  const headers = parseCsvLine(lines[0]).map(h => h.toLowerCase())
  const steps: HowItWorksStep[] = []

  for (const line of lines.slice(1)) {
    const values = parseCsvLine(line)
    const row = Object.fromEntries(
      headers.map((h, i) => [h, values[i]])
    )

    if (!row.description || !row.order) continue

    steps.push({
      order: Number(row.order),
      description: row.description,
    })
  }

  // Ensure correct ordering (spreadsheet controls flow)
  steps.sort((a, b) => a.order - b.order)

  return steps
}
