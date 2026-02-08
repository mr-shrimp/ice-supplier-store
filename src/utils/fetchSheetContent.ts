export async function fetchSheetContent(
    sheetId: string
): Promise<Record<string, string>> {

    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

    const res = await fetch(url, {
        cache: "no-store", //always fresh
    });

    if (!res.ok) {
        throw new Error("Failed to fetch content sheet");
    }

    const csv = await res.text();

    const lines = csv.split("\n").slice(1); // skip header

    const content: Record<string, string> = {};

    for (const line of lines) {
        const [key, value] = line.split(",").map(v =>
            v.replace(/^"|"$/g, "").trim()
        );

        if (key) content[key] = value ?? "";
    }

    return content;
}