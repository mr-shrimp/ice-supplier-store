import { parseCsvLine } from "./parseCsvLine"
import type { ContactSettings } from "../types/ContactSettings"

const CONTACT_SETTINGS_URL =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vR9s7B1l7Wb3CSYuy4Yho1G-btm5_MlADjyk_wxfmToRHMGif7CmA5v_LvSHZdX0DqnQkuBSz20BhAW/pub?gid=1485861467&single=true&output=csv"

const normalize = (value?: string) =>
  value?.replace(/^\[|\]$/g, "").trim()

export async function fetchContactSettings(): Promise<ContactSettings> {
  const res = await fetch(CONTACT_SETTINGS_URL, { cache: "no-store" })
  if (!res.ok) throw new Error("Failed to fetch contact settings")

  const csv = await res.text()
  const lines = csv.split("\n").filter(Boolean)

  const headers = parseCsvLine(lines[0]).map(h => h.toLowerCase())
  const settings: ContactSettings = {
    phone: {},
    whatsapp: {},
  }

  for (const line of lines.slice(1)) {
    const values = parseCsvLine(line)
    const row = Object.fromEntries(
      headers.map((h, i) => [h, values[i]])
    )

    if (!row.name || !row.value) continue

    const key = row.name.toLowerCase()

    if (key === "email address") {
      settings.email = row.value
    }

    if (key === "phone number - display") {
      settings.phone!.display = normalize(row.value)
    }

    if (key === "phone number") {
      settings.phone!.dial = row.value
    }

    if (key === "whatsapp number - display") {
      settings.whatsapp!.display = normalize(row.value)
    }

    if (key === "whatsapp number") {
      settings.whatsapp!.dial = row.value
    }

    if (key === "whatsapp default message") {
      settings.whatsapp!.defaultMessage = row.value
    }
  }

  return settings
}
