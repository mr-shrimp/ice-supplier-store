import { parseCsvLine } from "./parseCsvLine"
import type { SiteSettings } from "../types/SiteSettings"

const SETTINGS_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9s7B1l7Wb3CSYuy4Yho1G-btm5_MlADjyk_wxfmToRHMGif7CmA5v_LvSHZdX0DqnQkuBSz20BhAW/pub?gid=0&single=true&output=csv"

function normalizeKey(key: string) {
  return key
    .toLowerCase()
    .replace(/\s+/g, "")
}

export async function fetchSiteSettings(): Promise<SiteSettings> {
  const res = await fetch(SETTINGS_URL, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch site settings")

  const csv = await res.text()
  const lines = csv.split("\n").filter(Boolean)

  const headers = parseCsvLine(lines[0]).map(h =>
    h.toLowerCase()
  )

  const settings: SiteSettings = {}

  for (const line of lines.slice(1)) {
    const values = parseCsvLine(line)
    const row = Object.fromEntries(
      headers.map((h, i) => [h, values[i]])
    )

    if (!row.name || !row.value) continue

    switch (normalizeKey(row.name)) {
      case "websitename":
        settings.websiteName = row.value
        break
      case "description":
        settings.description = row.value
        break
      case "deliverydisclaimer":
        settings.deliveryDisclaimer = row.value
        break
    }
  }

  return settings
}
