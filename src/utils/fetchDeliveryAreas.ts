import { parseCsvLine } from "./parseCsvLine"
import type { DeliveryArea } from "../types/DeliveryArea"

const AREAS_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9s7B1l7Wb3CSYuy4Yho1G-btm5_MlADjyk_wxfmToRHMGif7CmA5v_LvSHZdX0DqnQkuBSz20BhAW/pub?gid=899087379&single=true&output=csv"

const NOTES_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9s7B1l7Wb3CSYuy4Yho1G-btm5_MlADjyk_wxfmToRHMGif7CmA5v_LvSHZdX0DqnQkuBSz20BhAW/pub?gid=910864241&single=true&output=csv"

export async function fetchDeliveryAreas(): Promise<DeliveryArea[]> {
  const [areasRes, notesRes] = await Promise.all([
    fetch(AREAS_URL, { cache: "no-store" }),
    fetch(NOTES_URL, { cache: "no-store" }),
  ])

  if (!areasRes.ok || !notesRes.ok) {
    throw new Error("Failed to fetch delivery areas")
  }

  const areasCsv = await areasRes.text()
  const notesCsv = await notesRes.text()

  // ---- Parse notes into a lookup ----
  const notesLines = notesCsv.split("\n").filter(Boolean)
  const notesHeaders = parseCsvLine(notesLines[0]).map(h => h.toLowerCase())

  const notesMap: Record<string, string> = {}

  for (const line of notesLines.slice(1)) {
    const values = parseCsvLine(line)
    const row = Object.fromEntries(
      notesHeaders.map((h, i) => [h, values[i]])
    )

    if (row.city && row.note) {
      notesMap[row.city] = row.note
    }
  }

  // ---- Parse areas & group suburbs ----
  const areasLines = areasCsv.split("\n").filter(Boolean)
  const areasHeaders = parseCsvLine(areasLines[0]).map(h => h.toLowerCase())

  const areaMap: Record<string, DeliveryArea> = {}

  for (const line of areasLines.slice(1)) {
    const values = parseCsvLine(line)
    const row = Object.fromEntries(
      areasHeaders.map((h, i) => [h, values[i]])
    )

    if (!row.city || !row.suburb) continue

    if (!areaMap[row.city]) {
      areaMap[row.city] = {
        city: row.city,
        suburbs: [],
        note: notesMap[row.city],
      }
    }

    areaMap[row.city].suburbs.push(row.suburb)
  }

  return Object.values(areaMap)
}
