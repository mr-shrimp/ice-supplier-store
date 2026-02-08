import type { HeroSlide } from "../types/HeroSlide"
import { parseCsvLine } from "./parseCsvLine"

export async function fetchHeroSlides(): Promise<HeroSlide[]> {
  const url =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9s7B1l7Wb3CSYuy4Yho1G-btm5_MlADjyk_wxfmToRHMGif7CmA5v_LvSHZdX0DqnQkuBSz20BhAW/pub?gid=727663518&single=true&output=csv"

  const res = await fetch(url, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch hero slides")

  const csv = await res.text()
  const lines = csv.split("\n").filter(Boolean)

  const headers = parseCsvLine(lines[0]).map(h =>
    h.toLowerCase()
  )

  const slides: HeroSlide[] = []

  for (const line of lines.slice(1)) {
    const values = parseCsvLine(line)

    const row = Object.fromEntries(
      headers.map((h, i) => [h, values[i]])
    )

    if (!row.title || !row.subtitle || !row["image file name"]) continue

    slides.push({
      title: row.title,
      subtitle: row.subtitle,
      image: `/hero-slides/${row["image file name"]}`,
    })
  }
  
  return slides
}
